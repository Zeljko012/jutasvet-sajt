import catalogFile from '../data/catalog.json'
import { db, getSettings, saveSettings } from '../db'
import type { Product, Variant } from '../types'

interface CatalogProduct {
  slug: string
  name: string
  category: string
  price: number
  /** varijante: label = prva opcija (npr. debljina), size = ostale (npr. dužina) */
  colors: { key: string; label: string; size?: string; price?: number }[]
  image: string
}
interface CatalogFile {
  version: number
  products: CatalogProduct[]
}
const catalog = catalogFile as CatalogFile

export const CATEGORY_LABEL: Record<string, string> = {
  'kanap-i-tkanina': 'Kanap i tkanina',
  'sport-i-penjanje': 'Sport i penjanje',
  'kuca-i-dekoracija': 'Kuća i dekoracija',
  'propratni-materijal': 'Propratni materijal',
}
export const categoryLabel = (c?: string) => (c ? CATEGORY_LABEL[c] ?? c : 'Ostalo')

/** Gde stoje slike proizvoda: aplikacija je u /admin/ ispod sajta, pa su slike jedan nivo iznad. */
export function siteBase(): string {
  if (import.meta.env.DEV) return 'https://zeljko012.github.io/jutasvet-sajt/'
  try {
    return new URL('../', document.baseURI).href
  } catch {
    return '/'
  }
}

export interface SyncResult {
  added: number
  updated: number
  archived: number
}

/**
 * Usklađuje katalog aplikacije sa katalogom sajta (cene, nazivi, boje, slike).
 * Zaliha i trošak izrade koje si ti uneo ostaju netaknuti. Sajt je izvor istine za cene.
 */
export async function syncCatalog(force = false): Promise<SyncResult> {
  const result: SyncResult = { added: 0, updated: 0, archived: 0 }
  const settings = await getSettings()
  if (!force && settings.catalogVersion === catalog.version) return result

  const base = siteBase()
  const existing = await db.products.toArray()
  const byHandle = new Map(existing.filter((p) => p.source === 'sajt').map((p) => [p.handle, p]))
  const seen = new Set<string>()
  const puts: Product[] = []
  const now = Date.now()

  for (const c of catalog.products) {
    seen.add(c.slug)
    const img = c.image ? base + c.image : ''
    const cur = byHandle.get(c.slug)

    if (!cur) {
      puts.push({
        id: `site:${c.slug}`,
        handle: c.slug,
        title: c.name,
        imageUrl: img,
        images: img ? [img] : [],
        active: true,
        source: 'sajt',
        category: c.category,
        lowStock: null,
        variants: c.colors.map((col) => ({
          id: `site:${c.slug}:${col.key}`,
          sku: `${c.slug}-${col.key}`,
          optionKey: col.key,
          color: col.label,
          size: col.size ?? '',
          price: col.price ?? c.price,
          stock: 0,
          imageUrl: img,
        })),
        // 0 = nedirnuto: izmene koje je korisnik uneo na drugom uređaju (zaliha, trošak) uvek pobeđuju
        updatedAt: 0,
      })
      result.added++
      continue
    }

    const priceOf = (key?: string) => c.colors.find((col) => col.key === key)?.price ?? c.price
    const variants: Variant[] = cur.variants.map((v) => ({ ...v, price: priceOf(v.optionKey), imageUrl: img || v.imageUrl }))
    for (const col of c.colors) {
      if (!variants.some((v) => v.optionKey === col.key)) {
        variants.push({ id: `site:${c.slug}:${col.key}`, sku: `${c.slug}-${col.key}`, optionKey: col.key, color: col.label, size: col.size ?? '', price: col.price ?? c.price, stock: 0, imageUrl: img })
      }
    }
    const next: Product = { ...cur, title: c.name, category: c.category, imageUrl: img || cur.imageUrl, images: img ? [img] : cur.images, active: true, variants }
    const changed =
      cur.title !== next.title ||
      cur.category !== next.category ||
      cur.imageUrl !== next.imageUrl ||
      !cur.active ||
      cur.variants.length !== variants.length ||
      cur.variants.some((v, i) => v.price !== variants[i].price)
    if (changed) {
      puts.push({ ...next, updatedAt: now })
      result.updated++
    }
  }

  for (const p of existing) {
    if (p.source === 'sajt' && p.active && !seen.has(p.handle)) {
      puts.push({ ...p, active: false, updatedAt: now })
      result.archived++
    }
  }

  if (puts.length) await db.products.bulkPut(puts)
  await saveSettings({ catalogVersion: catalog.version, catalogSeeded: true })
  return result
}

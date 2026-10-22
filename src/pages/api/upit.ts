import type { APIRoute } from "astro";
import { Resend } from "resend";
import { SITE } from "../../data/site";

export const prerender = false;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });

const esc = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

interface Inquiry {
  name?: string;
  email?: string;
  phone?: string;
  product?: string;
  message?: string;
  /** honeypot — botovi popunjavaju skriveno polje */
  company?: string;
}

/**
 * Upit sa kontakt forme (i za proizvode sa „cenom na upit").
 * Šalje mejl vlasniku; odgovor ide direktno kupcu (replyTo).
 */
export const POST: APIRoute = async ({ request }) => {
  let b: Inquiry;
  try {
    const raw = await request.text();
    if (raw.length > 8000) return json({ ok: false, error: "Poruka je preduga." }, 413);
    b = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: "Neispravan zahtev." }, 400);
  }
  if (b.company) return json({ ok: true });

  const name = (b.name || "").trim().slice(0, 120);
  const email = (b.email || "").trim().slice(0, 200);
  const phone = (b.phone || "").trim().slice(0, 60);
  const product = (b.product || "").trim().slice(0, 200);
  const message = (b.message || "").trim().slice(0, 4000);

  if (!email && !phone) return json({ ok: false, error: "Ostavite email ili telefon da bismo vam odgovorili." }, 400);
  if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return json({ ok: false, error: "Neispravna email adresa." }, 400);
  if (message.length < 3) return json({ ok: false, error: "Napišite poruku." }, 400);

  // trag u logu (Vercel → Logs), da upit ne bude izgubljen ni kad mejl ne uspe
  console.log("NOVI UPIT", JSON.stringify({ name, email, phone, product, message }));

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return json(
      { ok: false, error: `Slanje trenutno nije moguće. Pišite nam na ${SITE.email} ili pozovite ${SITE.phone}.` },
      503,
    );
  }

  const to = (process.env.ORDER_TO || SITE.email)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const subject = `✉️ Upit${product ? `: ${product}` : ""} — ${name || email || phone}`;
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.55;color:#2a2420;max-width:560px">
      <h2 style="margin:0 0 12px">Novi upit sa sajta</h2>
      ${product ? `<p style="margin:0 0 8px"><strong>Proizvod:</strong> ${esc(product)}</p>` : ""}
      <p style="margin:0 0 4px"><strong>Ime:</strong> ${esc(name) || "—"}</p>
      <p style="margin:0 0 4px"><strong>Email:</strong> ${email ? `<a href="mailto:${esc(email)}" style="color:#6b4330">${esc(email)}</a>` : "—"}</p>
      <p style="margin:0 0 14px"><strong>Telefon:</strong> ${phone ? `<a href="tel:${esc(phone)}" style="color:#6b4330">${esc(phone)}</a>` : "—"}</p>
      <p style="white-space:pre-wrap;background:#f5f1e8;border:1px solid #d6cbb8;border-radius:10px;padding:12px">${esc(message)}</p>
    </div>`;
  const text =
    `Novi upit sa sajta\n\n` +
    (product ? `Proizvod: ${product}\n` : "") +
    `Ime: ${name}\nEmail: ${email}\nTelefon: ${phone}\n\n${message}\n`;

  try {
    const resend = new Resend(apiKey);
    const r = await resend.emails.send({
      from: process.env.ORDER_FROM || `${SITE.name} <onboarding@resend.dev>`,
      to,
      ...(email ? { replyTo: email } : {}),
      subject,
      html,
      text,
    });
    if (r.error) throw new Error(r.error.message);
    return json({ ok: true });
  } catch (e) {
    console.error("Upit nije poslat", e);
    return json(
      { ok: false, error: `Slanje nije uspelo. Pišite nam na ${SITE.email} ili pozovite ${SITE.phone}.` },
      502,
    );
  }
};

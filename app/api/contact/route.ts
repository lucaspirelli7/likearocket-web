import { NextResponse } from "next/server";

/**
 * Recibe el formulario de contacto.
 *
 * Hoy solo valida y registra en consola del servidor. Para producción:
 *  - enviar email (Resend / SendGrid / SMTP), o
 *  - crear un lead en el CRM, o
 *  - crear evento en el calendario (Cal.com / Calendly).
 */

interface ContactPayload {
  nombre?: string;
  empresa?: string;
  telefono?: string;
  sector?: string;
  mensaje?: string;
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const required: (keyof ContactPayload)[] = ["nombre", "empresa", "telefono", "sector", "mensaje"];
  const missing = required.filter((k) => !body[k]?.toString().trim());
  if (missing.length) {
    return NextResponse.json({ error: `Faltan campos: ${missing.join(", ")}` }, { status: 422 });
  }

  // TODO: integrar con email / CRM / calendario.
  console.info("[contacto] nuevo lead:", {
    ...body,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}

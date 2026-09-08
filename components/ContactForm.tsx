"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form contact-form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="nombre">Nombre *</label>
        <input type="text" id="nombre" name="nombre" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="empresa">Empresa *</label>
        <input type="text" id="empresa" name="empresa" autoComplete="organization" required />
      </div>
      <div className="field">
        <label htmlFor="telefono">Teléfono *</label>
        <input type="tel" id="telefono" name="telefono" autoComplete="tel" required />
      </div>
      <div className="field">
        <label htmlFor="sector">Sector *</label>
        <input type="text" id="sector" name="sector" placeholder="Clínica, reformas, asesoría…" required />
      </div>
      <div className="field">
        <label htmlFor="mensaje">¿Qué quieres conseguir? *</label>
        <textarea id="mensaje" name="mensaje" required />
      </div>

      <button type="submit" className="btn btn--primary btn--lg btn--block" disabled={status === "sending"}>
        {status === "sending" ? "Enviando…" : "Reserva tu diagnóstico gratuito"}
      </button>

      {status === "ok" && (
        <p role="status" className="muted" style={{ fontSize: "0.9rem", color: "var(--cyan)" }}>
          Gracias. Te contactamos en menos de 24 h en días laborables.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="muted" style={{ fontSize: "0.9rem", color: "var(--magenta-bright)" }}>
          No se pudo enviar. Escríbenos directamente a{" "}
          <a href="mailto:pedro@likearocket.es" style={{ color: "var(--cyan)" }}>
            pedro@likearocket.es
          </a>
          .
        </p>
      )}
      <p className="muted" style={{ fontSize: "0.85rem" }}>
        Los campos con * son obligatorios. Te respondemos en menos de 24 h en días laborables.
      </p>
    </form>
  );
}

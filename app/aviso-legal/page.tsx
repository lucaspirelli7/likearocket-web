import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Aviso legal", robots: { index: false } };

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso legal">
      <p>
        Titular: {site.legalName}. Contacto: {site.email} · {site.phone}. Sitio: {site.url}.
      </p>
    </LegalPage>
  );
}

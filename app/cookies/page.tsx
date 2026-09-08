import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Política de cookies", robots: { index: false } };

export default function CookiesPage() {
  return (
    <LegalPage title="Política de cookies">
      <p>
        Esta web no instala cookies de terceros por defecto. Si en el futuro se añaden herramientas de
        analítica o publicidad, se pedirá tu consentimiento antes de activarlas.
      </p>
    </LegalPage>
  );
}

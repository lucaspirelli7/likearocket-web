import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Política de privacidad", robots: { index: false } };

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad">
      <p>
        Los datos del formulario de contacto se usan solo para responder a tu solicitud y no se ceden
        a terceros. Puedes pedir su acceso, rectificación o eliminación escribiendo a la dirección de
        contacto.
      </p>
    </LegalPage>
  );
}

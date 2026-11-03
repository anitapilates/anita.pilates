import ServicioPage from "../../../components/ServicioPage";
import { metadatos } from "../../../content/seo";

export const metadata = metadatos("es", "sesiones");

// Se regenera cada día (por el bloque del próximo evento).
export const revalidate = 86400;

export default function Page() {
  return <ServicioPage idioma="es" pagina="sesiones" />;
}

import HomePage from "../../components/HomePage";
import { metadatos } from "../../content/seo";

export const metadata = metadatos("es");

// Se regenera cada día para que un evento pasado deje de mostrarse solo.
export const revalidate = 86400;

export default function Page() {
  return <HomePage idioma="es" />;
}

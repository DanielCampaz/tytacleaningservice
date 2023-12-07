import { AboutComponent } from "./about/page";
import Contact from "./contact/page";
import { ProjectsComponent } from "./projects/page";
import Services, { ServicesComponent } from "./services/page";

export default function Home() {
  /*
  TODO: Todas las variables de entorno que se utilicen en que empicen con NEXT_PUBLIC_ Se podran leer desde el cliente
  las que no empiezen por NEXT_PUBLIC_ solo por el servicor
  const { publicRuntimeConfig } = getConfig();
  console.log(publicRuntimeConfig);
  */
  return (
    <>
      <AboutComponent />
      <ServicesComponent />
      <ProjectsComponent slice={3} />
      <Contact />
    </>
  );
}

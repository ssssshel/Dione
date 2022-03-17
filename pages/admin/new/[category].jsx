import { useRouter } from "next/router";
import { useEffect } from "react/cjs/react.development";
import Form from "../../../components/Form";

const Item = () => {
  const router = useRouter();
  const { category } = router.query;

  // OBJETOS DE CADA FORMULARIO DE ACUERDO A SU CATEGORIA

  const formPlaneta = {
    name: "",
    category: "Planetas",
    diameter: "",
    mass: "",
    volume: "",
    density: "",
    gravity: "",
    rotPeriod: "",
    orbPeriod: "",
    inclination: "",
    atmPressure: "",
    temperature: "",
    periastron: "",
    aphelion: "",
    urlImg: "",
    urlImg2: "",
  };

  const formPlanetaEnano = {
    name: "",
    category: "Planetas Enanos",
    diameter: "",
    mass: "",
    volume: "",
    density: "",
    gravity: "",
    rotPeriod: "",
    orbPeriod: "",
    inclination: "",
    atmPressure: "",
    temperature: "",
    periastron: "",
    aphelion: "",
    urlImg: "",
    urlImg2: "",
  };

  const formSatelite = {
    name: "",
    category: "Satelites",
    parent: "",
    diameter: "",
    mass: "",
    volume: "",
    density: "",
    gravity: "",
    orbPeriod: "",
    orbRadius: "",
    inclination: "",
    atmPressure: "",
    temperature: "",
    urlImg: "",
    urlImg2: "",
  };

  const formAsteroide = {
    name: "",
    category: "Asteroides",
    diameter: "",
    mass: "",
    volume: "",
    density: "",
    gravity: "",
    rotPeriod: "",
    orbPeriod: "",
    temperature: "",
    periastron: "",
    aphelion: "",
    urlImg: "",
    urlImg2: "",
  };

  const formCometa = {
    name: "",
    category: "Cometas",
    diameter: "",
    mass: "",
    volume: "",
    density: "",
    gravity: "",
    rotPeriod: "",
    orbPeriod: "",
    temperature: "",
    periastron: "",
    aphelion: "",
    urlImg: "",
    urlImg2: "",
  };

  const formEstrella = {
    name: "",
    category: "Estrellas",
    diameter: "",
    mass: "",
    volume: "",
    density: "",
    gravity: "",
    temperature: "",
    urlImg: "",
    urlImg2: "",
  };

  // MEDIANTE LOS PROPS SE ESTABLECE EL OBJETO A UTILIZAR DE ACUERDO A LA CATEGORIA DENTRO DE LA URL
  return (
    <div>
      <h1>Agregar {category} </h1>
      {category == "planetas" ? (
        <Form formData={formPlaneta} formCategory="Planetas" />
      ) : category == "planetas-enanos" ? (
        <Form formData={formPlanetaEnano} formCategory="Planetas Enanos" />
      ) : category == "satelites" ? (
        <Form formData={formSatelite} formCategory="Satelites" />
      ) : category == "asteroides" ? (
        <Form formData={formAsteroide} formCategory="Asteroides" />
      ) : category == "cometas" ? (
        <Form formData={formCometa} formCategory="Cometas" />
      ) : category == "estrellas" ? (
        <Form formData={formEstrella} formCategory="Estrellas" />
      ) : (
        <h2>Category inválido</h2>
      )}
    </div>
  );
};

export default Item;

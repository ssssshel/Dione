import { useRouter } from "next/router";
import useSWR from "swr";

import HeadLayout from "../../../../components/Head";
import Form from "../../../../components/Form";

// LA FUNCION FETCHER SE ENCARGA DE SOLICITAR LA INFORMACIÓN (GET) A LA URL INGRESADA COMO PARAMETRO PARA ASI RETORNAR LA DATA O EL ERROR EN CUESTIÓN

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error(
      "Ha ocurrido un error mientras se solicitaba la información"
    );
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const { data } = await res.json();
  return data;
};

const EditItem = () => {
  const router = useRouter();
  const { id, category } = router.query;

  // SE SOLICITA LA DATA A LA API PARA MOSTRARLA DE MANERA ACTUALIZADA
  const { data: items, error } = useSWR(
    id ? `/api/data/${category}/${id}` : null,
    fetcher
  );

  if (error) {
    return (
      <div>
        <HeadLayout section={"error"} />
        <h2>{error}</h2>
        <p onClick={() => router.push(`/`)}>Volver</p>
      </div>
    );
  }

  if (!items) {
    return <div>Cargando...</div>;
  }

  const formPlaneta = {
    name: items.name,
    category: items.category,
    diameter: items.diameter,
    mass: items.mass,
    volume: items.volume,
    density: items.density,
    gravity: items.gravity,
    rotPeriod: items.rotPeriod,
    orbPeriod: items.orbPeriod,
    inclination: items.inclination,
    atmPressure: items.atmPressure,
    temperature: items.temperature,
    periastron: items.periastron,
    aphelion: items.aphelion,
    urlImg: items.urlImg,
    urlImg2: items.urlImg2,
  };

  const formPlanetaEnano = {
    name: items.name,
    category: items.category,
    diameter: items.diameter,
    mass: items.mass,
    volume: items.volume,
    density: items.density,
    gravity: items.gravity,
    rotPeriod: items.rotPeriod,
    orbPeriod: items.orbPeriod,
    inclination: items.inclination,
    atmPressure: items.atmPressure,
    temperature: items.temperature,
    periastron: items.periastron,
    aphelion: items.aphelion,
    urlImg: items.urlImg,
    urlImg2: items.urlImg2,
  };

  const formAsteroide = {
    name: items.name,
    category: items.category,
    diameter: items.diameter,
    mass: items.mass,
    volume: items.volume,
    density: items.density,
    gravity: items.gravity,
    rotPeriod: items.rotPeriod,
    orbPeriod: items.orbPeriod,
    temperature: items.temperature,
    periastron: items.periastron,
    aphelion: items.aphelion,
    urlImg: items.urlImg,
    urlImg2: items.urlImg2,
  };

  const formCometa = {
    name: items.name,
    category: items.category,
    diameter: items.diameter,
    mass: items.mass,
    volume: items.volume,
    density: items.density,
    gravity: items.gravity,
    rotPeriod: items.rotPeriod,
    orbPeriod: items.orbPeriod,
    temperature: items.temperature,
    periastron: items.periastron,
    aphelion: items.aphelion,
    urlImg: items.urlImg,
    urlImg2: items.urlImg2,
  };

  const formEstrella = {
    name: items.name,
    category: items.category,
    diameter: items.diameter,
    mass: items.mass,
    volume: items.volume,
    density: items.density,
    gravity: items.gravity,
    temperature: items.temperature,
    urlImg: items.urlImg,
    urlImg2: items.urlImg2,
  };

  return (
    <div>
      <HeadLayout section={`Editar ${category}`} />
      {category == "planetas" ? (
        <Form
          formData={formPlaneta}
          formNewItem={false}
          formCategory="Planetas"
          formSatelite={false}
        />
      ) : category == "planetas-enanos" ? (
        <Form
          formData={formPlanetaEnano}
          formNewItem={false}
          formCategory="Planetas Enanos"
          formSatelite={false}
        />
      ) : category == "asteroides" ? (
        <Form
          formData={formAsteroide}
          formNewItem={false}
          formCategory="Asteroides"
          formSatelite={false}
        />
      ) : category == "cometas" ? (
        <Form
          formData={formCometa}
          formNewItem={false}
          formCategory="Cometas"
          formSatelite={false}
        />
      ) : category == "estrellas" ? (
        <Form
          formData={formEstrella}
          formNewItem={false}
          formCategory="Estrellas"
          formSatelite={false}
        />
      ) : (
        <h2>Category inválido</h2>
      )}
    </div>
  );
};

export default EditItem;

import { useRouter } from "next/router";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import Link from "next/link";

import HeadLayout from "../../../../../components/Head";
import Form from "../../../../../components/Form";

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

const EditSatelite = () => {
  const router = useRouter();
  const { id, category } = router.query;

  const { data: session, status } = useSession();

  // SE SOLICITA LA DATA A LA API PARA MOSTRARLA DE MANERA ACTUALIZADA
  const { data: items, error } = useSWR(
    id ? `/api/data/satelites/${id}` : null,
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

  if (status == "unauthenticated") {
    return (
      <div>
        <h1>No has iniciado sesión como administrador</h1>
        <button onClick={() => router.push("/api/auth/signin/github")}>
          Registrarse con github
        </button>
        <Link href="/">
          <a>Volver</a>
        </Link>
      </div>
    );
  }

  const formSatelite = {
    name: items.name,
    category: items.category,
    parent: items.parent,
    diameter: items.diameter,
    mass: items.mass,
    volume: items.volume,
    density: items.density,
    gravity: items.gravity,
    orbPeriod: items.orbPeriod,
    orbRadius: items.orbRadius,
    inclination: items.inclination,
    atmPressure: items.atmPressure,
    temperature: items.temperature,
    urlImg: items.urlImg,
    urlImg2: items.urlImg2,
  };
  return (
    <div>
      <HeadLayout section={"Editar Satélite"} />
      <Form
        formData={formSatelite}
        formNewItem={false}
        formCategory="Satelites"
        formSatelite={true}
      />
    </div>
  );
};

export default EditSatelite;

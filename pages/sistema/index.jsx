import Planeta from "../../models/Planeta";
import PlanetaEnano from "../../models/PlanetaEnano";
import Satelite from "../../models/Satelite";
import Asteroide from "../../models/Asteroide";
import Cometa from "../../models/Cometa";
import Estrella from "../../models/Estrella";
import connectDb from "../../lib/connectDb";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Footer from "../../components/Footer";
import HeadLayout from "../../components/Head";
import Navbar from "../../components/Navbar";

export default function General({
  success,
  error,
  planetas,
  planetasEnanos,
  satelites,
  asteroides,
  cometas,
  estrellas,
}) {
  const planetsWithSat = [
    {
      name: "Tierra",
      urlName: "tierra",
    },
    {
      name: "Marte",
      urlName: "marte",
    },
    {
      name: "Júpiter",
      urlName: "jupiter",
    },
    {
      name: "Saturno",
      urlName: "saturno",
    },
    {
      name: "Urano",
      urlName: "urano",
    },
    {
      name: "Neptuno",
      urlName: "neptuno",
    },
    {
      name: "Plutón",
      urlName: "pluton",
    },
    {
      name: "Eris",
      urlName: "eris",
    },
    {
      name: "Makemake",
      urlName: "makemake",
    },
    {
      name: "Haumea",
      urlName: "haumea",
    },
    {
      name: "Orcus",
      urlName: "orcus",
    },
    {
      name: "Quaoar",
      urlName: "quaoar",
    },
    {
      name: "Gonggong",
      urlName: "gonggong",
    },
  ];

  const filterPerPlanet = (parent, parentUrl) => {
    const filteredArray = satelites.filter((satelite) => {
      return satelite.parent == parent;
    });
    return filteredArray.map(({ _id, name }) => (
      <ul
        key={_id}
        className="p-2 mx-4 my-4 mt-6 rounded-lg hover:bg-lavander/25 sm:mx-0 sm:my-2 sm:px-2 bg-bluebell/25"
      >
        <li>
          <Link href={`/sistema/satelites/${parentUrl}/${_id}`}>
            <a>{name} </a>
          </Link>
        </li>
      </ul>
    ));
  };

  return (
    <div>
      <HeadLayout section="Vista General" />

      <Navbar />

      <div className="flex flex-col w-full h-auto py-8 sm:px-4 bg-xiketic">
        <div className="sm:h-60  flex-col flex text-center justify-center sm:rounded-3xl h-70% w-full bg-[url('https://res.cloudinary.com/duuwcvkzg/image/upload/v1642957472/Dione/sky_ochfxd.jpg')] ">
          <h1 className="text-5xl sm:text-2xl text-lavander font-Dosis">
            Vista General
          </h1>
        </div>

        <div className="py-8">
          <ul className="flex flex-col gap-8 px-6 py-8 mx-14 sm:mx-0 md:mx-12 sm:gap-6 sm:px-4 sm:py-6 text-lavander bg-bluebell/25 rounded-2xl">
            {estrellas.map(({ _id, name }) => (
              <li key={_id} className="px-2 rounded-lg bg-bluebell/25">
                <Link href={`/sistema/estrellas/${_id}`}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}

            <li className="px-2 py-3 rounded-lg bg-bluebell/25">
              <Link href="/sistema/planetas">
                <a>Planetas</a>
              </Link>
              {planetas.map(({ _id, name }) => (
                <ul
                  key={_id}
                  className="p-2 mx-6 my-6 rounded-lg hover:bg-lavander/25 sm:mx-0 sm:my-2 bg-bluebell/25"
                >
                  <li>
                    <Link href={`/sistema/planetas/${_id}`}>
                      <a>{name}</a>
                    </Link>
                  </li>
                </ul>
              ))}
            </li>

            <li className="px-2 py-3 rounded-lg bg-bluebell/25">
              <Link href="/sistema/planetas-enanos">
                <a>Planetas Enanos</a>
              </Link>
              {planetasEnanos.map(({ _id, name }) => (
                <ul
                  key={_id}
                  className="p-2 mx-6 my-6 rounded-lg hover:bg-lavander/25 sm:mx-0 sm:my-2 bg-bluebell/25"
                >
                  <li>
                    <Link href={`/sistema/planetas-enanos/${_id}`}>
                      <a>{name}</a>
                    </Link>
                  </li>
                </ul>
              ))}
            </li>

            <li className="px-2 py-3 rounded-lg bg-bluebell/25">
              <Link href="/sistema/satelites">
                <a>Satélites</a>
              </Link>
              {planetsWithSat.map(({ name, urlName }) => (
                <ul
                  key={name}
                  className="p-2 mx-6 my-6 rounded-lg hover:bg-lavander/25 sm:mx-0 sm:my-2 bg-bluebell/25"
                >
                  <li>
                    <Link href={`/sistema/satelites/${urlName}`}>
                      <a>{name}</a>
                    </Link>
                    {filterPerPlanet(name, urlName)}
                  </li>
                </ul>
              ))}
            </li>

            <li className="px-2 py-3 rounded-lg bg-bluebell/25">
              <Link href="">
                <a>Asteroides</a>
              </Link>
              {asteroides.map(({ _id, name }) => (
                <ul
                  key={_id}
                  className="p-2 mx-6 my-6 rounded-lg hover:bg-lavander/25 sm:mx-0 sm:my-2 bg-bluebell/25"
                >
                  <li>
                    <Link href={`/sistema/asteroides/${_id}`}>
                      <a>{name}</a>
                    </Link>
                  </li>
                </ul>
              ))}
            </li>
            <li className="px-2 py-3 rounded-lg bg-bluebell/25">
              <Link href="/sistema/cometas">
                <a>Cometas</a>
              </Link>
              {cometas.map(({ _id, name }) => (
                <ul
                  key={_id}
                  className="p-2 mx-6 my-6 rounded-lg hover:bg-lavander/25 sm:mx-0 sm:my-2 bg-bluebell/25"
                >
                  <li>
                    <Link href={`/sistema/cometas/${_id}`}>
                      <a>{name}</a>
                    </Link>
                  </li>
                </ul>
              ))}
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps({}) {
  try {
    await connectDb();

    // PLANETAS
    const resPlaneta = await Planeta.find({});
    const itemsPlaneta = resPlaneta.map((doc) => {
      const item = doc.toObject();
      item._id = `${item._id}`;
      return item;
    });

    // PLANETAS ENANOS
    const resPlanetaEnano = await PlanetaEnano.find({});
    const itemsPlanetaEnano = resPlanetaEnano.map((doc) => {
      const item = doc.toObject();
      item._id = `${item._id}`;
      return item;
    });

    // SATELITES
    const resSatelite = await Satelite.find({});
    const itemsSatelite = resSatelite.map((doc) => {
      const item = doc.toObject();
      item._id = `${item._id}`;
      return item;
    });

    // ASTEROIDES
    const resAsteroide = await Asteroide.find({});
    const itemsAsteroide = resAsteroide.map((doc) => {
      const item = doc.toObject();
      item._id = `${item._id}`;
      return item;
    });

    // COMETAS
    const resCometa = await Cometa.find({});
    const itemsCometa = resCometa.map((doc) => {
      const item = doc.toObject();
      item._id = `${item._id}`;
      return item;
    });

    // ESTRELLAS
    const resEstrella = await Estrella.find({});
    const itemsEstrella = resEstrella.map((doc) => {
      const item = doc.toObject();
      item._id = `${item._id}`;
      return item;
    });

    return {
      props: {
        success: true,
        planetas: itemsPlaneta,
        planetasEnanos: itemsPlanetaEnano,
        satelites: itemsSatelite,
        asteroides: itemsAsteroide,
        cometas: itemsCometa,
        estrellas: itemsEstrella,
      },
      revalidate: 1,
    };
  } catch (error) {
    return {
      props: {
        success: false,
        error: "Error de servidor",
      },
    };
  }
}

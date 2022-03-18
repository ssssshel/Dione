import Planeta from "../../../../models/Planeta";
import PlanetaEnano from "../../../../models/PlanetaEnano";
import Asteroide from "../../../../models/Asteroide";
import Cometa from "../../../../models/Cometa";
import Estrella from "../../../../models/Estrella";
import connectDb from "../../../../lib/connectDb";
import mongoose from "mongoose";
import { useRouter } from "next/router";
import Link from "next/link";
import { getSession } from "next-auth/react";

import Footer from "../../../../components/Footer";
import HeadLayout from "../../../../components/Head";
import Navbar from "../../../../components/Navbar";

export default function Item({ success, error, item, category, auth }) {
  console.log(`success: ${success}`);
  console.log(`error: ${error}`);
  console.log(`category: ${category}`);
  console.log(`auth: ${auth}`);

  const router = useRouter();

  // PETICIÓN A LA API PARA ELIMINAR UN DOCUMENTO
  const deleteData = async (id) => {
    try {
      await fetch(`/api/data/${category}/${id}`, {
        method: "DELETE",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (!success) {
    return (
      <div>
        <HeadLayout section={"error"} />
        <h2>{error}</h2>
        <p onClick={() => router.push(`/sistema/${category}`)}>Volver</p>
      </div>
    );
  }

  return (
    <div>
      <HeadLayout section={item.name} />

      <Navbar />

      {category == "planetas" || category == "planetas-enanos" ? (
        <div>
          <div className="flex w-full h-auto py-20 sm:px-5 md:px-5 px-14 sm:flex-col gap-14 md:flex-col sm:gap-16 md:gap-16 lg:py-24 xl:py-24 2xl:py-20 bg-gradient-to-b from-purple to-rhythm">
            <div
              className={`flex flex-col justify-end md:h-80% h-80%   sm:h-80% sm:rounded-2xl md:rounded-2xl rounded-none shadow-lg shadow-xiketic bg-cover bg-center bg-no-repeat w-full bg-[url("https://${item.urlImg}")]`}
            >
              <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out lg:hidden xl:hidden 2xl:hidden xl:rounded-none xl:h-16 2xl:h-20 2xl:rounded-none hover:bg-rhythm/40 rounded-b-2xl bg-rhythm/30 backdrop-blur-md text-lavander">
                {item.name} - {item.category}
              </div>
            </div>
            <div className="sm:w-full md:w-full w-4/6 h-fit lg:h-80% xl:h-80% 2xl:h-80% text-lavander sm:p-6 md:p-6 p-14 sm:rounded-2xl md:rounded-2xl rounded-none flex flex-col bg-lavander/25 gap-4 backdrop-blur-md ">
              <h1 className="text-6xl sm:hidden md:hidden font-Dosis ">
                {item.name}
              </h1>
              <h2 className="text-3xl font-Dosis sm:text-2xl md:text-2xl sm:mb-4 md:mb-4 sm:text-center md:text-center">
                Información General
              </h2>
              <ul className="flex flex-col sm:gap-2 md:gap-2 sm:items-center md:items-center ">
                <li>Diametro: {item.diameter} </li>
                <li>Masa: {item.mass} </li>
                <li>Volumen: {item.volume} </li>
                <li>Densidad: {item.density} </li>
                <li>Gravedad: {item.gravity} </li>
                <li>Periodo Rotacional: {item.rotPeriod} </li>
                <li>Periodo Orbital: {item.orbPeriod} </li>
                <li>Inclinación: {item.inclination} </li>
                <li>Presión Atmosférica: {item.atmPressure} </li>
                <li>Temperatura: {item.temperature} </li>
                <li>Perihelio: {item.periastron} </li>
                <li>Afelio: {item.aphelion} </li>
                {auth ? (
                  <div className="flex flex-row gap-4 mt-4">
                    <Link href={`/sistema/${category}/${item._id}/edit`}>
                      <a className="px-4 py-2 bg-purple w-min hover:bg-rhythm">
                        Editar
                      </a>
                    </Link>
                    <button
                      onClick={() => deleteData(item._id)}
                      className="px-4 py-2 bg-purple w-min hover:bg-rhythm"
                    >
                      Eliminar
                    </button>
                  </div>
                ) : (
                  <p className="hidden"></p>
                )}
              </ul>
            </div>
          </div>
          <div
            className={`w-full h-screen bg-cover bg-center bg-no-repeat bg-[url("https://${item.urlImg2}")]`}
          ></div>
        </div>
      ) : category == "asteroides" || category == "cometas" ? (
        <div>
          <div className="flex w-full h-auto py-20 sm:px-5 md:px-5 px-14 sm:flex-col gap-14 md:flex-col sm:gap-16 md:gap-16 lg:py-24 xl:py-24 2xl:py-20 bg-gradient-to-b from-purple to-rhythm">
            <div
              className={`flex flex-col justify-end md:h-80% h-80%   sm:h-80% sm:rounded-2xl md:rounded-2xl rounded-none shadow-lg shadow-xiketic bg-cover bg-center bg-no-repeat w-full bg-[url("https://${item.urlImg}")]`}
            >
              <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out lg:hidden xl:hidden 2xl:hidden xl:rounded-none xl:h-16 2xl:h-20 2xl:rounded-none hover:bg-rhythm/40 rounded-b-2xl bg-rhythm/30 backdrop-blur-md text-lavander">
                {item.name} - {item.category}
              </div>
            </div>
            <div className="sm:w-full md:w-full w-4/6 h-fit lg:h-80% xl:h-80% 2xl:h-80% text-lavander sm:p-6 md:p-6 p-14 sm:rounded-2xl md:rounded-2xl rounded-none flex flex-col bg-lavander/25 gap-4 backdrop-blur-md ">
              <h1 className="text-6xl sm:hidden md:hidden font-Dosis ">
                {item.name}
              </h1>
              <h2 className="text-3xl font-Dosis sm:text-2xl md:text-2xl sm:mb-4 md:mb-4 sm:text-center md:text-center">
                Información General
              </h2>
              <ul className="flex flex-col sm:gap-2 md:gap-2 sm:items-center md:items-center ">
                <li>Diametro: {item.diameter} </li>
                <li>Masa: {item.mass} </li>
                <li>Volumen: {item.volume} </li>
                <li>Densidad: {item.density} </li>
                <li>Gravedad: {item.gravity} </li>
                <li>Periodo Rotacional: {item.rotPeriod} </li>
                <li>Periodo Orbital: {item.orbPeriod} </li>
                <li>Temperatura: {item.temperature} </li>
                <li>Perihelio: {item.periastron} </li>
                <li>Afelio: {item.aphelion} </li>
                {auth ? (
                  <div className="flex flex-row gap-4 mt-4">
                    <Link href={`/sistema/${category}/${item._id}/edit`}>
                      <a className="px-4 py-2 bg-purple w-min hover:bg-rhythm">
                        Editar
                      </a>
                    </Link>
                    <button
                      onClick={() => deleteData(item._id)}
                      className="px-4 py-2 bg-purple w-min hover:bg-rhythm"
                    >
                      Eliminar
                    </button>
                  </div>
                ) : (
                  <p className="hidden"></p>
                )}
              </ul>
            </div>
          </div>
          <div
            className={`w-full h-screen bg-cover bg-center bg-no-repeat bg-[url("https://${item.urlImg2}")]`}
          ></div>
        </div>
      ) : category == "estrellas" ? (
        <div>
          <div className="flex w-full h-auto py-20 sm:px-5 md:px-5 px-14 sm:flex-col gap-14 md:flex-col sm:gap-16 md:gap-16 lg:py-24 xl:py-24 2xl:py-20 bg-gradient-to-b from-purple to-rhythm">
            <div
              className={`flex flex-col justify-end md:h-80% h-80%   sm:h-80% sm:rounded-2xl md:rounded-2xl rounded-none shadow-lg shadow-xiketic bg-cover bg-center bg-no-repeat w-full bg-[url("https://${item.urlImg}")]`}
            >
              <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out lg:hidden xl:hidden 2xl:hidden xl:rounded-none xl:h-16 2xl:h-20 2xl:rounded-none hover:bg-rhythm/40 rounded-b-2xl bg-rhythm/30 backdrop-blur-md text-lavander">
                {item.name} - {item.category}
              </div>
            </div>
            <div className="sm:w-full md:w-full w-4/6 h-fit lg:h-80% xl:h-80% 2xl:h-80% text-lavander sm:p-6 md:p-6 p-14 sm:rounded-2xl md:rounded-2xl rounded-none flex flex-col bg-lavander/25 gap-4 backdrop-blur-md ">
              <h1 className="text-6xl sm:hidden md:hidden font-Dosis ">
                {item.name}
              </h1>
              <h2 className="text-3xl font-Dosis sm:text-2xl md:text-2xl sm:mb-4 md:mb-4 sm:text-center md:text-center">
                Información General
              </h2>
              <ul className="flex flex-col sm:gap-2 md:gap-2 sm:items-center md:items-center ">
                <li>Diametro: {item.diameter} </li>
                <li>Masa: {item.mass} </li>
                <li>Volumen: {item.volume} </li>
                <li>Densidad: {item.density} </li>
                <li>Gravedad: {item.gravity} </li>
                <li>Temperatura: {item.temperature} </li>
              </ul>
              {auth ? (
                <div className="flex flex-row gap-4 mt-4">
                  <Link href={`/sistema/${category}/${item._id}/edit`}>
                    <a className="px-4 py-2 bg-purple w-min hover:bg-rhythm">
                      Editar
                    </a>
                  </Link>
                  <button
                    onClick={() => deleteData(item._id)}
                    className="px-4 py-2 bg-purple w-min hover:bg-rhythm"
                  >
                    Eliminar
                  </button>
                </div>
              ) : (
                <p className="hidden"></p>
              )}
            </div>
          </div>
          <div
            className={`w-full h-screen bg-cover bg-center bg-no-repeat bg-[url("https://${item.urlImg2}")]`}
          ></div>
        </div>
      ) : (
        <div className="w-full h-screen"> Elemento inexistente</div>
      )}

      <Footer />
    </div>
  );
}

export async function getServerSideProps({ params, req }) {
  // const capitalizeName = (name) => {
  //   const Name = name.charAt(0).toUpperCase() + name.slice(1);
  //   return Name;
  // };

  const session = await getSession({ req });
  try {
    await connectDb();
    const cat = params.category;
    const id = params.id;
    console.log(id);
    // SE VERIFICA LA VALIDEZ DEL ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return {
        props: {
          success: false,
          error: "ID no válido: Elemento inexistente",
          category: cat,
        },
      };
    }
    // SE BUSCA EL DOCUMENTO EN LA COLECCIÓN DEFINIDA COMO PARÁMETRO
    const paramsMap = async (category, id) => {
      const res = await category.findById(id).lean();
      if (!res) {
        return {
          props: { success: false, error: "ID no existente: Item inexistente" },
        };
      }
      res._id = `${res._id}`;
      // SE VERIFICA SI EXISTE UNA SESIÓN ACTIVA PARA HABILITAR LAS FUNCIONALIDADES DE ADMINISTRADOR
      if (!session) {
        return {
          props: {
            success: true,
            item: res,
            category: cat,
            auth: false,
          },
        };
      }
      return {
        props: {
          success: true,
          item: res,
          category: cat,
          auth: true,
        },
      };
    };

    switch (cat) {
      case "planetas":
        return paramsMap(Planeta, id);

      case "planetas-enanos":
        return paramsMap(PlanetaEnano, id);

      case "asteroides":
        return paramsMap(Asteroide, id);

      case "cometas":
        return paramsMap(Cometa, id);

      case "estrellas":
        return paramsMap(Estrella, id);

      default:
        throw new Error(`Parametro invalido o no especificado: ${cat}`);
    }
  } catch (error) {
    return {
      props: {
        success: false,
        error: "Categoría inválida",
      },
    };
  }
}

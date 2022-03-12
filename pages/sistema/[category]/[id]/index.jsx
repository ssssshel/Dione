import Planeta from "../../../../models/Planeta";
import PlanetaEnano from "../../../../models/PlanetaEnano";
import Asteroide from "../../../../models/Asteroide";
import Cometa from "../../../../models/Cometa";
import Estrella from "../../../../models/Estrella";
import connectDb from "../../../../lib/connectDb";
import mongoose from "mongoose";
import { useRouter } from "next/router";
import Link from "next/link";

import Footer from "../../../../components/Footer";
import HeadLayout from "../../../../components/Head";
import Navbar from "../../../../components/Navbar";

export default function Item({ success, error, item, category }) {
  console.log(`success: ${success}`);
  console.log(`error: ${error}`);
  console.log(`category: ${category}`);

  const router = useRouter();

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
          <div className="w-full h-auto sm:px-5 md:px-5 px-14 flex sm:flex-col gap-14 md:flex-col sm:gap-16 md:gap-16 py-20 lg:py-24 xl:py-24 2xl:py-20 bg-gradient-to-b from-purple to-rhythm">
            <div
              className={`flex flex-col justify-end md:h-80% h-80%   sm:h-80% sm:rounded-2xl md:rounded-2xl rounded-none shadow-lg shadow-xiketic bg-cover bg-center bg-no-repeat w-full bg-[url("https://${item.urlImg}")]`}
            >
              <div className="flex flex-col lg:hidden xl:hidden 2xl:hidden justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out xl:rounded-none xl:h-16 2xl:h-20 2xl:rounded-none hover:bg-rhythm/40 rounded-b-2xl bg-rhythm/30 backdrop-blur-md text-lavander">
                {item.name} - {item.category}
              </div>
            </div>
            <div className="sm:w-full md:w-full w-4/6 h-fit lg:h-80% xl:h-80% 2xl:h-80% text-lavander sm:p-6 md:p-6 p-14 sm:rounded-2xl md:rounded-2xl rounded-none flex flex-col bg-lavander/25 gap-4 backdrop-blur-md ">
              <h1 className="sm:hidden md:hidden text-6xl font-Dosis ">
                {item.name}
              </h1>
              <h2 className="font-Dosis sm:text-2xl md:text-2xl sm:mb-4 md:mb-4 text-3xl sm:text-center md:text-center">
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
              </ul>
            </div>
          </div>
          <div
            className={`w-full h-screen bg-cover bg-center bg-no-repeat bg-[url("https://${item.urlImg2}")]`}
          ></div>
        </div>
      ) : category == "asteroides" || category == "cometas" ? (
        <div>
          <div className="w-full h-auto sm:px-5 md:px-5 px-14 flex sm:flex-col gap-14 md:flex-col sm:gap-16 md:gap-16 py-20 lg:py-24 xl:py-24 2xl:py-20 bg-gradient-to-b from-purple to-rhythm">
            <div
              className={`flex flex-col justify-end md:h-80% h-80%   sm:h-80% sm:rounded-2xl md:rounded-2xl rounded-none shadow-lg shadow-xiketic bg-cover bg-center bg-no-repeat w-full bg-[url("https://${item.urlImg}")]`}
            >
              <div className="flex flex-col lg:hidden xl:hidden 2xl:hidden justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out xl:rounded-none xl:h-16 2xl:h-20 2xl:rounded-none hover:bg-rhythm/40 rounded-b-2xl bg-rhythm/30 backdrop-blur-md text-lavander">
                {item.name} - {item.category}
              </div>
            </div>
            <div className="sm:w-full md:w-full w-4/6 h-fit lg:h-80% xl:h-80% 2xl:h-80% text-lavander sm:p-6 md:p-6 p-14 sm:rounded-2xl md:rounded-2xl rounded-none flex flex-col bg-lavander/25 gap-4 backdrop-blur-md ">
              <h1 className="sm:hidden md:hidden text-6xl font-Dosis ">
                {item.name}
              </h1>
              <h2 className="font-Dosis sm:text-2xl md:text-2xl sm:mb-4 md:mb-4 text-3xl sm:text-center md:text-center">
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
              </ul>
            </div>
          </div>
          <div
            className={`w-full h-screen bg-cover bg-center bg-no-repeat bg-[url("https://${item.urlImg2}")]`}
          ></div>
        </div>
      ) : category == "estrellas" ? (
        <div>
          <div className="w-full h-auto sm:px-5 md:px-5 px-14 flex sm:flex-col gap-14 md:flex-col sm:gap-16 md:gap-16 py-20 lg:py-24 xl:py-24 2xl:py-20 bg-gradient-to-b from-purple to-rhythm">
            <div
              className={`flex flex-col justify-end md:h-80% h-80%   sm:h-80% sm:rounded-2xl md:rounded-2xl rounded-none shadow-lg shadow-xiketic bg-cover bg-center bg-no-repeat w-full bg-[url("https://${item.urlImg}")]`}
            >
              <div className="flex flex-col lg:hidden xl:hidden 2xl:hidden justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out xl:rounded-none xl:h-16 2xl:h-20 2xl:rounded-none hover:bg-rhythm/40 rounded-b-2xl bg-rhythm/30 backdrop-blur-md text-lavander">
                {item.name} - {item.category}
              </div>
            </div>
            <div className="sm:w-full md:w-full w-4/6 h-fit lg:h-80% xl:h-80% 2xl:h-80% text-lavander sm:p-6 md:p-6 p-14 sm:rounded-2xl md:rounded-2xl rounded-none flex flex-col bg-lavander/25 gap-4 backdrop-blur-md ">
              <h1 className="sm:hidden md:hidden text-6xl font-Dosis ">
                {item.name}
              </h1>
              <h2 className="font-Dosis sm:text-2xl md:text-2xl sm:mb-4 md:mb-4 text-3xl sm:text-center md:text-center">
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
            </div>
          </div>
          <div
            className={`w-full h-screen bg-cover bg-center bg-no-repeat bg-[url("https://${item.urlImg2}")]`}
          ></div>
        </div>
      ) : (
        <div className="h-screen w-full"> Elemento inexistente</div>
      )}

      <Footer />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  // const capitalizeName = (name) => {
  //   const Name = name.charAt(0).toUpperCase() + name.slice(1);
  //   return Name;
  // };
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
    const paramsMap = async (category, n) => {
      const res = await category.findById(n).lean();
      res._id = `${res._id}`;
      return {
        props: {
          success: true,
          item: res,
          category: cat,
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

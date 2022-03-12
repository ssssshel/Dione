import Satelite from "../../../../../models/Satelite";
import connectDb from "../../../../../lib/connectDb";
import mongoose from "mongoose";

import HeadLayout from "../../../../../components/Head";
import Navbar from "../../../../../components/Navbar";
import Footer from "../../../../../components/Footer";

export default function Item({ success, error, item, planet }) {
  console.log(`success: ${success}`);
  console.log(`error: ${error}`);
  console.log(`planet: ${planet}`);

  return (
    <div>
      <HeadLayout section={item.name} />
      <Navbar />

      <div>
        <div className="w-full h-auto sm:px-5 md:px-5 px-14 flex sm:flex-col gap-14 md:flex-col sm:gap-16 md:gap-16 py-20 lg:py-24 xl:py-24 2xl:py-20 bg-gradient-to-b from-purple to-rhythm">
          <div
            className={`flex flex-col justify-end md:h-80% h-80%   sm:h-80% sm:rounded-2xl md:rounded-2xl rounded-none shadow-lg shadow-xiketic bg-cover bg-center bg-no-repeat w-full bg-[url("https://${item.urlImg}")]`}
          >
            <div className="flex flex-col lg:hidden xl:hidden 2xl:hidden justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out xl:rounded-none xl:h-16 2xl:h-20 2xl:rounded-none hover:bg-rhythm/40 rounded-b-2xl bg-rhythm/30 backdrop-blur-md text-lavander">
              {item.name} - Satélite de {item.parent}
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
              <li>Periodo Orbital: {item.orbPeriod} </li>
              <li>Radio Orbital: {item.orbRadius} </li>
              <li>Inclinación: {item.inclination} </li>
              <li>Presión Atmosférica: {item.atmPressure} </li>
              <li>Temperatura: {item.temperature} </li>
            </ul>
          </div>
        </div>
        <div
          className={`w-full h-screen bg-cover bg-center bg-no-repeat bg-[url("https://${item.urlImg2}")]`}
        ></div>
      </div>

      <Footer />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    await connectDb();
    const planet = params.planeta;
    const id = params.id;

    // SE VERFICA LA VALIDÉZ DEL ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return {
        props: {
          success: false,
          error: "ID no válido: Elemento inexistente",
          planet,
        },
      };
    }
    // SE BUSCA EL DOCUMENTO EN LA COLECCIÓN DEFINIDA COMO PARÁMETRO
    const res = await Satelite.findById(id).lean();
    res._id = `${res._id}`;
    return {
      props: {
        success: true,
        item: res,
        planet,
      },
    };
  } catch (error) {
    return {
      props: {
        success: false,
        error: "Planeta inválido",
      },
    };
  }
}

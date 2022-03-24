import Satelite from "../../../../../models/Satelite";
import { connectDb } from "../../../../../lib/connectDb";

import mongoose from "mongoose";
import Link from "next/link";
import { useRouter } from "next/router";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { getSession, useSession } from "next-auth/react";

import HeadLayout from "../../../../../components/Head";
import Navbar from "../../../../../components/Navbar";
import Footer from "../../../../../components/Footer";

export default function Item({ success, error, item, planet }) {
  const { data: session, status } = useSession();

  const router = useRouter();

  // CLOUDINARY

  const cld = new Cloudinary({
    cloud: {
      cloudName: "duuwcvkzg",
    },
  });

  // PETICIÓN A LA API PARA ELIMINAR UN DOCUMENTO
  const deleteData = async (id) => {
    try {
      await fetch(`/api/data/satelites/${id}`, {
        method: "DELETE",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (error) {
    return (
      <div className="h-full w-full flex justify-center">
        <HeadLayout section={"error"} />
        <div className="h-fit top-2/4 border-xiketic border-2 p-6 flex flex-col items-center absolute">
          <h2 className=" text-2xl font-Urbanist font-semibold ">
            Error: {error}
          </h2>
          <p
            className="text-lg font-semibold bg-emerald-600 cursor-pointer"
            onClick={() => router.push(`/sistema/satelites/${planet}`)}
          >
            Volver
          </p>
        </div>
      </div>
    );
  }

  if (!success) {
    return (
      <div className="h-full w-full flex justify-center">
        <p className="h-fit top-2/4 absolute text-3xl font-Urbanist font-semibold ">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div>
      <HeadLayout section={item.name} />
      <Navbar />

      <div>
        <div className="flex w-full h-auto py-20 sm:px-5 md:px-5 px-14 sm:flex-col gap-14 md:flex-col sm:gap-16 md:gap-16 lg:py-24 xl:py-24 2xl:py-20 bg-gradient-to-b from-purple to-rhythm">
          <div className="flex flex-col shadow-xiketic rounded-2xl shadow-lg md:h-80% h-80% sm:h-80% w-full">
            <div className="xl:hidden 2xl:hidden w-full h-full">
              <AdvancedImage
                cldImg={cld.image(item.urlImg)}
                className=" object-cover rounded-2xl h-full w-full"
              />
              <div className="flex flex-col relative bottom-12 xl:bottom-16 2xl:bottom-20 justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out lg:hidden xl:hidden 2xl:hidden xl:h-16 2xl:h-20 hover:bg-lavander/30 rounded-b-2xl bg-lavander/10 backdrop-blur-md text-lavander">
                {item.name} - {item.category}
              </div>
            </div>
          </div>
          <div className="sm:w-full md:w-full w-4/6 h-fit lg:h-80% xl:h-80% 2xl:h-80% text-lavander sm:p-6 md:p-6 p-14 rounded-2xl flex flex-col bg-purple/30 gap-4 backdrop-blur-md ">
            <h1 className="text-6xl sm:hidden md:hidden font-Dosis ">
              {item.name}
            </h1>
            <h2 className="text-3xl font-Dosis sm:text-2xl md:text-2xl sm:mb-4 md:mb-4 sm:text-center md:text-center">
              Información General
            </h2>
            <ul className="flex flex-col sm:gap-2 md:gap-2 sm:items-center md:items-center ">
              <li className="text-lg">Satélite de {item.parent} </li>
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
              {status == "authenticated" ? (
                <li className="flex flex-row gap-4 mt-4">
                  <Link href={`/sistema/satelites/${planet}/${item._id}/edit`}>
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
                </li>
              ) : (
                <p className="hidden"></p>
              )}
            </ul>
          </div>
        </div>
        <div className="w-full h-screen">
          <AdvancedImage
            className="w-full h-full object-cover"
            cldImg={cld.image(item.urlImg2)}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps({ params, req }) {
  // const session = await getSession({ req });

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
    if (!res) {
      return {
        props: {
          success: false,
          error: "ID no existente: Item inexistente",
        },
      };
    }
    res._id = `${res._id}`;

    // SE VERIFICA SI EXISTE UNA SESIÓN ACTIVA PARA HABILITAR LAS FUNCIONALIDADES DE ADMINISTRADOR
    // if (!session) {
    //   return {
    //     props: {
    //       success: true,
    //       item: res,
    //       planet,
    //       auth: false,
    //     },
    //   };
    // }
    return {
      props: {
        success: true,
        item: res,
        planet,
        // auth: true,
      },
      revalidate: 1,
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

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

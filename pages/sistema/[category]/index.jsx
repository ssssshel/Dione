// FALTA ADAPTAR LA IMAGEN PRINCIPAL Y EL TITULO DE LA CATEGORIA DE MANERA DINAMICA

import Link from "next/link";

import Planeta from "../../../models/Planeta";
import PlanetaEnano from "../../../models/PlanetaEnano";
import Asteroide from "../../../models/Asteroide";
import Cometa from "../../../models/Cometa";
import Estrella from "../../../models/Estrella";
import { connectDb } from "../../../lib/connectDb";
import { useRouter } from "next/router";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

import Footer from "../../../components/Footer";
import HeadLayout from "../../../components/Head";
import Navbar from "../../../components/Navbar";

export default function Category({ success, error, items, par }) {
  const router = useRouter();

  // OBTIENE LA RUTA DINAMICA A PARTIR DE LA URL Y SE CONVIERTE A STRNG PROCEDENTE DE UN OBJETO
  const { category } = router.query;

  // CATEGORIA DINAMICA
  let cat = null;

  // CLOUDINARY
  const cld = new Cloudinary({
    cloud: {
      cloudName: "duuwcvkzg",
    },
  });

  // BACKGROUND CLD
  let img = null;

  const changePath = (path) => {
    return (img = cld.image(path));
  };

  const changeBkgTit = () => {
    switch (category) {
      case "planetas":
        cat = "Planetas";
        return changePath("Dione/Planetas/assets/tierra_b77mr8.jpg");

      case "planetas-enanos":
        cat = "Planetas Enanos";
        return changePath("Dione/assets/03_otmomu.jpg");

      case "asteroides":
        cat = "Asteroides";
        return changePath("Dione/assets/05_rmkqzh.jpg");

      case "cometas":
        cat = "Cometas";
        return changePath("Dione/assets/06_q4idsy.jpg");

      case "estrellas":
        cat = "Estrellas";
        return changePath("Dione/Estrellas/sunArt2_fiiufs.jpg");

      default:
        cat = null;
        break;
    }
  };
  changeBkgTit();

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
            onClick={() => router.push(`/sistema`)}
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
      <HeadLayout section={cat} />

      <Navbar />

      {/* PORTADA WEB */}
      <div className="sm:hidden md:hidden flex items-center justify-center h-screen w-full">
        <AdvancedImage className=" object-cover w-full h-full" cldImg={img} />
        <div className="px-16 py-6 absolute bg-lavander/30 backdrop-blur-md w-fit">
          <h1 className="text-6xl text-purple font-Dosis">{cat}</h1>
        </div>
      </div>

      <div className="w-full h-auto min-h-screen pb-16 sm:px-5 md:px-5 px-14 xl:py-20 2xl:py-20 bg-gradient-to-b from-purple to-rhythm">
        {/* PORTADA MOBILE */}
        <div className="lg:hidden flex flex-col xl:hidden 2xl:hidden  h-90% rounded-2xl shadow-lg shadow-xiketic w-full">
          <div className=" w-full h-full">
            <AdvancedImage
              className=" object-cover rounded-b-2xl w-full h-full"
              cldImg={img}
            />
            <div className="flex bottom-12 relative flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out hover:bg-rhythm/40 rounded-b-2xl bg-rhythm/30 backdrop-blur-md text-lavander">
              {cat}
            </div>
          </div>
        </div>

        {/* ITEMS */}
        <div className="grid grid-flow-row grid-cols-3 gap-8 pt-20 sm:grid-cols-1 md:grid-cols-1 sm:gap-10 md:gap-10">
          {items.map(({ _id, name, category, urlImg }) => (
            <Link key={_id} href={`${par}/${_id}`}>
              <a>
                <div
                  className={`flex xl:rounded-none shadow-lg  shadow-xiketic 2xl:rounded-none flex-col  w-full sm:h-30% md:h-40% h-70% rounded-2xl `}
                >
                  <div className="w-full h-full">
                    <AdvancedImage
                      className="object-cover rounded-2xl xl:rounded-none 2xl:rounded-none h-full w-full"
                      cldImg={cld.image(`${urlImg}`)}
                    />
                    <div className="flex flex-col relative bottom-12 xl:bottom-16 2xl:bottom-20 justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out xl:rounded-none xl:h-16 2xl:h-20 2xl:rounded-none hover:bg-rhythm/40 rounded-b-2xl bg-rhythm/30 backdrop-blur-md text-lavander">
                      {name} - {category}
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps({ params }) {
  try {
    await connectDb();

    // LA CONSTANTE CATEGORY RECOGE EL STRING QUE REPRESENTA LA CATEGORIA DINAMICA DENTRO DEL OBJETO PARAMS
    const cat = params.category;

    // resMap ES UNA FUNCIÓN CUYO PARAMETRO CATEGORY ES DINÁMICO Y VARÍA DE ACUERDO AL VALOR DE category: EL STRING DE LA URL
    const resMap = async (category) => {
      const res = await category.find({});
      const items = res.map((doc) => {
        const item = doc.toObject();
        item._id = `${item._id}`;
        return item;
      });
      return {
        props: {
          success: true,
          items,
          par: cat,
        },
        revalidate: 1,
      };
    };

    switch (cat) {
      case "planetas":
        return resMap(Planeta);

      case "planetas-enanos":
        return resMap(PlanetaEnano);

      case "asteroides":
        return resMap(Asteroide);

      case "cometas":
        return resMap(Cometa);

      case "estrellas":
        return resMap(Estrella);

      default:
        throw new Error(`Parametro invalido o no especificado: ${cat}`);
    }
  } catch (error) {
    return {
      props: {
        success: false,
        error: "Parametro inválido",
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

// FALTA ADAPTAR LA IMAGEN PRINCIPAL Y EL TITULO DE LA CATEGORIA DE MANERA DINAMICA

import Link from "next/link";

import Planeta from "../../../models/Planeta";
import PlanetaEnano from "../../../models/PlanetaEnano";
import Asteroide from "../../../models/Asteroide";
import Cometa from "../../../models/Cometa";
import Estrella from "../../../models/Estrella";
import { connectDb } from "../../../lib/connectDb";
import { useRouter } from "next/router";

import Footer from "../../../components/Footer";
import HeadLayout from "../../../components/Head";
import Navbar from "../../../components/Navbar";

export default function Category({ success, error, items, par }) {
  const router = useRouter();

  // console.log(`success: ${success}`);
  // console.log(`error: ${error}`);
  // console.log(`items: ${items}`);

  // OBTIENE LA RUTA DINAMICA A PARTIR DE LA URL Y SE CONVIERTE A STRNG PROCEDENTE DE UN OBJETO
  const { category } = router.query;

  // CATEGORIA DINAMICA
  let cat = null;

  // BACKGROUND DINAMICO
  let bkg = null;

  switch (category) {
    case "planetas":
      cat = "Planetas";
      break;

    case "planetas-enanos":
      cat = "Planetas Enanos";
      break;

    case "asteroides":
      cat = "Asteroides";
      break;

    case "cometas":
      cat = "Cometas";
      break;

    case "estrellas":
      cat = "Estrellas";
      break;

    default:
      break;
  }

  {
    if (!success) {
      return (
        <div>
          <h2>{error}</h2>
          <Link href="/">
            <a>Volver</a>
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <HeadLayout section={cat} />

          <Navbar />
          <div className="sm:hidden flex flex-col justify-center items-center md:hidden h-screen w-full bg-cover bg-no-repeat bg-center bg-[url('https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814747/Dione/Satelites/Art/Sci-Europa-RTS1RFWK_ziqylc.jpg')] ">
            <div className="px-16 py-6 bg-lavander/30 backdrop-blur-md w-fit">
              <h1 className="text-6xl text-purple font-Dosis">{cat}</h1>
            </div>
          </div>

          <div className="w-full h-auto min-h-screen pb-16 sm:px-5 md:px-5 px-14 xl:py-20 2xl:py-20 bg-gradient-to-b from-purple to-rhythm">
            <div className="lg:hidden flex flex-col justify-end xl:hidden 2xl:hidden h-90% rounded-2xl shadow-lg shadow-xiketic bg-cover bg-center bg-no-repeat w-full bg-[url('https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814747/Dione/Satelites/Art/Sci-Europa-RTS1RFWK_ziqylc.jpg')]">
              <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out hover:bg-rhythm/40 rounded-b-2xl bg-rhythm/30 backdrop-blur-md text-lavander">
                {cat}
              </div>
            </div>

            <div className="grid grid-flow-row grid-cols-3 gap-8 pt-20 sm:grid-cols-1 md:grid-cols-1 sm:gap-10 md:gap-10">
              {items.map(({ _id, name, category, urlImg }) => (
                <div
                  key={_id}
                  className={`flex xl:rounded-none shadow-lg  shadow-xiketic 2xl:rounded-none flex-col justify-end w-full sm:h-30% md:h-40% h-70% bg-cover bg-no-repeat bg-center rounded-2xl bg-[url("https://${urlImg}")]`}
                >
                  <Link href={`${par}/${_id}`}>
                    <a>
                      <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out xl:rounded-none xl:h-16 2xl:h-20 2xl:rounded-none hover:bg-rhythm/40 rounded-b-2xl bg-rhythm/30 backdrop-blur-md text-lavander">
                        {name} - {category}
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <Footer />
        </div>
      );
    }
  }
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

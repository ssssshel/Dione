import Link from "next/link";
import { useRouter } from "next/router";

import Satelite from "../../../../models/Satelite";
import connectDb from "../../../../lib/connectDb";

import HeadLayout from "../../../../components/Head";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function Planet({ success, error, items }) {
  const router = useRouter();

  // console.log(`success: ${success}`);
  // console.log(`error: ${error}`);

  const { planeta } = router.query;

  let planet = null;
  let bgk = null;

  switch (planeta) {
    case "tierra":
      planet = "Tierra";
      break;
    case "marte":
      planet = "Marte";
      break;
    case "jupiter":
      planet = "Júpiter";
      break;
    case "saturno":
      planet = "Saturno";
      break;
    case "urano":
      planet = "Urano";
      break;
    case "neptuno":
      planet = "Neptuno";
      break;
    case "pluton":
      planet = "Plutón";
      break;
    case "eris":
      planet = "Eris";
      break;
    case "makemake":
      planet = "Makemake";
      break;
    case "haumea":
      planet = "Haumea";
      break;
    case "orcus":
      planet = "Orcus";
      break;
    case "quaoar":
      planet = "Quaoar";
      break;
    case "gonggong":
      planet = "Gonggong";
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
          <HeadLayout section={`Satélites de ${planet}`} />

          <Navbar />
          <div className="sm:hidden flex flex-col justify-center items-center md:hidden h-screen w-full bg-cover bg-no-repeat bg-center bg-[url('https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814747/Dione/Satelites/Art/Sci-Europa-RTS1RFWK_ziqylc.jpg')] ">
            <div className="px-16 py-6 bg-lavander/30 backdrop-blur-md w-fit">
              <h1 className="text-6xl text-purple font-Dosis">
                Satélites {">"} {planet}
              </h1>
            </div>
          </div>

          <div className="w-full h-auto min-h-screen pb-16 sm:px-5 md:px-5 px-14 xl:py-20 2xl:py-20 bg-gradient-to-b from-purple to-rhythm">
            <div className="lg:hidden flex flex-col justify-end xl:hidden 2xl:hidden h-90% rounded-2xl shadow-lg shadow-xiketic bg-cover bg-center bg-no-repeat w-full bg-[url('https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814747/Dione/Satelites/Art/Sci-Europa-RTS1RFWK_ziqylc.jpg')]">
              <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out hover:bg-rhythm/40 rounded-b-2xl bg-rhythm/30 backdrop-blur-md text-lavander">
                Satélites {">"} {planet}
              </div>
            </div>

            <div className="grid grid-flow-row grid-cols-3 gap-8 pt-20 sm:grid-cols-1 md:grid-cols-1 sm:gap-10 md:gap-10">
              {items.map(({ _id, name, parent, urlImg }) => (
                <div
                  key={_id}
                  className={`flex xl:rounded-none shadow-lg  shadow-xiketic 2xl:rounded-none flex-col justify-end w-full sm:h-30% md:h-40% h-70% bg-cover bg-no-repeat bg-center rounded-2xl bg-[url("https://${urlImg}")]`}
                >
                  <Link href={`${parent.toLowerCase()}/${_id}`}>
                    <a>
                      <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out xl:rounded-none xl:h-16 2xl:h-20 2xl:rounded-none hover:bg-rhythm/40 rounded-b-2xl bg-rhythm/30 backdrop-blur-md text-lavander">
                        {name} - {parent}
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

    const par = params.planeta;

    const resMap = async (planeta) => {
      const res = await Satelite.find({ parent: planeta });
      const items = res.map((doc) => {
        const item = doc.toObject();
        item._id = `${item._id}`;
        return item;
      });
      return { props: { success: true, items, planeta: par }, revalidate: 1 };
    };

    switch (par) {
      case "tierra":
        return resMap("Tierra");
      case "marte":
        return resMap("Marte");
      case "jupiter":
        return resMap("Júpiter");
      case "saturno":
        return resMap("Saturno");
      case "urano":
        return resMap("Urano");
      case "neptuno":
        return resMap("Neptuno");
      case "pluton":
        return resMap("Plutón");
      case "eris":
        return resMap("Eris");
      case "makemake":
        return resMap("Makemake");
      case "haumea":
        return resMap("Haumea");
      case "orcus":
        return resMap("Orcus");
      case "quaoar":
        return resMap("Quaoar");
      case "gonggong":
        return resMap("Gonggong");
      default:
        throw new Error(
          `Parámetro de busqueda inválido o no especificado: ${par}`
        );
    }
  } catch (error) {
    return {
      props: {
        success: false,
        error: "Parámetro inválido",
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

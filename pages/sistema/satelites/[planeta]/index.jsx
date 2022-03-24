import Link from "next/link";
import { useRouter } from "next/router";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

import Satelite from "../../../../models/Satelite";
import { connectDb } from "../../../../lib/connectDb";

import HeadLayout from "../../../../components/Head";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function Planet({ success, error, items }) {
  const router = useRouter();

  const { planeta } = router.query;

  // PLANET QUERY DINAMICO
  let planet = null;

  // CLOUDINARY
  const cld = new Cloudinary({
    cloud: {
      cloudName: "duuwcvkzg",
    },
  });

  // BACKGORUND CLD

  let bkg = null;

  const changePath = (path) => {
    return (bkg = cld.image(path));
  };

  const changeBkgTit = () => {
    switch (planeta) {
      case "tierra":
        planet = "Tierra";
        return changePath("Dione/Planetas/tierra_oxi98u.jpg");
      case "marte":
        planet = "Marte";
        return changePath("Dione/Planetas/mars-2051747_hv7m30.png");
      case "jupiter":
        planet = "Júpiter";
        return changePath("Dione/Planetas/jupiter_zkiwy8.png");
      case "saturno":
        planet = "Saturno";
        return changePath("Dione/Planetas/saturn_fcvyr4.jpg");
      case "urano":
        planet = "Urano";
        return changePath("Dione/Planetas/Uranus2_w8icdd.jpg");
      case "neptuno":
        planet = "Neptuno";
        return changePath("Dione/Planetas/neptuno_rzvlst.jpg");
      case "pluton":
        planet = "Plutón";
        return changePath("Dione/Planetas-Enanos/pluton.jpg");
      case "eris":
        planet = "Eris";
        return changePath("Dione/Planetas-Enanos/eris_pmbbfo.jpg");
      case "makemake":
        planet = "Makemake";
        return changePath("Dione/Planetas-Enanos/makemake_ladrqt.jpg");
      case "haumea":
        planet = "Haumea";
        return changePath("Dione/Planetas-Enanos/haumea2_zvpenh.jpg");
      case "orcus":
        planet = "Orcus";
        return changePath("Dione/Planetas-Enanos/orcus_fbnwpd.png");
      case "quaoar":
        planet = "Quaoar";
        return changePath("Dione/Planetas-Enanos/Quaoar_ppoieq.jpg");
      case "gonggong":
        planet = "Gonggong";
        return changePath("Dione/Planetas-Enanos/gonggong_btezcz.jpg");

      default:
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
            onClick={() => router.push(`/sistema/satelites`)}
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
      <HeadLayout section={`Satélites de ${planet}`} />

      <Navbar />
      {/* WEB BACKGROUND */}
      <div className="sm:hidden md:hidden flex items-center justify-center h-screen w-full">
        <AdvancedImage className=" object-cover w-full h-full" cldImg={bkg} />
        <div className="px-16 py-6 absolute rounded-3xl bg-lavander/30 backdrop-blur-md w-fit">
          <h1 className="text-6xl text-purple font-Dosis">
            Satélites {">"} {planet}
          </h1>
        </div>
      </div>

      <div className="w-full h-auto min-h-screen pb-16 sm:px-5 md:px-5 px-14 xl:py-20 2xl:py-20 bg-gradient-to-b from-purple to-rhythm">
        {/* MOBILE BACKGORUND */}
        <div className="lg:hidden flex flex-col xl:hidden 2xl:hidden  h-90% rounded-2xl shadow-lg shadow-xiketic w-full">
          <div className=" w-full h-full">
            <AdvancedImage
              className=" object-cover rounded-b-2xl w-full h-full"
              cldImg={bkg}
            />
            <div className="flex bottom-12 relative flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out hover:bg-lavander/30 rounded-b-2xl bg-lavander/10 backdrop-blur-md text-lavander">
              Satélites {">"} {planet}
            </div>
          </div>
        </div>

        {/* ITEMS */}
        <div className="grid grid-flow-row grid-cols-3 gap-8 pt-20 sm:grid-cols-1 md:grid-cols-1 sm:gap-10 md:gap-10">
          {items.map(({ _id, name, parent, urlImg }) => (
            <Link key={_id} href={`${parent.toLowerCase()}/${_id}`}>
              <a>
                <div
                  className={`flex shadow-lg  shadow-xiketic flex-col  w-full sm:h-30% md:h-40% h-70% rounded-2xl `}
                >
                  <div className="w-full h-full">
                    <AdvancedImage
                      className="object-cover rounded-2xl h-full w-full"
                      cldImg={cld.image(`${urlImg}`)}
                    />
                    <div className="flex flex-col relative bottom-12 xl:bottom-16 2xl:bottom-20 justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out  xl:h-16 2xl:h-20 hover:bg-lavander/30 rounded-b-2xl bg-lavander/10 backdrop-blur-md text-lavander">
                      {name} - {parent}
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

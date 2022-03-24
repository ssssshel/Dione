import Link from "next/link";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

import HeadLayout from "../../../components/Head";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useRouter } from "next/router";

export default function Satelites({}) {
  const router = useRouter();

  // CLOUDINARY
  const cld = new Cloudinary({
    cloud: {
      cloudName: "duuwcvkzg",
    },
  });

  const planetsWithSat = [
    {
      name: "Tierra",
      urlName: "tierra",
      imgUrl: "Dione/Planetas/tierra_oxi98u.jpg",
    },
    {
      name: "Marte",
      urlName: "marte",
      imgUrl: "Dione/Planetas/mars-2051747_hv7m30.png",
    },
    {
      name: "Júpiter",
      urlName: "jupiter",
      imgUrl: "Dione/Planetas/jupiter_zkiwy8.png",
    },
    {
      name: "Saturno",
      urlName: "saturno",
      imgUrl: "Dione/Planetas/saturn_fcvyr4.jpg",
    },
    {
      name: "Urano",
      urlName: "urano",
      imgUrl: "Dione/Planetas/Uranus2_w8icdd.jpg",
    },
    {
      name: "Neptuno",
      urlName: "neptuno",
      imgUrl: "Dione/Planetas/neptuno_rzvlst.jpg",
    },
    {
      name: "Plutón",
      urlName: "pluton",
      imgUrl: "Dione/Planetas-Enanos/pluton.jpg",
    },
    {
      name: "Eris",
      urlName: "eris",
      imgUrl: "Dione/Planetas-Enanos/eris_pmbbfo.jpg",
    },
    {
      name: "Makemake",
      urlName: "makemake",
      imgUrl: "Dione/Planetas-Enanos/makemake_ladrqt.jpg",
    },
    {
      name: "Haumea",
      urlName: "haumea",
      imgUrl: "Dione/Planetas-Enanos/haumea2_zvpenh.jpg",
    },
    {
      name: "Orcus",
      urlName: "orcus",
      imgUrl: "Dione/Planetas-Enanos/orcus_fbnwpd.png",
    },
    {
      name: "Quaoar",
      urlName: "quaoar",
      imgUrl: "Dione/Planetas-Enanos/Quaoar_ppoieq.jpg",
    },
    {
      name: "Gonggong",
      urlName: "gonggong",
      imgUrl: "Dione/Planetas-Enanos/gonggong_btezcz.jpg",
    },
  ];

  return (
    <div>
      <HeadLayout section={"Satelites"} />

      <Navbar />
      <div className="sm:hidden flex flex-col justify-center items-center md:hidden h-screen w-full bg-cover bg-no-repeat bg-center bg-[url('https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814747/Dione/Satelites/Art/Sci-Europa-RTS1RFWK_ziqylc.jpg')] ">
        <div className="px-16 py-6 rounded-3xl bg-lavander/30 backdrop-blur-md w-fit">
          <h1 className="text-6xl text-purple font-Dosis">Satélites</h1>
        </div>
      </div>

      <div className="w-full h-auto min-h-screen pb-16 sm:px-5 md:px-5 px-14 xl:py-20 2xl:py-20 bg-gradient-to-b from-purple to-rhythm">
        <div className="lg:hidden flex flex-col justify-end xl:hidden 2xl:hidden h-90% rounded-2xl shadow-lg shadow-xiketic bg-cover bg-center bg-no-repeat w-full bg-[url('https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814747/Dione/Satelites/Art/Sci-Europa-RTS1RFWK_ziqylc.jpg')]">
          <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out hover:bg-lavander/30 rounded-b-2xl bg-lavander/10 backdrop-blur-md text-lavander">
            Satélites
          </div>
        </div>

        {/* dynamic */}
        <div className="grid grid-flow-row grid-cols-3 gap-8 pt-20 sm:grid-cols-1 md:grid-cols-1 sm:gap-10 md:gap-10">
          {planetsWithSat.map(({ name, urlName, imgUrl }) => (
            <Link key={name} href={`/sistema/satelites/${urlName}`}>
              <a>
                <div
                  className={`flex  shadow-lg  shadow-xiketic  flex-col  w-full sm:h-30% md:h-40% h-70% rounded-2xl `}
                >
                  <div className="w-full h-full">
                    <AdvancedImage
                      className="object-cover rounded-2xl  h-full w-full"
                      cldImg={cld.image(`${imgUrl}`)}
                    />
                    <div className="flex flex-col relative bottom-12 xl:bottom-16 2xl:bottom-20 justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out  xl:h-16 2xl:h-20  hover:bg-lavander/30 rounded-b-2xl bg-lavander/10 backdrop-blur-md text-lavander">
                      Satelites de {name}
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

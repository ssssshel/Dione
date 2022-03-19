import Link from "next/link";

import HeadLayout from "../../../components/Head";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useRouter } from "next/router";

export default function Satelites({}) {
  const router = useRouter();

  const planetsWithSat = [
    {
      name: "Tierra",
      urlName: "tierra",
      imgUrl: "",
    },
    {
      name: "Marte",
      urlName: "marte",
      imgUrl: "",
    },
    {
      name: "Júpiter",
      urlName: "jupiter",
      imgUrl: "",
    },
    {
      name: "Saturno",
      urlName: "saturno",
      imgUrl: "",
    },
    {
      name: "Urano",
      urlName: "urano",
      imgUrl: "",
    },
    {
      name: "Neptuno",
      urlName: "neptuno",
      imgUrl: "",
    },
    {
      name: "Plutón",
      urlName: "pluton",
      imgUrl: "",
    },
    {
      name: "Eris",
      urlName: "eris",
      imgUrl: "",
    },
    {
      name: "Makemake",
      urlName: "makemake",
      imgUrl: "",
    },
    {
      name: "Haumea",
      urlName: "haumea",
      imgUrl: "",
    },
    {
      name: "Orcus",
      urlName: "orcus",
      imgUrl: "",
    },
    {
      name: "Quaoar",
      urlName: "quaoar",
      imgUrl: "",
    },
    {
      name: "Gonggong",
      urlName: "gonggong",
      imgUrl: "",
    },
  ];

  return (
    <div>
      <HeadLayout section={"Satelites"} />

      <Navbar />
      <div className="sm:hidden flex flex-col justify-center items-center md:hidden h-screen w-full bg-cover bg-no-repeat bg-center bg-[url('https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814747/Dione/Satelites/Art/Sci-Europa-RTS1RFWK_ziqylc.jpg')] ">
        <div className="px-16 py-6 bg-lavander/30 backdrop-blur-md w-fit">
          <h1 className="text-6xl text-purple font-Dosis">Satélites</h1>
        </div>
      </div>

      <div className="w-full h-auto min-h-screen pb-16 sm:px-5 md:px-5 px-14 xl:py-20 2xl:py-20 bg-gradient-to-b from-purple to-rhythm">
        <div className="lg:hidden flex flex-col justify-end xl:hidden 2xl:hidden h-90% rounded-2xl shadow-lg shadow-xiketic bg-cover bg-center bg-no-repeat w-full bg-[url('https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814747/Dione/Satelites/Art/Sci-Europa-RTS1RFWK_ziqylc.jpg')]">
          <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out hover:bg-rhythm/40 rounded-b-2xl bg-rhythm/30 backdrop-blur-md text-lavander">
            Satélites
          </div>
        </div>

        {/* dinamic */}
        <div className="grid grid-flow-row grid-cols-3 gap-8 pt-20 sm:grid-cols-1 md:grid-cols-1 sm:gap-10 md:gap-10">
          {planetsWithSat.map(({ name, urlName, imgUrl }) => (
            <div
              key={name}
              className={`flex xl:rounded-none shadow-lg  shadow-xiketic 2xl:rounded-none flex-col justify-end w-full sm:h-30% md:h-40% h-70% bg-cover bg-no-repeat bg-center rounded-2xl bg-[url("https://}")]`}
            >
              <Link href={`/sistema/satelites/${urlName}`}>
                <a>
                  <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out xl:rounded-none xl:h-16 2xl:h-20 2xl:rounded-none hover:bg-rhythm/40 rounded-b-2xl bg-rhythm/30 backdrop-blur-md text-lavander">
                    Satelites de {name}
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

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { buildUrl } from "cloudinary-build-url";

import HeadLayout from "../components/Head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const imgUrl = buildUrl("Dione/Planetas/saturn_fcvyr4", {
    cloud: {
      cloudName: "duuwcvkzg",
    },
    // transformations:{
    //   effect:{
    //     name: 'sharpen',
    //     value: 40
    //   }
    // }
  });

  return (
    <div className="w-full bg-slate-600">
      <HeadLayout section="Index" desc="Bienvenido a Dione" />
      <Navbar />
      <div className="">
        <div className="w-full h-screen px-5 pb-12 bg-purple md:hidden lg:hidden xl:hidden 2xl:hidden">
          <div className='w-full h-full shadow-lg shadow-xiketic rounded-b-3xl bg-cover bg-no-repeat bg-[url("https://res.cloudinary.com/duuwcvkzg/image/upload/v1642877525/Dione/Planetas/marsArt_zfdhjo.jpg")] ' />
          <div className="relative flex flex-col items-center w-9/12 gap-6 mx-auto bottom-1/3">
            <h3 className="text-2xl text-center text-lavander font-Urbanist">
              Tu experiencia espacial a un clic de distancia :)
            </h3>
            <div className="items-center w-7/12 h-8 py-1 text-center transition duration-300 ease-in-out delay-100 hover:scale-110 hover:-translate-y-1 hover:bg-lavander/50 rounded-2xl bg-lavander/30 text-lavander">
              Descubre más
            </div>
          </div>
        </div>
        <div className='w-full h-screen py-16 shadow-lg shadow-xiketic flex flex-col justify-center sm:hidden bg-cover bg-center bg-no-repeat bg-[url("https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814746/Dione/Planetas/saturn_fcvyr4.jpg")] '>
          <div className="relative flex flex-col items-end float-right gap-6 pr-32 top-14">
            <h1 className="relative text-5xl text-right text-lavander">
              Tu experiencia espacial, <br /> a un click de distancia :)
            </h1>
            <div className="px-2 text-2xl text-right transition duration-300 ease-in-out cursor-pointer text-lavander hover:scale-105 hover:bg-bluebell/30 hover:backdrop-blur-md w-fit">
              {" "}
              || Descubre más ||
            </div>
          </div>
        </div>

        <div className="w-full h-auto px-5 py-8 xl:py-20 2xl:py-20 bg-gradient-to-b from-purple to-rhythm">
          <div className="grid h-auto grid-flow-row grid-cols-1 gap-4 xl:px-10 xl:grid-cols-4 xl:grid-rows-3 2xl:px-10 2xl:grid-cols-4 2xl:grid-rows-3 auto-rows-fr ">
            <div
              id=""
              className='flex shadow-lg shadow-xiketic flex-col xl:col-span-1 xl:row-span-2 xl:h-full 2xl:col-span-1 2xl:row-span-2 2xl:h-full justify-end xl:rounded-none 2xl:rounded-none w-full h-45% bg-cover bg-no-repeat bg-center rounded-3xl bg-[url("https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814746/Dione/Planetas/sunArt2_fiiufs.jpg")] '
            >
              <Link href="/sistema/otros-cuerpos/sol">
                <a>
                  <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out xl:rounded-none xl:h-20 2xl:h-20 2xl:rounded-none hover:bg-rhythm/40 rounded-b-3xl bg-rhythm/30 backdrop-blur-md text-lavander">
                    El sol
                  </div>
                </a>
              </Link>
            </div>

            <div className='flex flex-col  xl:rounded-none 2xl:rounded-none justify-end w-full h-45% bg-cover bg-no-repeat bg-center shadow-lg shadow-xiketic rounded-3xl bg-[url("https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814745/Dione/Planetas/venus_ln7qrr.jpg")]'>
              <Link href="/sistema/planetas">
                <a>
                  <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out xl:rounded-none xl:h-16 2xl:h-20 2xl:rounded-none hover:bg-rhythm/40 rounded-b-3xl bg-rhythm/30 backdrop-blur-md text-lavander">
                    Planetas
                  </div>
                </a>
              </Link>
            </div>

            <div className='flex xl:col-start-2 xl:rounded-none 2xl:rounded-none 2xl:col-start-2 flex-col justify-end w-full h-45% shadow-lg shadow-xiketic bg-cover bg-no-repeat bg-center rounded-3xl bg-[url("https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814747/Dione/Planetas/pluton_xfkum8.jpg")]'>
              <Link href="/sistema/planetas-enanos">
                <a>
                  <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out xl:rounded-none xl:h-16 2xl:h-20 2xl:rounded-none hover:bg-rhythm/40 rounded-b-3xl bg-rhythm/30 backdrop-blur-md text-lavander">
                    Planetas Enanos
                  </div>
                </a>
              </Link>
            </div>

            <div className='flex xl:row-span-2 shadow-lg shadow-xiketic xl:rounded-none 2xl:rounded-none xl:col-span-2 xl:row-start-1 xl:col-start-3 xl:h-full 2xl:row-span-2 2xl:col-span-2 2xl:row-start-1 2xl:col-start-3 2xl:h-full flex-col justify-end w-full h-45% bg-cover bg-no-repeat bg-center rounded-3xl bg-[url("https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814746/Dione/Satelites/jupiter/Ganymede_wxerql.png")]'>
              <Link href="/sistema/satelites">
                <a>
                  <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out xl:rounded-none xl:h-16 2xl:h-20 2xl:rounded-none hover:bg-rhythm/40 rounded-b-3xl bg-rhythm/30 backdrop-blur-md text-lavander">
                    Satélites
                  </div>
                </a>
              </Link>
            </div>

            <div className='flex flex-col xl:rounded-none shadow-lg shadow-xiketic 2xl:rounded-none justify-end w-full h-45% bg-cover bg-no-repeat bg-center rounded-3xl bg-[url("https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814745/Dione/Asteroids/ida_rpbgsf.jpg")]'>
              <Link href="/sistema/asteroides">
                <a>
                  <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out xl:rounded-none xl:h-16 2xl:h-20 2xl:rounded-none hover:bg-rhythm/40 rounded-b-3xl bg-rhythm/30 backdrop-blur-md text-lavander">
                    Asteroides
                  </div>
                </a>
              </Link>
            </div>

            <div className='flex xl:col-span-3 xl:rounded-none shadow-lg shadow-xiketic 2xl:rounded-none 2xl:col-span-3 flex-col justify-end w-full h-45% bg-cover bg-no-repeat bg-center rounded-3xl bg-[url("https://res.cloudinary.com/duuwcvkzg/image/upload/v1642957472/Dione/cometa_itvyn4.jpg")]'>
              <Link href="/sistema/otros-cuerpos">
                <a>
                  <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out xl:rounded-none xl:h-16 2xl:h-20 2xl:rounded-none hover:bg-rhythm/40 rounded-b-3xl bg-rhythm/30 backdrop-blur-md text-lavander">
                    Y más...
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-screen bg-rhythm">
          <div className='w-full h-full bg-no-repeat bg-cover bg-[url("https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814746/Dione/Planetas/mars-2051747_hv7m30.png")] '></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

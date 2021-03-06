import Link from "next/link";

import HeadLayout from "../components/Head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
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
            <Link href="/sistema">
              <a className="items-center cursor-pointer w-7/12 h-8 py-1 text-center transition duration-300 ease-in-out delay-100 hover:scale-110 hover:-translate-y-1 hover:bg-lavander/50 rounded-2xl bg-lavander/30 text-lavander">
                Descubre más
              </a>
            </Link>
          </div>
        </div>
        <div className='w-full h-screen py-16 shadow-lg shadow-xiketic flex flex-col justify-center sm:hidden bg-cover bg-center bg-no-repeat bg-[url("https://res.cloudinary.com/duuwcvkzg/image/upload/v1648076178/Dione/Planetas-Enanos/pluton2_k5povg.jpg")] '>
          <div className="relative flex flex-col items-end float-right gap-6 pr-32 top-14">
            <h1 className="relative text-5xl text-right text-lavander">
              Tu experiencia espacial, <br /> a un click de distancia :)
            </h1>
            <Link href="/sistema">
              <a className="px-2 rounded-2xl text-2xl text-right transition duration-300 ease-in-out cursor-pointer text-lavander hover:scale-105 hover:bg-bluebell/30 hover:backdrop-blur-md w-fit">
                {" "}
                || Descubre más ||
              </a>
            </Link>
          </div>
        </div>

        <div className="w-full h-auto flex flex-col px-5 py-8 xl:py-20 2xl:py-20 bg-gradient-to-b from-purple to-rhythm">
          {/* <div className="w-full h-auto px-5 py-8 xl:py-20 2xl:py-20 bg-bluebell"> */}
          <div className="w-full h-fit mb-12 px-10 py-10 self-center rounded-2xl bg-lavander/10">
            <p className="font-Urbanist text-center text-violet-50 text-3xl">
              Dione es una enciclopedia virtual en la que podrás encontrar
              información accesible sobre:
            </p>
          </div>
          <div className="grid h-auto mt-5 grid-flow-row grid-cols-1 gap-4 xl:px-10 xl:grid-cols-4 xl:grid-rows-3 2xl:px-10 2xl:grid-cols-4 2xl:grid-rows-3 auto-rows-fr ">
            {/* <div
              id=""
              className='flex shadow-lg shadow-xiketic flex-col xl:col-span-1 xl:row-span-2 xl:h-full 2xl:col-span-1 2xl:row-span-2 2xl:h-full justify-end xl:rounded-none 2xl:rounded-none w-full h-45% bg-cover bg-no-repeat bg-center rounded-3xl bg-[url("https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814747/Dione/Estrellas/sun_t3jgnh.png")] '
            > */}
            <div
              id=""
              className='flex shadow-lg shadow-xiketic flex-col xl:col-span-1 xl:row-span-2 xl:h-full 2xl:col-span-1 2xl:row-span-2 2xl:h-full justify-end  w-full h-45% bg-cover bg-no-repeat bg-center rounded-3xl bg-[url("https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814747/Dione/Estrellas/sun_t3jgnh.png")] '
            >
              <Link href="/sistema/estrellas/sol">
                <a>
                  {/* <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out xl:rounded-none xl:h-20 2xl:h-20 2xl:rounded-none hover:bg-rhythm/40 rounded-b-3xl bg-rhythm/30 backdrop-blur-md text-lavander">
                    El sol
                  </div> */}
                  <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out  xl:h-20 2xl:h-20 hover:bg-lavander/30 rounded-b-3xl bg-lavander/10 backdrop-blur-md text-lavander">
                    El sol
                  </div>
                </a>
              </Link>
            </div>

            <div className='flex flex-col  justify-end w-full h-45% bg-cover bg-no-repeat bg-center shadow-lg shadow-xiketic rounded-3xl bg-[url("https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814745/Dione/Planetas/venus_ln7qrr.jpg")]'>
              <Link href="/sistema/planetas">
                <a>
                  <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out  xl:h-16 2xl:h-20  hover:bg-lavander/30 rounded-b-3xl bg-lavander/10 backdrop-blur-md text-lavander">
                    Planetas
                  </div>
                </a>
              </Link>
            </div>

            <div className='flex  xl:col-start-2 2xl:col-start-2 flex-col justify-end w-full h-45% shadow-lg shadow-xiketic bg-cover bg-no-repeat bg-center rounded-3xl bg-[url("https://res.cloudinary.com/duuwcvkzg/image/upload/v1647988444/Dione/assets/03_otmomu.jpg")]'>
              <Link href="/sistema/planetas-enanos">
                <a>
                  <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out  xl:h-16 2xl:h-20  hover:bg-lavander/30 rounded-b-3xl bg-lavander/10 backdrop-blur-md text-lavander">
                    Planetas Enanos
                  </div>
                </a>
              </Link>
            </div>

            <div className='flex xl:row-span-2 shadow-lg shadow-xiketic xl:col-span-2 xl:row-start-1 xl:col-start-3 xl:h-full 2xl:row-span-2 2xl:col-span-2 2xl:row-start-1 2xl:col-start-3 2xl:h-full flex-col justify-end w-full h-45% bg-cover bg-no-repeat bg-center rounded-3xl bg-[url("https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814746/Dione/Satelites/jupiter/Ganymede_wxerql.png")]'>
              <Link href="/sistema/satelites">
                <a>
                  <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out  xl:h-16 2xl:h-20 hover:bg-lavander/30 rounded-b-3xl bg-lavander/10 backdrop-blur-md text-lavander">
                    Satélites
                  </div>
                </a>
              </Link>
            </div>

            <div className='flex flex-col  shadow-lg shadow-xiketic justify-end w-full h-45% bg-cover bg-no-repeat bg-center rounded-3xl bg-[url("https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814745/Dione/Asteroids/ida_rpbgsf.jpg")]'>
              <Link href="/sistema/asteroides">
                <a>
                  <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out  xl:h-16 2xl:h-20 hover:bg-lavander/30 rounded-b-3xl bg-lavander/10 backdrop-blur-md text-lavander">
                    Asteroides
                  </div>
                </a>
              </Link>
            </div>

            <div className='flex xl:col-span-3  shadow-lg shadow-xiketic 2xl:col-span-3 flex-col justify-end w-full h-45% bg-cover bg-no-repeat bg-center rounded-3xl bg-[url("https://res.cloudinary.com/duuwcvkzg/image/upload/v1642957472/Dione/cometa_itvyn4.jpg")]'>
              <Link href="/sistema/cometas">
                <a>
                  <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out  xl:h-16 2xl:h-20 hover:bg-lavander/30 rounded-b-3xl bg-lavander/10 backdrop-blur-md text-lavander">
                    Cometas
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className='w-full sm:hidden md:hidden lg:hidden h-screen bg-no-repeat bg-cover bg-[url("https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814746/Dione/Planetas/mars-2051747_hv7m30.png")] '></div>
        <div className='w-full h-screen xl:hidden 2xl:hidden bg-no-repeat bg-cover bg-[url("https://res.cloudinary.com/duuwcvkzg/image/upload/v1648076178/Dione/Planetas-Enanos/pluton_zboyuv.jpg")] '></div>
      </div>
      <Footer />
    </div>
  );
}

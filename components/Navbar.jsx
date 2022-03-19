// import Planeta from "../models/Planeta";
// import PlanetaEnano from "../models/PlanetaEnano";
// import connectDb from "../lib/connectDb";

import menus from "../public/img/menus.png";
import close from "../public/img/xwhite.png";
import logoClaro from "../public/img/LogoClaro.svg";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar({ success, error }) {
  console.log(`success: ${success}`);
  console.log(`error: ${error}`);

  const { data: session, status } = useSession();

  // WEB STATE
  let [optionsTog, setOptionsTog] = useState(null);

  // MOBILE STATE
  let [mobileTog, setMobileTog] = useState(false);

  useEffect(() => {
    // WEB NAVBAR MANAGEMENT
    const webOptionsContainer = document.getElementById("webOpCont");
    const options1 = document.getElementById("op1");
    const options2 = document.getElementById("op2");

    const toggleWebDisplay = () => {
      // ACTIVA O DESACTIVA EL CONTENEDOR
      if (optionsTog == "opt1" || optionsTog == "opt2") {
        webOptionsContainer.style.display = "block";
      } else {
        webOptionsContainer.style.display = "none";
      }

      // MUESTRA LAS OPCIONES DE ACUERDO AL VALOR ASIGNADO AL ESTADO DE optionsTog
      if (optionsTog == "opt1") {
        options1.style.display = "flex";
        options2.style.display = "none";
      } else if (optionsTog == "opt2") {
        options1.style.display = "none";
        options2.style.display = "flex";
      } else {
        options1.style.display = "none";
        options2.style.display = "none";
      }
    };

    // MOBILE NAVBAR MANAGEMENT
    const burger = document.getElementById("burgerBtn");
    const close = document.getElementById("closeBtn");
    const mobOptCont = document.getElementById("mobOptionsContainer");
    const mobOpt = document.getElementById("mobOptions");

    const toggleMobileDisplay = () => {
      if (!mobileTog) {
        burger.style.display = "block";
        close.style.display = "none";
        mobOptCont.style.height = "5rem";
        mobOpt.style.display = "none";
      } else {
        burger.style.display = "none";
        close.style.display = "block";
        mobOptCont.style.height = "100vh";
        mobOpt.style.display = "block";
      }
    };

    toggleWebDisplay();
    toggleMobileDisplay();
  });

  const planetsWithSat = [
    {
      name: "Tierra",
      urlName: "tierra",
    },
    {
      name: "Marte",
      urlName: "marte",
    },
    {
      name: "Júpiter",
      urlName: "jupiter",
    },
    {
      name: "Saturno",
      urlName: "saturno",
    },
    {
      name: "Urano",
      urlName: "urano",
    },
    {
      name: "Neptuno",
      urlName: "neptuno",
    },
    {
      name: "Plutón",
      urlName: "pluton",
    },
    {
      name: "Eris",
      urlName: "eris",
    },
    {
      name: "Makemake",
      urlName: "makemake",
    },
    {
      name: "Haumea",
      urlName: "haumea",
    },
    {
      name: "Orcus",
      urlName: "orcus",
    },
    {
      name: "Quaoar",
      urlName: "quaoar",
    },
    {
      name: "Gonggong",
      urlName: "gonggong",
    },
  ];

  return (
    <div>
      {/* NAVBAR MOBILE */}
      <div
        id="mobOptionsContainer"
        className="fixed z-10 w-full h-20 px-5 rounded-b-xl backdrop-blur-md lg:hidden xl:hidden 2xl:hidden bg-purple/30 "
      >
        <div className="flex items-center content-center justify-between mt-5">
          <div className="">
            <p className="text-3xl font-normal text-white font-Dosis">Dione</p>
          </div>
          <div className="relative w-6 h-6 mt-2">
            <div
              id="burgerBtn"
              className="absolute block "
              onClick={() => setMobileTog((mobileTog = true))}
            >
              <Image alt="menu" width={25} height={25} src={menus} />
            </div>
            <div
              id="closeBtn"
              className="absolute hidden"
              onClick={() => setMobileTog((mobileTog = false))}
            >
              <Image alt="close" width={20} height={20} src={close} />
            </div>
          </div>
        </div>
        {/* OPCIONES MOBILE */}
        <div id="mobOptions" className="relative hidden top-20">
          <ul className="flex flex-col gap-8">
            <li className="w-full text-center rounded-lg hover:bg-lavander/20">
              <Link href="/">
                <a className="text-lavander">Inicio</a>
              </Link>
            </li>
            <li className="w-full text-center rounded-lg hover:bg-lavander/20">
              <Link href="/sistema">
                <a className="text-lavander">Sistema</a>
              </Link>
            </li>
            {/* <li className="w-full text-center rounded-lg hover:bg-lavander/20">
              <Link href="&">
                <a className="text-lavander">Buscar</a>
              </Link>
            </li> */}
            <li className="w-full text-center rounded-lg hover:bg-lavander/20">
              <Link href="/dione">
                <a className="text-lavander">El proyecto</a>
              </Link>
            </li>
            <li className="w-full text-center rounded-lg hover:bg-lavander/20">
              <Link href="/contacto">
                <a className="text-lavander">Contacto</a>
              </Link>
            </li>
            {!session ? (
              <li
                onClick={() => signIn("github", { callbackUrl: "/" })}
                className="w-full text-center rounded-lg text-lavander hover:bg-lavander/20"
              >
                Iniciar sesión
              </li>
            ) : (
              <div>
                <li className="w-full text-center rounded-lg hover:bg-lavander/20">
                  <Link href="/admin">
                    <a className="text-lavander">Admin</a>
                  </Link>
                </li>
                <li
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="w-full text-center rounded-lg text-lavander hover:bg-lavander/20"
                >
                  Cerrar sesión
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>

      {/* NAVBAR WEB */}
      <div className="fixed z-10 w-full h-auto px-14 bg-purple/30 backdrop-blur-md sm:hidden md:hidden">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Image alt="logo" src={logoClaro} />
          </div>

          <div>
            <ul className="flex flex-row items-center gap-16">
              <li>
                <Link href="/">
                  <a className="text-lg hover:text-bluebell text-lavander">
                    Inicio
                  </a>
                </Link>
              </li>
              <li
                className="text-lg cursor-pointer hover:text-bluebell text-lavander"
                id="system"
                onMouseOver={() => setOptionsTog((optionsTog = "opt1"))}
              >
                <a>Sistema</a>
              </li>
              <li className="flex flex-col justify-center w-24 ">
                <Link href="/">
                  <a className="flex flex-col justify-center h-20 text-lg text-center transition duration-150 ease-in-out bg-xiketic hover:scale-110 hover:bg-purple hover:text-bluebell text-lavander">
                    Buscar
                  </a>
                </Link>
              </li>
              <li
                className="text-lg cursor-pointer hover:text-bluebell text-lavander"
                id="about"
                onMouseOver={() => setOptionsTog((optionsTog = "opt2"))}
              >
                <a>Acerca de</a>
              </li>
            </ul>
          </div>
        </div>

        <div id="webOpCont" className="relative hidden h-screen top-20">
          {/* OPCIONES SISTEMA */}
          <ul
            id="op1"
            className="flex-row justify-between hidden float-right w-full text-base font-semibold cursor-pointer text-lavander"
          >
            <li>
              <Link href="/sistema">
                <a>Vista General</a>
              </Link>
            </li>

            <li>
              <Link href="/sistema/planetas">
                <a>Planetas</a>
              </Link>
              {/* {planetas.map(({ _id, name }) => (
                <ul key={_id} className="mt-5 font-light">
                  <li className="hover:text-rhythm">
                    <Link href={`/sistema/planetas/${_id}`}>
                      <a>{name}</a>
                    </Link>
                  </li>
                </ul>
              ))} */}
            </li>
            <li>
              <Link href="/sistema/planetas-enanos">
                <a>Planetas Enanos</a>
              </Link>
              <ul className="mt-5 font-light">
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Ceres</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Plutón</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Eris</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Makemake</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Haumea</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Sedna</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Orcus</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Quaoar</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Varuna</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Ixión</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Gonggong</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              Satélites
              <ul className="mt-5 font-light">
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>La Luna</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Marte</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Júpiter</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Saturno</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Urano</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Neptuno</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Planetas Enanos</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/sistema/otros-cuerpos">
                <a>Otros cuerpos</a>
              </Link>
              <ul className="mt-5 font-light">
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>El sol</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Asteroides</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Cometas</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="text-3xl hover:text-bluebell"
              onClick={() => setOptionsTog((optionsTog = null))}
            >
              x
            </li>
          </ul>

          {/* OPCIONES ABOUT */}
          <ul
            id="op2"
            className="flex-row justify-between hidden float-right w-full text-base font-semibold cursor-pointer text-lavander"
          >
            <li className="hover:text-rhythm">
              <Link href="">
                <a>El Proyecto</a>
              </Link>
            </li>
            <li className="hover:text-rhythm">
              <Link href="">
                <a>Contacto</a>
              </Link>
            </li>
            {!session ? (
              <li
                onClick={() => signIn("github", { callbackUrl: "/" })}
                className="hover:text-rhythm"
              >
                Iniciar sesión
              </li>
            ) : (
              <div>
                <li className="hover:text-rhythm">
                  <Link href="/admin">
                    <a>Admin</a>
                  </Link>
                </li>
                <li
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="hover:text-rhythm"
                >
                  Cerrar sesión
                </li>
              </div>
            )}
            <li
              className="text-3xl hover:text-bluebell"
              onClick={() => setOptionsTog((optionsTog = null))}
            >
              x
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   try {
//     await connectDb();

//     // PLANETAS
//     const resPlaneta = await Planeta.find({});
//     const itemsPlaneta = resPlaneta.map((doc) => {
//       const item = doc.toObject();
//       item._id = `${item._id}`;
//       return item;
//     });

//     // PLANETAS ENANOS
//     const resPlanetaEnano = await PlanetaEnano.find({});
//     const itemsPlanetaEnano = resPlanetaEnano.map((doc) => {
//       const item = doc.toObject();
//       item._id = `${item._id}`;
//       return item;
//     });

//     return {
//       props: {
//         success: true,
//         planetas: itemsPlaneta,
//         planetasEnanos: itemsPlanetaEnano,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         success: false,
//         error: "error de petición",
//       },
//     };
//   }
// }

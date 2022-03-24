import menus from "../public/img/menus.png";
import close from "../public/img/xwhite.png";
import logoClaro from "../public/img/LogoClaro.svg";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const Navbar = () => {
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

  // CLOUDINARY
  const cld = new Cloudinary({
    cloud: {
      cloudName: "duuwcvkzg",
    },
  });

  let img = null;

  const changePath = (path) => {
    return (img = cld.image(path));
  };

  // WEB NAVBAR IMAGE INDEX X OPTION
  let [imageIndex, setImageIndex] = useState(0);

  const exchangeNavbarImage = () => {
    switch (imageIndex) {
      case 0:
        return changePath("Dione/assets/00_fonwgl.jpg");
      case 1:
        return changePath("Dione/assets/01_stburt.png");
      case 2:
        return changePath("Dione/assets/02_isiwxr.png");
      case 3:
        return changePath("Dione/assets/03_otmomu.jpg");
      case 4:
        return changePath("Dione/assets/04_ctjnfn.png");
      case 5:
        return changePath("Dione/assets/05_rmkqzh.jpg");
      case 6:
        return changePath("Dione/assets/06_q4idsy.jpg");

      default:
        break;
    }
  };
  exchangeNavbarImage();

  return (
    <div>
      {/* NAVBAR MOBILE */}
      <div
        id="mobOptionsContainer"
        className="fixed z-10 w-full h-20 px-5 rounded-b-xl backdrop-blur-md lg:hidden xl:hidden 2xl:hidden bg-purple/30 "
      >
        <div className="flex items-center content-center justify-between mt-5">
          <div className="">
            <Link href="/">
              <a className="text-3xl font-normal text-white font-Dosis">
                Dione
              </a>
            </Link>
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
          <Link href="/">
            <a>
              <Image alt="logo" src={logoClaro} />
            </a>
          </Link>

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
          <div
            id="op1"
            className="flex-row hidden justify-between h-50% 2xl:h-60% w-full font-semibold text-lavander"
          >
            <div className="flex flex-row justify-between px-36 items-center  w-full">
              <ul className="w-fit text-xl flex flex-col gap-4  cursor-pointer ">
                <li
                  onMouseOver={() => setImageIndex((imageIndex = 0))}
                  className="hover:text-rhythm"
                >
                  <Link href="/sistema">
                    <a>Vista General</a>
                  </Link>
                </li>
                <li
                  onMouseOver={() => setImageIndex((imageIndex = 1))}
                  className="hover:text-rhythm"
                >
                  <Link href="/sistema/estrellas">
                    <a>El sol</a>
                  </Link>
                </li>
                <li
                  onMouseOver={() => setImageIndex((imageIndex = 2))}
                  className="hover:text-rhythm"
                >
                  <Link href="/sistema/planetas">
                    <a>Planetas</a>
                  </Link>
                </li>
                <li
                  onMouseOver={() => setImageIndex((imageIndex = 3))}
                  className="hover:text-rhythm"
                >
                  <Link href="/sistema/planetas-enanos">
                    <a>Planetas Enanos</a>
                  </Link>
                </li>
                <li
                  onMouseOver={() => setImageIndex((imageIndex = 4))}
                  className="hover:text-rhythm"
                >
                  <Link href="/sistema/satelites">
                    <a>Satélites</a>
                  </Link>
                </li>
                <li
                  onMouseOver={() => setImageIndex((imageIndex = 5))}
                  className="hover:text-rhythm"
                >
                  <Link href="/sistema/asteroides">
                    <a>Asteroides</a>
                  </Link>
                </li>
                <li
                  onMouseOver={() => setImageIndex((imageIndex = 6))}
                  className="hover:text-rhythm"
                >
                  <Link href="/sistema/cometas">
                    <a>Cometas</a>
                  </Link>
                </li>
              </ul>

              {/* IMAGENES */}
              <div className="w-7/12 h-full ">
                <AdvancedImage
                  className="object-cover w-full h-full"
                  cldImg={img}
                />
              </div>
            </div>

            <p
              className="text-3xl  cursor-pointer  hover:text-bluebell absolute right-0 top-0"
              onClick={() => setOptionsTog((optionsTog = null))}
            >
              x
            </p>
          </div>

          {/* OPCIONES ABOUT */}
          <div
            id="op2"
            className="flex-row justify-between hidden h-50% 2xl:h-60% float-right w-full font-semibold cursor-pointer text-lavander"
          >
            <div className="flex items-center">
              <ul className="text-xl gap-4 flex flex-col ml-36  ">
                <li className="hover:text-rhythm">
                  <Link href="/dione">
                    <a>El Proyecto</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="/contacto">
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
                  <div className="flex flex-col gap-4">
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
              </ul>
            </div>

            <p
              className="text-3xl hover:text-bluebell absolute right-0"
              onClick={() => setOptionsTog((optionsTog = null))}
            >
              x
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

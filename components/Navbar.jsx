import Link from "next/link";
import Image from "next/image";
// import navbar from "../styles/Navbar.module.css"
import fonts from "../styles/Fonts.module.css";
import menus from "../public/img/menus.png";
import close from "../public/img/xwhite.png";

import logoClaro from "../public/img/LogoClaro.svg";

const Navbar = () => {
  function openMenu() {
    const burger = document.getElementById("burgerBtn");
    const close = document.getElementById("closeBtn");
    const navbar = document.getElementById("navbar");
    const options = document.getElementById("options");
    burger.style.display = "none";
    close.style.display = "block";
    navbar.style.height = "100vh";
    options.style.display = "block";
  }

  function closeMenu() {
    const burger = document.getElementById("burgerBtn");
    const close = document.getElementById("closeBtn");
    burger.style.display = "block";
    close.style.display = "none";
    navbar.style.height = "5rem";
    options.style.display = "none";
  }

  function dropDown() {
    const optionsSystem = document.getElementById("opSystem");
    optionsSystem.style.display = "block";
  }

  function closeDropdown() {
    const optionsSystem = document.getElementById("opSystem");
    optionsSystem.style.display = "none";
  }

  return (
    <div>
      <div
        id="navbar"
        className="fixed z-10 w-full h-20 px-5 rounded-b-3xl backdrop-blur-md lg:hidden xl:hidden 2xl:hidden bg-purple/30 "
      >
        <div className="flex items-center content-center justify-between mt-5">
          <div className="">
            <p className="text-3xl font-normal text-white font-Dosis">Dione</p>
          </div>
          <div className="relative w-6 h-6 mt-2">
            <div id="burgerBtn" className="absolute block " onClick={openMenu}>
              <Image alt="menu" width={25} height={25} src={menus} />
            </div>
            <div id="closeBtn" className="absolute hidden" onClick={closeMenu}>
              <Image alt="close" width={20} height={20} src={close} />
            </div>
          </div>
        </div>
        <div id="options" className="relative hidden top-20">
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
            <li className="w-full text-center rounded-lg hover:bg-lavander/20">
              <Link href="&">
                <a className="text-lavander">Buscar</a>
              </Link>
            </li>
            <li className="w-full text-center rounded-lg hover:bg-lavander/20">
              <Link href="&">
                <a className="text-lavander">Acerca de</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

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
                onMouseOver={dropDown}
              >
                Sistema
              </li>
              <li className="flex flex-col justify-center w-24 ">
                <Link href="/">
                  <a className="flex flex-col justify-center h-20 text-lg text-center transition duration-150 ease-in-out bg-xiketic hover:scale-110 hover:bg-purple hover:text-bluebell text-lavander">
                    Buscar
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-lg hover:text-bluebell text-lavander">
                    Acerca de
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div id="opSystem" className="relative hidden h-screen top-20">
          <ul className="flex flex-row justify-between float-right w-full text-base font-semibold cursor-pointer text-lavander">
            <li>
              <Link href="/sistema">
                <a>Vista General</a>
              </Link>
            </li>

            <li>
              Planetas
              <ul className="mt-5 font-light">
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Mercurio</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>Venus</a>
                  </Link>
                </li>
                <li className="hover:text-rhythm">
                  <Link href="">
                    <a>La Tierra</a>
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
              </ul>
            </li>
            <li>
              Planetas Enanos
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
              Otros cuerpos
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
              onClick={closeDropdown}
            >
              x
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

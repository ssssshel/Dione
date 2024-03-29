import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import logoOscuro from "../public/img/Logo.svg";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="z-20 flex flex-col justify-between w-full sm:sticky md:sticky h-fit sm:h-screen md:h-screen bg-lavander">
      <div className="flex flex-row justify-between w-full h-full pt-24 pb-32 pl-20 pr-52 sm:py-8 md:py-8 sm:flex-col md:flex-col sm:justify-around md:justify-around sm:px-5 md:px-5">
        <Link href="/">
          <a className="text-4xl font-normal text-xiketic font-Dosis">
            Dione
          </a>
        </Link>
        <Link href="/">
          <a className="mt-3 text-lg text-right sm:text-left md:text-left">Inicio</a>
        </Link>
        <div className="flex flex-col gap-10 mt-3 sm:text-left md:text-left sm:gap-3 md:gap-3">
          <Link href="/sistema">
            <a className="text-lg text-right sm:text-left md:text-left">
              Sistema
            </a>
          </Link>
          <ul className="flex flex-col gap-4 text-base text-right sm:text-left md:text-left sm:text-sm md:text-sm sm:gap-1 md:gap-1">
            <li>
              <Link href="/sistema">
                <a className="hover:text-rhythm">Vista general</a>
              </Link>
            </li>
            <li>
              <Link href="/sistema/estrellas">
                <a className="hover:text-rhythm">El sol</a>
              </Link>
            </li>
            <li>
              <Link href="/sistema/planetas">
                <a className="hover:text-rhythm">Planetas</a>
              </Link>
            </li>
            <li>
              <Link href="/sistema/planetas-enanos">
                <a className="hover:text-rhythm">Planetas enanos</a>
              </Link>
            </li>
            <li>
              <Link href="/sistema/satelites">
                <a className="hover:text-rhythm">Satélites</a>
              </Link>
            </li>
            <li>
              <Link href="/sistema/asteroides">
                <a className="hover:text-rhythm">Asteroides</a>
              </Link>
            </li>
            <li>
              <Link href="/sistema/cometas">
                <a className="hover:text-rhythm">Otros cuerpos</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-10 mt-3 sm:gap-3 md:gap-3">
          <p className="text-lg text-right sm:text-left md:text-left">
            Acerca de
          </p>
          <ul className="flex flex-col gap-4 text-base text-right sm:text-left md:text-left sm:text-sm md:text-sm sm:gap-1 md:gap-1">
            <li>
              <Link href="/dione">
                <a className="hover:text-rhythm">El proyecto</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/contacto">
                <a className="hover:text-rhythm">Contacto</a>
              </Link>
            </li> */}
            <ul className="flex flex-row gap-5 sm:flex-col md:flex-col sm:gap-1 md:gap-1">
              <li>
                <Link href="https://github.com/ssssshel/Dione/tree/main">
                  <a
                    target={"_blank"}
                    className="text-3xl sm:text-base md:text-xl hover:text-rhythm"
                  >
                    <FontAwesomeIcon className="" icon={faGithub} />
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link href="/">
                  <a className="text-3xl sm:text-base md:text-xl hover:text-rhythm">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-3xl hover:text-rhythm sm:text-base md:text-xl">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </Link>
              </li> */}
            </ul>
          </ul>
        </div>
      </div>
      <div className="w-full h-16 pt-6 text-sm text-right sm:text-xs md:text-xs px-14 sm:px-6 md:px-6 sm:h-14 md:h-14 bg-purple text-lavander">
        <FontAwesomeIcon icon={faCode} /> with ❤️ by{" "}
        <Link href="https://github.com/ssssshel">
          <a target={"_blank"}>ssssshel</a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;

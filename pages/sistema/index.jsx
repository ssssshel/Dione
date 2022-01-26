import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Footer from "../../components/Footer";
import HeadLayout from "../../components/Head";
import Navbar from "../../components/Navbar";

const General = () => {
  return (
    <div>
      <HeadLayout section="Vista General" />

      <Navbar />

      <div className="h-auto flex flex-col sm:px-4 py-8 w-full bg-xiketic">
        <div className="sm:h-60  flex-col flex text-center justify-center sm:rounded-3xl md:h-4/6 w-full bg-[url('https://res.cloudinary.com/duuwcvkzg/image/upload/v1642957472/Dione/sky_ochfxd.jpg')] ">
          <h1 className="text-lavander text-2xl font-Dosis">Vista General</h1>
        </div>

        <div className="py-8">
          <ul className="text-lavander flex flex-col gap-5 bg-bluebell/25 p-4 rounded-2xl">
            <li className="bg-bluebell/25 rounded-lg px-2">
              <Link href="">
                <a>El Sol</a>
              </Link>
            </li>

            <li className="bg-bluebell/25 rounded-lg px-2 py-3">
              <Link href="">
                <a>Planetas</a>
              </Link>
              <ul className="bg-bluebell/25 rounded-lg p-2">
                <li>
                  <Link href="">
                    <a>Mercurio</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Venus</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>La Tierra</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Marte</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Júpiter</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Saturno</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Urano</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a></a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="bg-bluebell/25 rounded-lg px-2 py-3">
              <Link href="">
                <a>Planetas Enanos</a>
              </Link>
              <ul className="bg-bluebell/25 rounded-lg px-2"></ul>
            </li>

            <li className="bg-bluebell/25 rounded-lg px-2 py-3">
              <Link href="">
                <a>Satélites</a>
              </Link>
              <ul className="bg-bluebell/25 rounded-lg px-2 py-3">
                <li>
                  <Link href="">
                    <a>La tierra</a>
                  </Link>
                  <ul className="bg-bluebell/25 rounded-lg px-2">
                    <li>
                      <Link href="">
                        <a>La Luna</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="bg-bluebell/25 rounded-lg px-2 py-3">
              <Link href="">
                <a>Asteroides</a>
              </Link>
              <ul className="bg-bluebell/25 rounded-lg px-2"></ul>
            </li>
            <li className="bg-bluebell/25 rounded-lg px-2 py-3">
              <Link href="">
                <a>Cometas</a>
              </Link>
              <ul className="bg-bluebell/25 rounded-lg px-2"></ul>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default General;

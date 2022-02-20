import HeadLayout from "../../../components/Head";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useRouter } from "next/router";

export default function Satelites({}) {
  const router = useRouter();

  return (
    <div>
      <HeadLayout section={"Satelites"} />

      <Navbar />
      <div className="sm:hidden flex flex-col justify-center items-center md:hidden h-screen w-full bg-cover bg-no-repeat bg-center bg-[url('https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814747/Dione/Satelites/Art/Sci-Europa-RTS1RFWK_ziqylc.jpg')] ">
        <div className="bg-lavander/30 py-6 px-16 backdrop-blur-md w-fit">
          <h1 className="text-6xl text-purple font-Dosis">Etiqueta - </h1>
        </div>
      </div>

      <div className="w-full h-auto min-h-screen sm:px-5 md:px-5 px-14 pb-16 xl:py-20 2xl:py-20 bg-gradient-to-b from-purple to-rhythm">
        <div className="lg:hidden flex flex-col justify-end xl:hidden 2xl:hidden h-90% rounded-2xl shadow-lg shadow-xiketic bg-cover bg-center bg-no-repeat w-full bg-[url('https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814747/Dione/Satelites/Art/Sci-Europa-RTS1RFWK_ziqylc.jpg')]">
          <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out hover:bg-rhythm/40 rounded-b-2xl bg-rhythm/30 backdrop-blur-md text-lavander">
            Etiqueta -
          </div>
        </div>

        {/* <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-8 grid-cols-3 pt-20 grid-flow-row sm:gap-10 md:gap-10">
              {filCategory.map(({ _id, name, category, urlImg }) => (
                <div
                  key={_id}
                  className={`flex xl:rounded-none shadow-lg  shadow-xiketic 2xl:rounded-none flex-col justify-end w-full sm:h-30% md:h-40% h-70% bg-cover bg-no-repeat bg-center rounded-2xl bg-[url("https://${urlImg}")]`}
                >
                  <Link href={`/sistema/${category}/${name}`}>
                    <a>
                      <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out xl:rounded-none xl:h-16 2xl:h-20 2xl:rounded-none hover:bg-rhythm/40 rounded-b-2xl bg-rhythm/30 backdrop-blur-md text-lavander">
                        {name} - {category}
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div> */}
      </div>

      <Footer />
    </div>
  );
}

import Link from "next/link";

import Item from "../../../models/Item";
import connectDb from "../../../lib/connectDb";
import { useRouter } from "next/router";

import Footer from "../../../components/Footer";
import HeadLayout from "../../../components/Head";
import Navbar from "../../../components/Navbar";

export default function Category({ items }) {
  const router = useRouter();

  // OBTIENE LA RUTA DINAMICA A PARTIR DE LA URL Y SE CONVIERTE A STRNG PROCEDENTE DE UN OBJETO
  const { category } = router.query;

  let foundPage = true;
  // CATEGORIA DINAMICA
  let cat = "";
  // BACKGROUND DINAMICO
  let bkg = "";

  switch (category) {
    case "planetas":
      cat = "Planetas";
      break;

    case "planetas-enanos":
      cat = "Planetas Enanos";
      break;

    case "asteroides":
      cat = "Asteroides";
      break;

    case "cometas":
      cat = "Cometas";
      break;

    case "estrellas":
      cat = "Estrellas";
      break;

    default:
      cat = "null";
      foundPage = false;
      console.log("null");
      break;
  }

  // SE FILTRA EL ARRAY BASE COMPARANDO LA CATEGORIA DE CADA ITEM CON LA QUE SE MUESTERA EN EL SWITCH DE BUSQUEDA
  const filCategory = items.filter((item) => {
    return item.category == cat;
  });

  console.log(filCategory);

  {
    if (!foundPage) {
      return <div>La pagina no existe</div>;
    } else {
      return (
        <div>
          <HeadLayout section={cat} />

          <Navbar />
          <div className="sm:hidden flex flex-col justify-center items-center md:hidden h-screen w-full bg-cover bg-no-repeat bg-center bg-[url('https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814747/Dione/Satelites/Art/Sci-Europa-RTS1RFWK_ziqylc.jpg')] ">
            <div className="bg-lavander/30 py-6 px-16 backdrop-blur-md w-fit">
              <h1 className="text-6xl text-purple font-Dosis">
                Etiqueta - {cat}
              </h1>
            </div>
          </div>

          <div className="w-full h-auto min-h-screen sm:px-5 md:px-5 px-14 pb-16 xl:py-20 2xl:py-20 bg-gradient-to-b from-purple to-rhythm">
            <div className="lg:hidden flex flex-col justify-end xl:hidden 2xl:hidden h-90% rounded-2xl shadow-lg shadow-xiketic bg-cover bg-center bg-no-repeat w-full bg-[url('https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814747/Dione/Satelites/Art/Sci-Europa-RTS1RFWK_ziqylc.jpg')]">
              <div className="flex flex-col justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out hover:bg-rhythm/40 rounded-b-2xl bg-rhythm/30 backdrop-blur-md text-lavander">
                Etiqueta - {cat}
              </div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-8 grid-cols-3 pt-20 grid-flow-row sm:gap-10 md:gap-10">
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
            </div>
          </div>

          <Footer />
        </div>
      );
    }
  }
}

export async function getServerSideProps() {
  try {
    await connectDb();

    const res = await Item.find({});

    const items = res.map((doc) => {
      const item = doc.toObject();
      item._id = `${item._id}`;
      return item;
    });

    return { props: { items } };
  } catch (error) {
    console.log(error);
  }
}

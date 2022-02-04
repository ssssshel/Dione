import Footer from "../../../../components/Footer";
import HeadLayout from "../../../../components/Head";
import Navbar from "../../../../components/Navbar";

const Item = () => {
  return (
    <div>
      <HeadLayout />

      <Navbar />

      <div className="w-full h-auto sm:px-5 md:px-5 px-14 flex sm:flex-col gap-14 md:flex-col sm:gap-16 md:gap-16 py-20 lg:py-24 xl:py-24 2xl:py-20 bg-gradient-to-b from-purple to-rhythm">
        <div className=" flex flex-col justify-end md:h-80% h-80%   sm:h-80% sm:rounded-2xl md:rounded-2xl rounded-none shadow-lg shadow-xiketic bg-cover bg-center bg-no-repeat w-full bg-[url('https://res.cloudinary.com/duuwcvkzg/image/upload/v1642814746/Dione/Satelites/jupiter/europa-complete_w3kalf.png')]">
          <div className="flex flex-col lg:hidden xl:hidden 2xl:hidden justify-center w-full h-12 text-base text-center transition duration-300 ease-in-out xl:rounded-none xl:h-16 2xl:h-20 2xl:rounded-none hover:bg-rhythm/40 rounded-b-2xl bg-rhythm/30 backdrop-blur-md text-lavander">
            Y más...
          </div>
        </div>
        <div className="sm:w-full md:w-full w-4/6 h-screen lg:h-80% xl:h-80% 2xl:h-80% text-lavander sm:p-6 md:p-6 p-14 sm:rounded-2xl md:rounded-2xl rounded-none flex flex-col bg-lavander/25 backdrop-blur-md ">
          <h1 className="sm:hidden md:hidden text-6xl font-Dosis ">Sol</h1>
          <h2 className="font-Dosis sm:text-xl md:text-xl sm:mb-4 md:mb-4 text-3xl sm:text-center md:text-center">
            Información General
          </h2>
          <ul className="flex flex-col sm:gap-2 md:gap-2 sm:items-center md:items-center ">
            <li>Diametro: 864562km</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>5</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Item;

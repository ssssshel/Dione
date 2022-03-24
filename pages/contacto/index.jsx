import HeadLayout from "../../components/Head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const contact = () => {
  return (
    <div>
      <HeadLayout section={"Contacto"} />
      <Navbar />
      <div className="h-screen w-screen">Contacto</div>
      <Footer />
    </div>
  );
};

export default contact;

import HeadLayout from "../../components/Head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const dione = () => {
  return (
    <div>
      <HeadLayout section={"Acerca de"} />
      <Navbar />
      <div>Dione</div>
      <Footer />
    </div>
  );
};

export default dione;

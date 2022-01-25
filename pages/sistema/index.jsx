import Footer from "../../components/Footer";
import HeadLayout from "../../components/Head";
import Navbar from "../../components/Navbar";

const General = () => {
  return (
    <div>
      <HeadLayout section="Vista General" />

      <Navbar />

      <div className="h-auto py-8 w-full bg-xiketic">
        <div>
          <h1>Vista General</h1>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default General;

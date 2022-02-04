import Form from "../components/Form";

const New = () => {
  const formData = {
    name: "",
    category: "",
    diameter: "",
    mass: "",
    volume: "",
    density: "",
    gravity: "",
    rotPeriod: "",
    orbPeriod: "",
    inclination: "",
    atmPressure: "",
    temperature: "",
    periastron: "",
    aphelion: "",
    urlImg: "",
    urlImg2: "",
  };

  return (
    <div>
      <Form formData={formData} />
    </div>
  );
};

export default New;

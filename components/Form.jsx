import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Form = ({ formData, formNewItem }) => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: formData.name,
    category: formData.category,
    diameter: formData.diameter,
    mass: formData.mass,
    volume: formData.volume,
    density: formData.density,
    gravity: formData.gravity,
    rotPeriod: formData.rotPeriod,
    orbPeriod: formData.orbPeriod,
    inclination: formData.inclination,
    atmPressure: formData.atmPressure,
    temperature: formData.temperature,
    periastron: formData.periastron,
    aphelion: formData.aphelion,
    urlImg: formData.urlImg,
    urlImg2: formData.urlImg2,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // INTERCAMBIA LA FUNCIÓN DEL FORMULARIO DEPENDIENDO DE LOS PROPS QUE CONTENGA EL COMPONENTE DONDE SE UBIQUE
  const handleSubmit = (e) => {
    e.preventDefault();
    postData(form);
  };

  const postData = async (form) => {
    try {
      console.log(form);
      const res = await fetch("/api/item", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log(data);

      if (data.success) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Registro de Objetos </h1>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="flex flex-col w-3/6"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <select
          value={form.category}
          onChange={handleChange}
          name="category"
          id=""
        >
          <option value="">Seleccione una categoría</option>
          <option value="Planetas">Planetas</option>
          <option value="Planetas Enanos">Planetas Enanos</option>
          <option value="Asteorides">Asteroides</option>
          <option value="Cometas">Cometas</option>
          <option value="Otros Objetos">Otros Bbjetos</option>
        </select>

        <label>*Llenar unicamente en caso de que se trate de un satélite</label>
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Satelite de:"
        />

        <input
          type="text"
          name="diameter"
          value={form.diameter}
          onChange={handleChange}
          placeholder="Diametro"
        />
        <input
          type="text"
          name="mass"
          value={form.mass}
          onChange={handleChange}
          placeholder="Masa"
        />
        <input
          type="text"
          name="volume"
          value={form.volume}
          onChange={handleChange}
          placeholder="Volumen"
        />
        <input
          type="text"
          name="density"
          value={form.density}
          onChange={handleChange}
          placeholder="Densidad"
        />
        <input
          type="text"
          name="gravity"
          value={form.gravity}
          onChange={handleChange}
          placeholder="Gravedad"
        />
        <input
          type="text"
          name="rotPeriod"
          value={form.rotPeriod}
          onChange={handleChange}
          placeholder="Periodo Rotacional"
        />
        <input
          type="text"
          name="orbPeriod"
          value={form.orbPeriod}
          onChange={handleChange}
          placeholder="Periodo Orbital"
        />
        <input
          type="text"
          name="inclination"
          value={form.inclination}
          onChange={handleChange}
          placeholder="Inclinación"
        />
        <input
          type="text"
          name="atmPressure"
          value={form.atmPressure}
          onChange={handleChange}
          placeholder="Presión Atmosférica"
        />
        <input
          type="text"
          name="temperature"
          value={form.temperature}
          onChange={handleChange}
          placeholder="Temperatura"
        />
        <input
          type="text"
          name="periastron"
          value={form.periastron}
          onChange={handleChange}
          placeholder="Perihelio"
        />
        <input
          type="text"
          name="aphelion"
          value={form.aphelion}
          onChange={handleChange}
          placeholder="Afelio"
        />
        <input
          type="text"
          name="urlImg"
          value={form.urlImg}
          onChange={handleChange}
          placeholder="urlImg1"
        />
        <input
          type="text"
          name="urlImg2"
          value={form.urlImg2}
          onChange={handleChange}
          placeholder="urlImg2"
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default Form;

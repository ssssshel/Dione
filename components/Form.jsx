import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

const Form = ({ formData, formNewItem, formCategory }) => {
  const router = useRouter();
  const category = formCategory;
  console.log(`category = ${category}`);

  // SE ESTABLECE COMO PARAMETRO DE useState UNA FUNCIÓN QUE DEVUELVE UN OBJETO EN FUNCIÓN AL VALOR DE LA CONSTANTE CATEGORY
  const [form, setForm] = useState(() => {
    switch (category) {
      case "Planetas":
        return {
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
        };
      case "Planetas Enanos":
        return {
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
        };
      case "Satelites":
        return {
          name: formData.name,
          category: formData.category,
          parent: formData.parent,
          diameter: formData.diameter,
          mass: formData.mass,
          volume: formData.volume,
          density: formData.density,
          gravity: formData.gravity,
          orbPeriod: formData.orbPeriod,
          orbRadius: formData.orbRadius,
          inclination: formData.inclination,
          atmPressure: formData.atmPressure,
          temperature: formData.temperature,
          urlImg: formData.urlImg,
          urlImg2: formData.urlImg2,
        };
      case "Asteroides":
        return {
          name: formData.name,
          category: formData.category,
          diameter: formData.diameter,
          mass: formData.mass,
          volume: formData.volume,
          density: formData.density,
          gravity: formData.gravity,
          rotPeriod: formData.rotPeriod,
          orbPeriod: formData.orbPeriod,
          temperature: formData.temperature,
          periastron: formData.periastron,
          aphelion: formData.aphelion,
          urlImg: formData.urlImg,
          urlImg2: formData.urlImg2,
        };
      case "Cometas":
        return {
          name: formData.name,
          category: formData.category,
          diameter: formData.diameter,
          mass: formData.mass,
          volume: formData.volume,
          density: formData.density,
          gravity: formData.gravity,
          rotPeriod: formData.rotPeriod,
          orbPeriod: formData.orbPeriod,
          temperature: formData.temperature,
          periastron: formData.periastron,
          aphelion: formData.aphelion,
          urlImg: formData.urlImg,
          urlImg2: formData.urlImg2,
        };
      case "Estrellas":
        return {
          name: formData.name,
          category: formData.category,
          diameter: formData.diameter,
          mass: formData.mass,
          volume: formData.volume,
          density: formData.density,
          gravity: formData.gravity,
          temperature: formData.temperature,
          urlImg: formData.urlImg,
          urlImg2: formData.urlImg2,
        };

      default:
        return "categoria no especificada";
    }
  });

  // ACTUALIZA LOS CAMBIOS EN EL FORMULARIO CON LA INFORMACION QUE SE INGRESA EN LOS CAMPOS
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

  // POSTDATA
  const postData = async (form) => {
    const { category } = router.query;
    try {
      console.log(form);
      const res = await fetch(`/api/data/${category}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log(data);

      if (data.success) {
        router.push("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Registro de {category} </h1>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="flex flex-col w-3/6"
      >
        <p>
          Categoría:
          <input type="text" name="category" value={form.category} />
        </p>
        {category == "Planetas" || category == "Planetas Enanos" ? (
          <div>
            <p>
              Nombre:
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </p>
            <p>
              Diámetro:
              <input
                type="text"
                name="diameter"
                value={form.diameter}
                onChange={handleChange}
              />
            </p>
            <p>
              Masa:
              <input
                type="text"
                name="mass"
                value={form.mass}
                onChange={handleChange}
              />
            </p>
            <p>
              Volumen:
              <input
                type="text"
                name="volume"
                value={form.volume}
                onChange={handleChange}
              />
            </p>
            <p>
              Densidad:
              <input
                type="text"
                name="density"
                value={form.density}
                onChange={handleChange}
              />
            </p>
            <p>
              Gravedad:
              <input
                type="text"
                name="gravity"
                value={form.gravity}
                onChange={handleChange}
              />
            </p>
            <p>
              Periodo rotacional:
              <input
                type="text"
                name="rotPeriod"
                value={form.rotPeriod}
                onChange={handleChange}
              />
            </p>
            <p>
              Periodo orbital:
              <input
                type="text"
                name="orbPeriod"
                value={form.orbPeriod}
                onChange={handleChange}
              />
            </p>
            <p>
              Inclinación:
              <input
                type="text"
                name="inclination"
                value={form.inclination}
                onChange={handleChange}
              />
            </p>
            <p>
              Presión atmosférica:
              <input
                type="text"
                name="atmPressure"
                value={form.atmPressure}
                onChange={handleChange}
              />
            </p>
            <p>
              Temperatura:
              <input
                type="text"
                name="temperature"
                value={form.temperature}
                onChange={handleChange}
              />
            </p>
            <p>
              Perihelio:
              <input
                type="text"
                name="periastron"
                value={form.periastron}
                onChange={handleChange}
              />
            </p>
            <p>
              Afelio:
              <input
                type="text"
                name="aphelion"
                value={form.aphelion}
                onChange={handleChange}
              />
            </p>
            <p>
              Img 1:
              <input
                type="text"
                name="urlImg"
                value={form.urlImg}
                onChange={handleChange}
              />
            </p>
            <p>
              Img 2:
              <input
                type="text"
                name="urlImg2"
                value={form.urlImg2}
                onChange={handleChange}
              />
            </p>
          </div>
        ) : category == "Satelites" ? (
          <div>
            <p>
              Nombre:
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </p>
            <p>
              Parent:
              <input
                type="text"
                name="parent"
                value={form.parent}
                onChange={handleChange}
              />
            </p>
            <p>
              Diámetro:
              <input
                type="text"
                name="diameter"
                value={form.diameter}
                onChange={handleChange}
              />
            </p>
            <p>
              Masa:
              <input
                type="text"
                name="mass"
                value={form.mass}
                onChange={handleChange}
              />
            </p>
            <p>
              Volumen:
              <input
                type="text"
                name="volume"
                value={form.volume}
                onChange={handleChange}
              />
            </p>
            <p>
              Densidad:
              <input
                type="text"
                name="density"
                value={form.density}
                onChange={handleChange}
              />
            </p>
            <p>
              Gravedad:
              <input
                type="text"
                name="gravity"
                value={form.gravity}
                onChange={handleChange}
              />
            </p>
            <p>
              Periodo orbital:
              <input
                type="text"
                name="orbPeriod"
                value={form.orbPeriod}
                onChange={handleChange}
              />
            </p>
            <p>
              Radio orbital:
              <input
                type="text"
                name="orbRadius"
                value={form.orbRadius}
                onChange={handleChange}
              />
            </p>
            <p>
              Inclinación:
              <input
                type="text"
                name="inclination"
                value={form.inclination}
                onChange={handleChange}
              />
            </p>
            <p>
              Presión atmosférica:
              <input
                type="text"
                name="atmPressure"
                value={form.atmPressure}
                onChange={handleChange}
              />
            </p>
            <p>
              Temperatura:
              <input
                type="text"
                name="temperature"
                value={form.temperature}
                onChange={handleChange}
              />
            </p>

            <p>
              Img 1:
              <input
                type="text"
                name="urlImg"
                value={form.urlImg}
                onChange={handleChange}
              />
            </p>
            <p>
              Img 2:
              <input
                type="text"
                name="urlImg2"
                value={form.urlImg2}
                onChange={handleChange}
              />
            </p>
          </div>
        ) : category == "Asteroides" || category == "Cometas" ? (
          <div>
            <p>
              Nombre:
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </p>
            <p>
              Diámetro:
              <input
                type="text"
                name="diameter"
                value={form.diameter}
                onChange={handleChange}
              />
            </p>
            <p>
              Masa:
              <input
                type="text"
                name="mass"
                value={form.mass}
                onChange={handleChange}
              />
            </p>
            <p>
              Volumen:
              <input
                type="text"
                name="volume"
                value={form.volume}
                onChange={handleChange}
              />
            </p>
            <p>
              Densidad:
              <input
                type="text"
                name="density"
                value={form.density}
                onChange={handleChange}
              />
            </p>
            <p>
              Gravedad:
              <input
                type="text"
                name="gravity"
                value={form.gravity}
                onChange={handleChange}
              />
            </p>
            <p>
              Periodo rotacional:
              <input
                type="text"
                name="rotPeriod"
                value={form.rotPeriod}
                onChange={handleChange}
              />
            </p>
            <p>
              Periodo orbital:
              <input
                type="text"
                name="orbPeriod"
                value={form.orbPeriod}
                onChange={handleChange}
              />
            </p>
            <p>
              Temperatura:
              <input
                type="text"
                name="temperature"
                value={form.temperature}
                onChange={handleChange}
              />
            </p>
            <p>
              Perihelio:
              <input
                type="text"
                name="periastron"
                value={form.periastron}
                onChange={handleChange}
              />
            </p>
            <p>
              Afelio:
              <input
                type="text"
                name="aphelion"
                value={form.aphelion}
                onChange={handleChange}
              />
            </p>
            <p>
              Img 1:
              <input
                type="text"
                name="urlImg"
                value={form.urlImg}
                onChange={handleChange}
              />
            </p>
            <p>
              Img 2:
              <input
                type="text"
                name="urlImg2"
                value={form.urlImg2}
                onChange={handleChange}
              />
            </p>
          </div>
        ) : category == "Estrellas" ? (
          <div>
            <p>
              Nombre:
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </p>
            <p>
              Diámetro:
              <input
                type="text"
                name="diameter"
                value={form.diameter}
                onChange={handleChange}
              />
            </p>
            <p>
              Masa:
              <input
                type="text"
                name="mass"
                value={form.mass}
                onChange={handleChange}
              />
            </p>
            <p>
              Volumen:
              <input
                type="text"
                name="volume"
                value={form.volume}
                onChange={handleChange}
              />
            </p>
            <p>
              Densidad:
              <input
                type="text"
                name="density"
                value={form.density}
                onChange={handleChange}
              />
            </p>
            <p>
              Gravedad:
              <input
                type="text"
                name="gravity"
                value={form.gravity}
                onChange={handleChange}
              />
            </p>
            <p>
              Temperatura:
              <input
                type="text"
                name="temperature"
                value={form.temperature}
                onChange={handleChange}
              />
            </p>
            <p>
              Img 1:
              <input
                type="text"
                name="urlImg"
                value={form.urlImg}
                onChange={handleChange}
              />
            </p>
            <p>
              Img 2:
              <input
                type="text"
                name="urlImg2"
                value={form.urlImg2}
                onChange={handleChange}
              />
            </p>
          </div>
        ) : (
          <div>Categoria no especificada</div>
        )}

        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default Form;

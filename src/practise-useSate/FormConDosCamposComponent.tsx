import { useState } from "react";

function FormConDosCamposComponent() {
  const [persona, setPersona] = useState({
    nombre: "Carolina",
    apellido: "Corazza",
  });
  const [mostrar, setMostrar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersona({
      ...persona,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (persona.nombre.trim() === "" || persona.apellido.trim() === "") {
      alert("Por favor, complete ambos campos.");
      return;
    }
    setMostrar(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            value={persona.nombre}
            name="nombre"
            className="form-control"
            placeholder="Ingrese su nombre"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Apellido</label>
          <input
            type="text"
            name="apelido"
            value={persona.apellido}
            className="form-control"
            placeholder="Ingrese su apellido"
            onChange={handleChange}
          ></input>
        </div>
        <button className="btn btn-primary">Guardar</button>
      </form>
      <div>
        {mostrar && (
          <h1>
            Hola {persona.nombre} {persona.apellido}!
          </h1>
        )}
      </div>
    </div>
  );
}

export default FormConDosCamposComponent;

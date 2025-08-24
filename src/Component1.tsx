function Component1() {
  const usuario = { name: "Cristian", apellido: "Corazza" };
  return (
    <div>
      <h1>
        Hola {usuario.name} {usuario.apellido}
      </h1>
    </div>
  );
}

export default Component1;

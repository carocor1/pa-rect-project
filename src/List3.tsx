// Lista renderizada utilizando map y un array compuesto de objetos.
function List3() {
  const marcas = [
    { denominacion: "Kosiuko" },
    { denominacion: "Adidas" },
    { denominacion: "Nike" },
    { denominacion: "Puma" },
    { denominacion: "Reebok" },
  ];
  return (
    <>
      <h3>Lista de marcas</h3>
      <ul>
        {marcas.map((marca, index) => (
          <li key={index}>{marca.denominacion}</li>
        ))}
      </ul>
    </>
  );
}

export default List3;

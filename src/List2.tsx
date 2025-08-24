//Lista renderizada utilizando map y un array compuesto de strings.
function List2() {
  const marcas = ["Kosiuko", "Adidas", "Nike", "Puma", "Reebok"];
  return (
    <div>
      <h3>Lista de marcas</h3>
      <ul>
        {marcas.map((marca, index) => (
          <li key={index}>{marca}</li>
        ))}
      </ul>
    </div>
  );
}

export default List2;

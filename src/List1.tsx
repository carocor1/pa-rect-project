//Lista renderizada sin utilizar map, con un array simple.
function List1() {
  const marcas = ["Kosiuko", "Adidas", "Nike", "Puma", "Reebok"];
  return (
    <div>
      <h3>Lista de marcas</h3>
      <ul>
        <li>{marcas[0]}</li>
        <li>{marcas[1]}</li>
        <li>{marcas[2]}</li>
        <li>{marcas[3]}</li>
        <li>{marcas[4]}</li>
      </ul>
    </div>
  );
}

export default List1;

interface Props {
  marca: {
    denominacion: string;
  };
}
function Component4({ marca }: Props) {
  return (
    <div>
      <h2>Component 4</h2>
      <h3>Marca: {marca.denominacion}</h3>
    </div>
  );
}

export default Component4;

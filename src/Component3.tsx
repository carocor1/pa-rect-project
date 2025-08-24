interface Props {
  name: string;
  lastName: string;
}
function Component3({ name, lastName }: Props) {
  return (
    <div>
      <h3>Nombre: {name}</h3>
      <h3>Apellido: {lastName}</h3>
    </div>
  );
}

export default Component3;

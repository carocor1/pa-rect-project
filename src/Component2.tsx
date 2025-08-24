// componente con props sin tipo.
function Component2(props) {
  return (
    <div>
      <h2>Component 2</h2>
      <h3>
        Hola, {props.name} {props.lastName} with props!
      </h3>
    </div>
  );
}

export default Component2;

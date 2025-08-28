import { useEffect } from "react";

//mostrar un componente en consola cada vez que se renderiza por primera vez.
//El hola se ejecuta dos veces por el modo estricto de React 18.
function HolaUEComponent() {
  useEffect(() => {
    console.log("Hola!!");
  }, []);

  return (
    <div>
      <h1>Probando use effect...</h1>
    </div>
  );
}

export default HolaUEComponent;

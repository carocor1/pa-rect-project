import { useState } from "react";
import "./App.css";
import Component1 from "./Component1";
import List1 from "./List1";
import List2 from "./List2";
import List3 from "./List3";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";

function App() {
  const [count, setCount] = useState(0);
  const marca = {
    denominacion: "Adidas",
  };

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Component1 />
      <Component2 name="Carolina" lastName="Corazza" />
      <Component3 name="Carolina" lastName="Corazza" />
      <Component4 marca={marca} />
      <List1 />
      <List2 />
      <List3 />
    </>
  );
}

export default App;

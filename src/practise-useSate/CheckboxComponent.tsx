import { useState } from "react";

function CheckboxComponent() {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck1"
        checked={checked}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor="defaultCheck1">
        Términos y condiciones
      </label>
      {checked && <button className="btn btn-primary">Guardar</button>}
    </div>
  );
}

export default CheckboxComponent;

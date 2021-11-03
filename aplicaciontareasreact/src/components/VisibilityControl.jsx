import React from "react";

function VisibilityControl({ isChecked, setIsChecked }) {
  return (
    <div className="form-check d-flex justify-content-center">
      <input
        type="checkbox"
        className="form-check-input mx-2"
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}
      />
      <label htmlFor="form-check-label"> Mostrar Tareas Hechas</label>
    </div>
  );
}

export default VisibilityControl;

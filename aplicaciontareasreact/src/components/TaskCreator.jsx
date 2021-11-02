import React, { useState } from "react";

function TaskCreator({ setTaskItems, taskItems, agregarTarea }) {
  const [texto, setTexto] = useState("");
  const agregarTareaNueva = () => {
    //setTaskItems([...taskItems, texto]);
    agregarTarea(texto);
    setTexto("");
    //console.log("funciona");
  };
  return (
    <div className="input-group mb-3 container-fluid mt-3">
      <input
        type="text"
        className="form-control"
        placeholder="Anota tarea por hacer"
        aria-label="Anota tarea por hacer"
        aria-describedby="button-addon2"
        value={texto}
        onChange={(e) => {
          setTexto(e.target.value);
        }}
      ></input>
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={() => {
          agregarTareaNueva();
        }}
      >
        AgregarTarea
      </button>
    </div>
  );
}

export default TaskCreator;

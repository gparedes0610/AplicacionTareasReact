import React from "react";

function TaskBanner({ taskItems }) {
  return (
    <div className="container-fluid bg-primary py-4">
      <h2 className="text-center text-light fw-bolder">
        Aplicacion de Tareas (hay {""}
        {taskItems.filter((t) => !t.done).length} tareas pendientes)
      </h2>
    </div>
  );
}

export default TaskBanner;

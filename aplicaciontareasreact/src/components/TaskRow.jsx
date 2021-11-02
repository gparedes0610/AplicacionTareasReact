import React from "react";

function TaskRow({ taskItems, toggleTask }) {
  return (
    <div className="container-fluid">
      <table className="table table-success table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Tareas</th>
            <th scope="col">Terminado</th>
          </tr>
        </thead>
        <tbody>
          {taskItems.map((task, index) => (
            <tr key={index}>
              <td>{task.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskRow;

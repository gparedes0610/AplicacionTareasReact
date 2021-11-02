import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskBanner from "./components/TaskBanner";
import TaskRow from "./components/TaskRow";
import TaskCreator from "./components/TaskCreator";
import VisibilityControl from "./components/VisibilityControl";

function App() {
  //USESTATES
  const [taskItems, setTaskItems] = useState([
    { name: "task one", done: false },
    { name: "task two", done: false },
    { name: "task three", done: true },
    { name: "task four", done: false },
  ]);
  const [isChecked, setIsChecked] = useState(true);
  /* PARA AGREGAR UNA TAREA NUEVA , SE HACE DESDE EL PADRE */
  const agregarTarea = (tarea) => {
    if (!taskItems.find((t) => t.name === tarea)) {
      setTaskItems([...taskItems, { name: tarea, done: false }]);
    }
  };
  /*  PARA ACTIVAR O DESACTIVAS EL CHECKBOX */
  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <>
      <TaskBanner taskItems={taskItems} />
      <TaskCreator
        setTaskItems={setTaskItems}
        taskItems={taskItems}
        agregarTarea={agregarTarea}
      />
      <TaskRow taskItems={taskItems} toggleTask={toggleTask} />
      <VisibilityControl
        isChecked={isChecked}
        funcionEjm={(checked) => setIsChecked(checked)}
      />
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskBanner from "./components/TaskBanner";
import TaskRow from "./components/TaskRow";
import TaskCreator from "./components/TaskCreator";
import VisibilityControl from "./components/VisibilityControl";
import TaskRowDone from "./components/TaskRowDone";

function App() {
  //USESTATES
  const [taskItems, setTaskItems] = useState([
    { name: "task one", done: false },
    { name: "task two", done: false },
    { name: "task three", done: true },
    { name: "task four", done: false },
  ]);
  const [isChecked, setIsChecked] = useState(true);
  //APLICANDO LOCALSTORAGE, ES CON USEEFFECT
  useEffect(() => {
    let data = localStorage.getItem("taks");
    if (data != null) {
      setTaskItems(JSON.parse(data)); //metemos data pero lo tenemos que convertir a parse
    } else {
      setTaskItems([
        { name: "task one ejemplo", done: false },
        { name: "task two ejemplo", done: false },
        { name: "task three ejemplo", done: true },
        { name: "task four ejemplo", done: false },
      ]);
      setIsChecked(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("taks", JSON.stringify(taskItems)); // es un arreglo pero solo se guardan string asi q usamos json stringify
  }, [taskItems]);

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

      <VisibilityControl isChecked={isChecked} setIsChecked={setIsChecked} />

      {isChecked ? (
        <TaskRowDone taskItems={taskItems} toggleTask={toggleTask} />
      ) : (
        <p></p>
      )}
    </>
  );
}

export default App;

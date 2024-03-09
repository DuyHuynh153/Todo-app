import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import Stats from "./components/Stats";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const taskExist = toDoList.find((task) => task.taskName === taskName);

    if (taskExist) return;
    const newTask = { taskName, cheked: false };
    setToDoList([...toDoList, newTask]);
  };
  const deleteTask = (deleteTaskName) => {
    setToDoList(toDoList.filter((task) => task.taskName !== deleteTaskName));
  };

  const toggleCheck = (taskName) => {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  };

  // console.log(toDoList);
  return (
    <>
      <div className="container">
        <h1>Task Master</h1>
        <TaskInput addTask={addTask}></TaskInput>
        <div className="toDoList">
          <span>To do</span>
          <ul className="list-items">
            {toDoList.map((task, key) => (
              <TaskItem
                task={task}
                key={key}
                deleteTask={deleteTask}
                toggleCheck={toggleCheck}
              ></TaskItem>
            ))}
          </ul>

          {toDoList.length === 0 ? (
            <p className="notify">You are done !</p>
          ) : null}
        </div>
      </div>
      <Stats toDoList={toDoList}></Stats>
    </>
  );
}

export default App;

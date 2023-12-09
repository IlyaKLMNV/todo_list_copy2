import { useState } from "react";
import Item from "./Item";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const hundleInputchange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteItem = (index) => {
    const tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);

  }

  return (
    <div>
      <h1>todo_list</h1>
      <div>
        <input 
          type="text" 
          value={newTask}
          placeholder="enter what to do"
          onChange={hundleInputchange}
          />
      </div>
      <div>
        <button onClick={addTask}>+</button>
        {tasks.map((task, index) => (
          <Item key={index} text={task} deleteItem={() => deleteItem(index)}/>
        ))}
      </div>

    </div>
  );
}
 
export default Home;
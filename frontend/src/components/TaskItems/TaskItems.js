
import React, { useState } from "react";
import "./TaskItems.css";
const TaskItems = ({ tasks, setTasks }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const [showAll,setShowAll] = useState(false);

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };
  const handleEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setEdit({ ...taskToEdit, isEditing: true });
  };
  
  const handleUpdate = (e) => {
    e.preventDefault();
    setTasks(
      tasks.map((task) => {
        if (task.id === edit.id) {
          return { ...task, name: edit.name, description: edit.description, isEditing: false };
        }
        return task;
      })
    );
    setEdit({ id: null, value: "" }); // Reset the edit state after updating
  };

  const handleChange = (e) => {
    setEdit({ ...edit, value: e.target.value });
  };


  if (edit.isEditing) {
    return (
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Update task"
          value={edit.value}
          onChange={handleChange}
        />
        <button>Update</button>
      </form>
    );
  }
  const tasksToDisplay = showAll ? tasks : tasks.slice(0, 2);

 return (
    <>


      {tasksToDisplay.map((task) => (
        <div className="task-items row" key={task.id}>
          <div className="task-text col">
            <h1>{task.name}</h1>
            <h2>{task.description}</h2>
          </div>
          <div className="col">
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <button onClick={() => handleEdit(task.id)}>Edit</button>
          </div>
        </div>
      ))}
            <button className="show-all-btn" onClick={handleToggleShowAll}>
        {showAll ? "Show less" : "Show all"}
      </button>
    </>
 )
}

export default TaskItems;
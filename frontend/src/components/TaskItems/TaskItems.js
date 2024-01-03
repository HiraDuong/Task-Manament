import React, { useState } from "react";
import "./TaskItems.css";
import '../../styles/global.css';
import moment from "moment"; // Import thư viện moment

const TaskItems = ({ tasks, setTasks }) => {
  const [edit, setEdit] = useState({
    id: null,
    name: "",
    description: "",
    isEditing: false,
  });

  const [showAll, setShowAll] = useState(false);

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
          return { ...task, task_name: edit.name, description: edit.description, isEditing: false };
        }
        return task;
      })
    );
    setEdit({ id: null, name: "", description: "", isEditing: false }); // Reset the edit state after updating
  };

  const handleChange = (e) => {
    setEdit({ ...edit, name: e.target.value });
  };

  if (edit.isEditing) {
    return (
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Update task"
          value={edit.name}
          onChange={handleChange}
        />
        <button>Update</button>
      </form>
    );
  }

  const tasksToDisplay = showAll ? tasks : tasks.slice(0, 3);

  return (
    <>
      {tasksToDisplay.map((task) => (
        <div className="task-items row" key={task.task_id}>
          <div className="task-text col">
            <div className="row">
              <h3>{task.task_name}</h3>
              <p>Priority: {task.priority}</p>
            </div>
            <div className="row">
              <p>{task.description}</p>
            </div>
            <div className="row">
              {/* Sử dụng moment để định dạng thời gian */}
              <p>Due: {moment(task.due_time, 'HH:mm:ss').format('hh:mm:ss A')} 
              {" "}<span>on</span>{" "}
              {moment(task.due_date).format('DD/MM/YYYY')}</p>
              <p>Remind me before: {task.remind_time} mins</p>
            </div>
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
  );
}

export default TaskItems;

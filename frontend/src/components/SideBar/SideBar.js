// SideBar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import "./SideBar.css";
import { IconContext } from "react-icons";
import { IoMdAdd, IoIosClose } from "react-icons/io";
import MultiSelect from "../MultiSelect/MultiSelect";

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const [labels, setLabels] = useState([]); // ["study", "work"
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    priority: "low",
    dueDate: "",
    dueTime: "",
    labels: labels,
    remindTime: "",
    remindUnit: "minutes",
  });

  const handleChange = (e) => {
    if (e.target && e.target.name) {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    }
  };
  useEffect(() => {
    // Gọi handleChange khi labels thay đổi
    handleChange({
      target: { name: "labels", value: labels },
    });
  }, [labels]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    setShowForm(false);
  };

  const [avtPopup, setAvtPopup] = useState(false);
  const handleAvtPopup = () => {
    setAvtPopup(!avtPopup);
  };

  return (
    <div className="com-side-bar">
      <div className="user-avatar-button" onClick={handleAvtPopup}>
        <img
          src="\images\default_avt.jpg"
          alt="user-avatar"
          className="user-avatar"
        />
        {avtPopup && (
          <div className="user-popup">
            <Link>Change Avatar</Link>
            <Link>Log out</Link>
          </div>
        )}
        <div>UserName</div>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <button className="add-task-btn" onClick={handleShowForm}>
          <IoMdAdd />
          Add task
        </button>
      </div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={"nav-menu active"}>
          <ul className="nav-menu-items">
            {SideBarData.map((item, index) => {
              return (
                <Link  className={
                  item.cName + (activeIndex === index ? " active" : "")
                }
                to={item.path}>
                  <li
                    key={index}
                   
                    onClick={() => handleClick(index)}
                  >
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>

      {showForm && (
        <div className="task-form">
          <h2>Add Task</h2>
          <IoIosClose
            size={40}
            className="close-btn"
            onClick={() => setShowForm(false)}
          />
          <form onSubmit={handleSubmit}>
            <label>
              Task Name:
              <input type="text" name="name" onChange={handleChange} />
            </label>
            <label>
              Description:
              <textarea name="description" onChange={handleChange} />
            </label>
            <div className="row">
              <label>
                Priority:
                <select name="priority" onChange={handleChange}>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </label>
              <label>
                Remind me before:
                <input
                  style={{ width: "50px" }}
                  type="number"
                  name="remindTime"
                  min="1"
                  onChange={handleChange}
                />
                <select name="remindUnit" onChange={handleChange}>
                  <option value="minutes">mins</option>
                  <option value="hours">hours</option>
                  <option value="days">days</option>
                </select>
              </label>
            </div>
            <div className="row">
              <label>
                Due Date:
                <input type="date" name="dueDate" onChange={handleChange} />
              </label>
              <label>
                Due Time:
                <input type="time" name="dueTime" onChange={handleChange} />
              </label>
            </div>
            <label>
              Label:
              <MultiSelect setLabels={setLabels} />
            </label>
            <input className="submit-btn" type="submit" value="Submit" />
          </form>
        </div>
      )}
    </div>
  );
};

export default SideBar;

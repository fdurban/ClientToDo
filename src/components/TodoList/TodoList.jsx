<<<<<<< HEAD
import React from 'react'
import todoService from '../../services/todo.services'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import '../TodoList/TodoList.css'
=======
import React from "react";
import todoService from "../../services/todo.services";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete, AiOutlineCheckSquare } from "react-icons/ai";
import "../TodoList/TodoList.css";
>>>>>>> d975492f23476c3a2bea876fba1eec23f6df6feb

const ToDoList = ({ title, done, updateMode, deleteToDo, toggleDone }) => {
  const titleClassName = done ? "done-title" : "undone-title";

  return (
    <div className="todo-list">
      <div className="text">
        <p className={titleClassName}>{title}</p>
      </div>
      <div classNames="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
        <AiOutlineCheckSquare
          className="icon"
          onClick={toggleDone}
          style={{ color: done ? "grey" : "black" }}
        />
      </div>
    </div>
  );
};

export default ToDoList;

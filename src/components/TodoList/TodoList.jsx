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
import { AiFillDelete } from "react-icons/ai";
import "../TodoList/TodoList.css";
>>>>>>> d975492f23476c3a2bea876fba1eec23f6df6feb

const ToDoList = ({ title, updateMode, deleteToDo }) => {
  return (
    <div className="todo-list">
      <div className="text">
        <p>{title}</p>
      </div>
      <div classNames="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDoList;

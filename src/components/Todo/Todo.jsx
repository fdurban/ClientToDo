import "./../Todo/Todo.css";
import { useEffect, useState, useContext } from "react";
import todoService from "../../services/todo.services";
import { AuthContext } from "../../context/auth.context";

const Todo = () => {
  const { user_id: creator } = useContext(AuthContext);

  const [toDo, setToDo] = useState([]);
  const [name, setName] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  const updateMode = (_id, name) => {
    setIsUpdating(true);
    setName(name);
    setToDoId(_id);
  };

  useEffect(() => {
    todoService.getTodosByCreator(creator);
  }, []);

  //   todoService.createTodo();

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <textarea
            className="input"
            type="text"
            placeholder="App Todos..."
            onChange={(e) => setName(e.target.value)}
          />

          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? "Update" : "Add"}Add
          </div>
        </div>
        <div className="list"></div>
      </div>
    </div>
  );
};

export default Todo;

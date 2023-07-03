import "./../Todo/Todo.css";
import { useEffect, useState, useContext } from "react";
import todoService from "../../services/todo.services";
import { AuthContext } from "../../context/auth.context";
import ToDoList from "../../components/TodoList/TodoList";

const Todo = ({ userData: user }) => {
  // const { { user } } = useContext(AuthContext)

  const [toDo, setToDo] = useState([]);
  const [title, setTitle] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  const getAllTodo = () => {
    todoService
      .getTodosByCreator(user._id)
      .then(({ data }) => setToDo(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllTodo();
  }, []);

  const updateTodO = () => {
    todoService
      .editTodoById(toDoId, title)
      .then(() => {
        setTitle("");
        setIsUpdating(false);
        getAllTodo(setToDo);
      })
      .catch((err) => console.log(err));
  };

  const updateMode = (_id, title) => {
    setIsUpdating(true);
    setTitle(title);
    setToDoId(_id);
  };

  const create = () => {
    todoService
      .createTodo(title)
      .then(() => {
        getAllTodo();
        setTitle("");
      })
      .catch((err) => console.log(err));
  };

  const deleteToDo = (_id) => {
    todoService
      .deleteTodoById(_id)
      .then(() => {
        getAllTodo();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <textarea
            className="input"
            type="text"
            placeholder={isUpdating ? { title } : "App Todos..."}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div
            className="add"
            onClick={
              isUpdating ? () => updateTodO(toDoId, title) : () => create()
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDoList
              key={item._id}
              title={item.title}
              updateMode={() => updateMode(item._id, item.title)}
              deleteToDo={() => deleteToDo(item._id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;

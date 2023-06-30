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

  const updateTodO = (id) => {
    todoService
      .editTodoById(id)
      .then((data) => {
        setTitle("");
        setIsUpdating(false);
        updateMode(setToDo);
      })
      .catch((err) => console.log(err));
  };

  const updateMode = (_id, title) => {
    setIsUpdating(true);
    setTitle(title);
    setToDoId(_id);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <textarea
            className="input"
            type="text"
            placeholder="App Todos..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div
            className="add"
            onClick={
              isUpdating // llamar a updatetodo o meter el then debajo de esta misma función
                ? () =>
                    todoService.editTodoById(
                      toDoId,
                      title,
                      setToDo,
                      setTitle,
                      setIsUpdating
                    )
                : () => {
                    todoService.createTodo(title, setTitle, setToDo);
                    getAllTodo();
                  }
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
              updateMode={() => todoService.editTodoById(item._id, item.title)}
              deleteToDo={() => {
                todoService.deleteTodoById(item._id, setToDo);
                getAllTodo();
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;

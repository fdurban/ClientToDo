import "./../Todo/Todo.css"
import { useEffect, useState, useContext } from "react"
import todoService from "../../services/todo.services"
import { AuthContext } from "../../context/auth.context"
import ToDoList from "../../components/TodoList/TodoList"

const Todo = ({ userData: user }) => {
  // const { { user } } = useContext(AuthContext)

  const [toDo, setToDo] = useState([])
  const [title, setTitle] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")
  const [done, setDone] = useState(false)

  const getAllTodo = () => {
    todoService
      .getTodosByCreator(user._id)
      .then(({ data }) => setToDo(data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getAllTodo()
  }, [])

  const updateTodO = () => {
    todoService
      .editTodoById(toDoId, title, done)
      .then(() => {
        setTitle("")
        setIsUpdating(false)
        setDone(false) // Reset done state after updating
        getAllTodo()
      })
      .catch((err) => console.log(err))
  }

  const updateMode = (_id, title, done) => {
    setIsUpdating(true)
    setTitle(title)
    setToDoId(_id)
    setDone(done) // Set the current value of done for the selected item
  }

  const create = () => {
    todoService
      .createTodo(title)
      .then(() => {
        getAllTodo()
        setTitle("")
      })
      .catch((err) => console.log(err))
  }

  const deleteToDo = (_id) => {
    todoService
      .deleteTodoById(_id)
      .then(() => {
        getAllTodo()
      })
      .catch((err) => console.log(err))
  }

  const toggleDone = (_id, done) => {
    const updatedToDo = [...toDo]
    const itemIndex = updatedToDo.findIndex((item) => item._id === _id)
    updatedToDo[itemIndex].done = !done

    setToDo(updatedToDo)
    todoService
      .editTodoById(
        _id,
        updatedToDo[itemIndex].title,
        updatedToDo[itemIndex].done
      )
      .catch((err) => console.log(err))
  }

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
              done={item.done}
              updateMode={() => updateMode(item._id, item.title, item.done)}
              deleteToDo={() => deleteToDo(item._id)}
              toggleDone={() => toggleDone(item._id, item.done)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Todo
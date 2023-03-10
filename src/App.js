import Title from './Components/Title/Title';
import TodoInput from './Components/TodoInput/TodoInput';
import TodoList from './Components/TodoList/TodoList';
import Filters from './Components/Filters/Filters'
import config from "./config";
import { useEffect, useState } from 'react';
import './App.sass'

const App = () => {

  const [todos, setTodos] = useState([])
  const [activeFilter, setActiveFilter] = useState(config.all)
  const [filteredTodos, setFilteredTodos] = useState(todos)

  //------------ ADD NEW TODO ---------------//

  const addNewTodo = (title) => {

    const newTodo = {
      id: todos.length >= 0 ? todos.length : 1,
      title,
      completed: false
    }

    setTodos([...todos, newTodo])
    console.log(todos)
  }


  //------------- MAKE LOCAL STORAGE THE INITIAL ARRAY ---------------//

  useEffect(() => {
    let localTodos = localStorage.getItem("todosLocal")
    if (localTodos) {
      let localTodosParsed = JSON.parse(localTodos)

      setTodos(localTodosParsed)
    }
  }, [])


  //------------- ADD TASK TO LOCAL STORAGE ---------------//
  useEffect(() => {

    localStorage.setItem("todosLocal", JSON.stringify(todos))
    console.log(`local storage update: ${JSON.stringify(todos)}`);

  }, [addNewTodo])



  //------------ SET COMPLETED TASKS --------- //

  const handleSetComplete = (_id) => {
    let listUpdate = todos.map(todo => {
      if (todo.id === _id) {
        return { ...todo, completed: !todo.completed }
      }

      return todo
    })

    setTodos(listUpdate)


  }

  //------------ DELETE TO DO ----------//

  const handleDelete = (_id) => {
    let listUpdate = todos.filter(todo => todo.id !== _id)
    setTodos(listUpdate)
  }

  const clearCompleted = () => {
    let listUpdate = todos.filter(todo => !todo.completed)
    setTodos(listUpdate)
  }






  //------------- FILTERS FUNCTIONS -----------//

  useEffect(() => {
    if (activeFilter === config.all) {
      setFilteredTodos(todos)
    } else if (activeFilter === config.active) {
      let activeTodos = todos.filter(todo => todo.completed === false)
      setFilteredTodos(activeTodos)
    } else if (activeFilter === config.completed) {
      let completedTodos = todos.filter(todo => todo.completed === true)
      setFilteredTodos(completedTodos)
    }

  }, [activeFilter, todos])



  useEffect(() => {
    document.title = "TodoList Sprint6 Jared"
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <TodoInput addNewTodo={addNewTodo} />
      </header>
      <section>
        <TodoList
          todos={filteredTodos}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
        />
        <Filters
          items={todos.length}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          clearCompleted={clearCompleted}
        />
      </section>
    </div>
  );
}

export default App;

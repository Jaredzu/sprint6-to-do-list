import Title from './Components/Title/Title';
import TodoInput from './Components/TodoInput/TodoInput';
import TodoList from './Components/TodoList/TodoList';
import Task from './Components/Task/Task.jsx';
import { useEffect, useState } from 'react';
import './App.sass'

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '1 Todo Example number 1',
      completed: false
    },
    {
      id: 2,
      title: '2 Todo Example number 2',
      completed: false
    },
    {
      id: 3,
      title: '3 Todo Example number 3',
      completed: false
    },
    {
      id: 4,
      title: '4 Todo Example number 3',
      completed: false
    }

  ])

  //------------ ADD NEW TODO ---------------//

  const addNewTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    }

    const todoList = [...todos]

    todoList.push(newTodo)
    setTodos(todoList)
  }


  useEffect(() => {
    document.title = "TodoList Sprint6 Jared"
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <TodoInput addNewTodo={addNewTodo} />
        <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;

import Title from './Components/Title/Title';
import TodoInput from './Components/TodoInput/TodoInput';
import TodoList from './Components/TodoList/TodoList';
import Task from './Components/Task/Task.jsx';
import { useEffect } from 'react';
import './App.sass'

const App = () => {

  useEffect(() => {
    document.title = "TodoList Sprint6 Jared"
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <TodoInput />
        <TodoList>
          <Task />
          <Task />
          <Task />
        </TodoList>
      </header>
    </div>
  );
}

export default App;

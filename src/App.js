import { useEffect, useState, } from 'react';
import './App.scss';
import TodoHeader from './components/TodoHeader/TodoHeader'
import TodoMain from './components/TodoMain/TodoMain'
import TodoFooter from './components/TodoFooter/TodoFooter';

function App() {

  const[todoText, setTodoText]=useState('')
  const[todoArray, setTodoArray]=useState(() => {
    const localData = localStorage.getItem("todo")
    return localData?JSON.parse(localData):[]
  })

  const[status, setStatus]=useState('all')

  useEffect(()=>{
    localStorage.setItem("todo", JSON.stringify(todoArray))
  },[todoArray])


  return (
     <div className="App">
      <TodoHeader todoText={todoText} setTodoText={setTodoText} setTodoArray={setTodoArray} todoArray={todoArray}/>
      <TodoMain setTodoArray={setTodoArray} todoArray={todoArray} setStatus={setStatus} status={status}/>
      <TodoFooter setTodoArray={setTodoArray} todoArray={todoArray} setStatus={setStatus} status={status}/>
     </div>
  );
}

export default App;

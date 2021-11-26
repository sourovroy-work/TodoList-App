import './App.css';
import Header from './MyComponents/Header'
import { Todos } from './MyComponents/Todos'
import { Footer } from './MyComponents/Footer'
import React, {useState} from 'react'
import {AddTodo} from './MyComponents/AddTodo'

function App() {

  let onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e!=todo;
    }))
  }

  let addTodo = (title, desc) => {
    let sno = todos.length? todos[todos.length-1].sno + 1: 1;
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, newTodo]);
  }

 const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Read On The Height Of Despair",
      desc: "Aphorism by Emil Cioral"
    },
    {
      sno: 2,
      title: "Read Beyond Good And Evil",
      desc: "Book by F. Nietzshe"
    },
    {
      sno: 3,
      title: "Read Myth Of Sisyphus",
      desc: "Essay by Albert Camus"
    }
  ])

  return (
    <>
      <Header title="My Todos List" searchBar={true} />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;

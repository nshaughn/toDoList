import React, { useState } from "react"; //use effect is for filter handler 
import './App.css';
//importing components
import Form from './components/Form'
import TodoList from "./components/TodoList";
/* every piece of state you have reacts automatically to update and render it and you can use it anywhere in your code 
You can only pass states and props downwards */

const App = () => {

  //state info
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]); /* an array of objects will go into this useState [] */

//functions and events
  return (
    /* cannot use class, need className as JS keyword called class */
    <div className="App"> 
      <header>
        <h1>Todo List</h1>
      </header>
      <Form setInputText={ setInputText } todos={ todos } setTodos={ setTodos } inputText={ inputText } />
      <TodoList setTodos={setTodos} todos={todos} />

    </div>
  );
}

export default App;

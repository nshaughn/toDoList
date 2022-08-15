/* importing react from the node modules */
import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
/* this sets out the input text event. .target gets the input and .value returns the value from it to update the state */
const submitTodoHandler = (e) => {
    e.preventDefault(); 
    setTodos([
        ...todos, {text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
setInputText('');
};    
/* .preventDefault() stops the page refreshing, ... spread operator will expand all the todos in the array into a list. The {} will add a new todo object when updating the state */
/* in an actual app I wouldn't use math random you would use a proper unique code */
/* setInputText=("") sets the state back to zero */


    return (
    /* using a form tag for user input 
    input onChange - everytime the input changes, the function above runs */ 
    <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          +
        </button>
      </form>
    );
};

export default Form;
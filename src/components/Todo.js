import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
    //events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
/* .filter goes through all your todos, and then we compare the element that is clicked on to match the one from the state and if it does it is removed  */

const completeHandler = () => {
    setTodos(todos.map((el) => {
      if(el.id === todo.id) {
        return {
            ...el, completed: !el.completed
        };
      } 
      return el; 
    }) 
    );
};
/* here we're comparing the id's of what is being clicked on to see if they have the same id as the one from state, to change this specific states property */

    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li> {/* here if todo completed is true, the class completed is added and line through added in css, if not nothing happens */}
            <button onClick={ completeHandler } className='complete-btn'>
                Done
            </button> 
            <button onClick={ deleteHandler } className='trash-btn'>
                Remove
            </button>
        </div>
    );
}

export default Todo;
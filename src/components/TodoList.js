import React from 'react';
//import components
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
    console.log("todos");
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo 
                        setTodos={setTodos}
                        todos={todos} 
                        key={todo.id}  
                        todo={todo}
                        text={todo.text} 
                        />
                    ))}
            </ul>
        </div>
    );    
};
/* .map() allows you to have access to each todo in this instance
the key is needed so react knows exactly what to remove and keep */


export default TodoList;

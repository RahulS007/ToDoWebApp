import React, {useState} from 'react'

const Todos = (props) => {

  return (
    <div>
            <div id="container">
            <h1 id = "driver"><span><i class="fa fa-plus"></i></span>Todo list</h1>
            <input id = "text-box" type="text" placeholder="Add New" hidden></input>
            <ul>
                {props.todolist.map((todo) => (
                    <li>{todo.title}</li>
                ))}
            </ul>
            </div>

        
    </div>
  )
};

export default Todos
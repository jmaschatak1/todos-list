import React from 'react'
import {ToDoItem} from "../MyComponents/ToDoItem";

export const ToDos = (props) => {
    return (
        <div className="Container">
            <h3 className="text-center my3">Todos List</h3>
            {props.todos.map((todo)=>{
                return  <ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })}


           

        </div>
    )
}

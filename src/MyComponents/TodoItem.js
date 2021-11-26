import React from 'react'

export const TodoItem = (props) => {
    return (
        <div>
            <h3>{props.todo.title}</h3>
            <p>{props.todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={() => {props.onDelete(props.todo)}}>Delete</button>
        </div>
    )
}

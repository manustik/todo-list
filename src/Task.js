import React from "react";
import './Task.css';

function Task({ task, onDelete }) {
    return (
        <li className="task">
            <span className="task-text">{task}</span>
            <button className="task-delete" onClick={onDelete}>Eliminar</button>
        </li>
  
    );
}

export default Task;
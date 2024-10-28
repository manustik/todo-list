// src/App.js
import React, { useState } from 'react';
import Task from './Task';
import './App.css'; // Importamos el archivo de estilos

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1 className="app-title">Lista de Tareas</h1>
      
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Escribe una nueva tarea"
        />
        <button onClick={addTask}>Agregar</button>
      </div>
      
      <ul className="task-list">
        {tasks.map((task, index) => (
          <Task key={index} task={task} onDelete={() => removeTask(index)} />
        ))}
      </ul>
    </div>
  );
}

export default App;

'use client'

import { useState } from "react";
import "../Todo/Todo.scss"

export default () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState(['']);

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);

    }
    const onAdd = () => {
        setTasks([...tasks, task]);
        setTask('')

    }
    return (
        <div>
            <input type="text"
                value={task}
                onChange={change}
            />
            <button onClick={onAdd}> add </button>
            <ul className="custom-list">
                {tasks.map((task, index) => (
                    <li key={index} className="custom-list-item">{task}</li>
                ))}
            </ul>
        </div >
    )
}
'use client'

import { useState } from "react";
import styles from "./Todo.module.scss"



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
    const [isChecked, setIsChecked] = useState(false)


    const checked = () => {
        setIsChecked(!isChecked)
        console.log(!isChecked)

    }

    return (

        <div>
            <input type="text"
                value={task}
                onChange={change}
            />
            <button onClick={onAdd}> add </button>
            <ul className={styles["custom-list"]}>
                {tasks.map((task, index) => (
                    <li key={index}
                        className={`${styles["custom-list-item"]} ${index === isChecked ? styles["custom-list-item-completed"] : ''}`}
                        onClick={checked}

                    >
                        {isChecked ? index : task}

                    </li>
                ))}
            </ul>
        </div >
    )
}


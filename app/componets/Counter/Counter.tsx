'use client'

import { useState } from "react";
export default () => {
    const [counter, setCounter] = useState(0);
    const click = () => {
        setCounter(counter + 1)
    }
    return (
        <button onClick={click}> {counter}</button>
    )

}
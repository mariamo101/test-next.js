'use client'

import { useState } from "react"

export default () => {


    const [text, setText] = useState('')

    const change = (e) => {
        setText(e.target.value);
    }
    return (
        <>
            {text && <h1> hello {text} </h1>}
            <input type="text"
                value={text}
                onChange={change}
            ></input>
        </>
    )
}
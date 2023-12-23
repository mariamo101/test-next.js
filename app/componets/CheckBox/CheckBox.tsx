'use client'
import { useState } from "react";

export default () => {
    const [showMenu, setShowMenu] = useState(false);
    const change = () => {
        setShowMenu(!showMenu)

    }
    return (
        <>
            <div onClick={change}> {showMenu ? 'Hide Menu ' : 'Show Menu'} </div>

            {
                showMenu &&
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li> Contact us</li>
                </ul>
            }


        </>
    )
}
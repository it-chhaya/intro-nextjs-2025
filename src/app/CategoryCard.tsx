"use client"

import { useEffect, useState } from "react"

export default function CategoryCard() {

    const [counter, setCounter] = useState(0)

    function increase() {
        console.log("Increase func")
        setCounter(counter + 1)
    }

    useEffect(() => {
        console.log("Component rendered")
    }, [counter])

    return (
        <div>
            <h2>Category</h2>
            <h3>{counter}</h3>
            <button onClick={increase}>Increase</button>
        </div>
    )
}
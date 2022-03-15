import { useState } from "react"

export const Calcolator = () => {

    let x = 17;
    let y = '4'

    function functionA() {

    }

    function functionB() {

    }

    const [count, setCount] = useState(0)

    return (
    <>
        <div onClick={() => {setCount(count + 1)}}>HTML Knapp</div>
        <h1>{count}</h1>
    </>
    )
    
}
import { useState } from "react"

export const Count = () => {
    const [count, setCount] = useState(1)

    const handleClick = () => {
        setCount((PrevCount) => PrevCount + 1)
    }

    return <>
        <p>Count state: {count}</p>
        <button type="button" onClick={handleClick}>click</button>
    </>
}
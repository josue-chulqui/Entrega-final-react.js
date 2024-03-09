import { useState } from "react"
import "../ItemCount/ItemCount.css"

const ItemCount = ({initial= 1, stock}) => {
    
    const [count, setCount] = useState (initial)
    
    const increment = () => {
        if (count < stock) {
            setCount(prev=> prev + 1)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(prev=> prev - 1)
        }
    }
    
    return (
        <div className="count">
            <h1>{count}</h1>

            <button className="btn" onClick={decrement}>-</button>

            <button className="btn" onClick={increment}>+</button>
        </div>
    )
}
export default ItemCount
import { useState } from "react"
import s from './Liker.module.css'
const Liker = () => {
    const [count, setCount] = useState(0)
    return(
        <div>
            <button  className={s.button} onClick={() => setCount(count + 1)}>Like</button>
            <span>likes:{count}</span>
        </div>
    )
}
export default Liker
import React, {
    useContext,
    useEffect, useMemo, useReducer,
    useRef, useState
} from "react";

function UseEffect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    const [s, dispatch] = useReducer(() => { }, {})
    

    useEffect(() => {
        document.title = `on click ${count} page`
        console.log(`useeffect updating ${count}`)
        window.addEventListener('mousemove',log)
        return ()=>{
            console.log(count)
            window.removeEventListener('mousemove',log)
        }
    },[count])


    const log=()=>
    {
        setCount(prev=>prev+1)
    }

    const val = {
        inc: () => {
            setCount(prev => prev + 1)
            return count
        },
    }
    return <div>
        <h1>count</h1>
        <div>
            <button onClick={() => setCount(count + 1)}>increase {count}</button>
            count:{count}
            <input type="text" name="name" onChange={e => setName(e.target.value)} />
        </div>
    </div>;
}

export default UseEffect;

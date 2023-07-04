import React, { useReducer } from "react";

const initialization = 0
const reduce = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialization
        default:
            return state

    }
}
function Use1() {
    const [count, dispatch] = useReducer(reduce, initialization)
    return <div >
        <h1>{count}</h1>
        <div>
            <button onClick={()=>dispatch('increment')}>increment</button>
            <button onClick={()=>dispatch('decrement')}>decrement</button>
            <button onClick={()=>dispatch('reset')}>reset</button>
        </div>
    </div>;
}

export default Use1;

import React, { createContext, useReducer } from "react";
import Use21 from "./Use21";

export const count = createContext()

const initialize = {
    firstCount: 0,
    secondCount: 0
}
const reduce = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, firstCount: state.firstCount + action.value }
        case 'decrement':
            return {...state, firstCount: state.firstCount - action.value }
        case 'i6':
            return {...state, secondCount: state.secondCount + action.value }
        case 'd6':
            return {...state, secondCount: state.secondCount - action.value }
        case 'reset':
            return initialize
        default: return state
    }
}

function Use2() {
    const [newState, dispatch] = useReducer(reduce, initialize)

    return <count.Provider value={{ state: newState, dispatch: dispatch }}>
        <div>
            {newState.firstCount ? <h1>First count -
                {newState.firstCount < 0 ?
                    <span>({newState.firstCount})</span>
                    : newState.firstCount}</h1> : newState.firstCount}
            <div>
                <button onClick={() => dispatch({
                    type: 'increment',
                    value: 3
                })} >increment 3</button>
                <button onClick={() => dispatch({
                    type: 'decrement',
                    value: 3
                })} >decrement 3</button>
                <button onClick={() => dispatch({ type: 'reset' })} >
                    reset</button>
            </div>
        </div>
        <Use21 />
    </count.Provider>;
}

export default Use2;

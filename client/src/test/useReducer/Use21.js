import React, { useContext } from "react";
import { count } from "./Use2";

function Use21() {
    const u=useContext(count)
    return <div>
        <div>
            {u.state.secondCount ? <h1>second count -
                {u.state.secondCount < 0 ?
                    <span>({u.state.secondCount})</span>
                    : u.state.secondCount}</h1> : u.state.secondCount}
            <div>
                <button onClick={() => u.dispatch({
                    type: 'i6',
                    value: 6
                })} >increment 6</button>
                <button onClick={() => u.dispatch({
                    type: 'd6',
                    value: 6
                })} >decrement 6</button>
                <button onClick={() => u.dispatch({ type: 'reset' })} >
                    reset</button>
            </div>
        </div>
    </div>;
}

export default Use21;

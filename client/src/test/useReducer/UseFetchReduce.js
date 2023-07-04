import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

const initialize = {
    load: true,
    photo: {},
    error: ''
}
const reduce = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                load: false,
                photo: action.playload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                load: false,
                photo: {},
                error: 'Something went wrong'
            }

        default:
            return state
    }
}

function UseFetchReduce() {
    const [num, setNum] = useState('')
    const [data, dispatch] = useReducer(reduce, initialize)
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos/${num}`)
            .then(res => {
                console.log(res.data)
                dispatch({ type: 'FETCH_SUCCESS', playload: res.data })
            }).catch(err => {
                console.error(err)
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, [num])

    return <div>
        {

            data.load ? <h1>Loading...</h1> :
                num ? data.error ?
                    <h1>Error:{data.error}</h1>
                    :
                    <h1>Title:{data.photo.title}</h1>
                    : ''
        }
        <div className="form-post">
            <input type="text" name="name" onChange={e => setNum(e.target.value)} />
        </div>
    </div>;
}

export default UseFetchReduce;

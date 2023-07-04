import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import N from "./N";
import Usercontext1 from "./Usercontext1";

export const userContext = React.createContext()

function FetchingData() {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState('')


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPosts(res.data)
                console.log(res.data)
            }).catch(err => { console.error(err) })
    }, [])
    return <div>
        <userContext.Provider value={id}>
            <N />
            <input type="text" name="id" onChange={e => setId(e.target.value)} />
            {
                !id ? posts.map(item => {
                    return <div key={item.id - 1}>
                        <h2>{item.title} </h2>
                    </div>
                }) : Number(id) > -1 && Number(id) < 100 ? <h1>{posts[id].title}</h1> :
                    <h1>Not found title</h1>
            }

        </userContext.Provider>

    </div>;
}

export default FetchingData;

import axios from "axios";
import React, { createContext, useState } from "react";
import Logout from "./Logout";
export const email_user = createContext()

function UseJe() {
    const [email,setEmail]=useState('')
    const [e,setE]=useState('')
    const _submit=e=>{
        e.preventDefault()
        axios.post('http://localhost:8010/email',{email:email})
        .then(res=>{
            console.log(res.data)
            setE(res.data.e)
        },err=>console.log(err))
    }
    return <email_user.Provider value={e} >
        <form className="form-post" onSubmit={_submit}>
            <input type="text" placeholder="Email ... "
                value={email} onChange={e => setEmail(e.target.value)} />
            <button>save</button>
        </form>
        <Logout/>
    </email_user.Provider >;
}

export default UseJe;

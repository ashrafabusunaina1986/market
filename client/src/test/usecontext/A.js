import React, { useState } from "react";

function A({_email}) {
    const [email, setEmail] = useState('')
    const _submit=e=>{
        e.preventDefault()
        _email(email)
    }
    return <form className="form-post" onSubmit={_submit}>
        <input type="text" placeholder="Email ... " 
        value={email}onChange={e=>setEmail(e.target.value)} />
        <button>save</button>
    </form>;
}

export default A;

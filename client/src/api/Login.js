import axios from "axios";
import React, { useState } from "react";

function Login() {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })
    const [isuser, setIsuser] = useState(false)
    const [empty, setEmpty] = useState(false)
    const [click, setClick] = useState(false)
    const [errors, setErrors] = useState({})

    const change = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        setClick(true)
        e.preventDefault()
        const error = {}
        var valid = {
            isemail: inputs.email ? true : false,
            ispassword: inputs.password ? true : false
        }
        if (valid.isemail && valid.ispassword) {
            const formdata = new FormData()
            formdata.append('email', inputs.email)
            formdata.append('password', inputs.password)

            axios.post('http://localhost:8010/login', formdata)
                .then(e => {
                    setIsuser(e.data.isuser)
                    localStorage.setItem('user',JSON.stringify(e.data.user))
                    console.log(e.data)
                }).catch(err => {
                    console.log(err)
                })
        }
        valid.isemail && valid.ispassword ? setEmpty(true) : setEmpty(false)
        valid.isemail ? error.email = '' : error.email = 'enter email example@example.com'
        valid.ispassword ? error.password = '' : error.password = 'Error!enter password'
        setErrors(error)
    }
    return <>
        {isuser ? window.location.replace('/') :
            <form onSubmit={handleSubmit} className='form-post'>
                {!isuser && click && empty && <div className="error" >enter password or email correct</div>}
                <div>
                    {errors.email ? <div className="error">{errors.email}</div> : ''}
                    <input type="email" placeholder="Email ..."
                        onChange={e => change(e)} name='email' value={inputs.email} />
                </div>
                <div>
                    {errors.password ? <div className="error" >{errors.password}</div> : ''}
                    <input type="password" placeholder="Password ..."
                        onChange={e => change(e)} name='password' value={inputs.password} />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        }
    </>
        ;
}

export default Login;

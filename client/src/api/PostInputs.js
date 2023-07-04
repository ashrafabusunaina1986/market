import axios from "axios";
import React, { useState } from "react";

function PostInputs() {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [empty, setEmpty] = useState(false)
    const [isuser, setisuser] = useState(true)
    const [click, setClick] = useState(false)
    const [errors, setErrors] = useState({})

    const handleSubmit = async (e) => {
        setClick(true)
        e.preventDefault()
        const error = {}
        const valid = {
            isname: /^[a-z]{3,20}(\s[a-z]{3,20})?$/.test(inputs.name) ? true : false,
            isemail: inputs.email ? true : false,
            ispassword: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(inputs.password) ? true : false
        }
        if (valid.isname && valid.isemail && valid.ispassword) {
            setEmpty(true)
            try {
                const output = await axios.post('http://localhost:8010/newuser',
                    {
                        name: inputs.name,
                        email: inputs.email,
                        password: inputs.password
                    })
                const data = await output.data
                console.log(data)
                setisuser(data.isuser)
                localStorage.setItem('user', JSON.stringify(
                    {
                        name: inputs.name,
                        email: inputs.email

                    }))
            } catch (error) {
                console.log(error)
            }
        }
        valid.isemail ? error.email = '' : error.email = 'enter the email'
        valid.isname ? error.name = '' : error.name = 'enter name of word or two words (3-20) letters(word) '
        valid.ispassword ? error.password = '' :
            error.password = 'password contain capital letter and digit ,symbol'

        setErrors(error)
    }

    const change = e => {
        const { name, value } = e.target
        setInputs({ ...inputs, [name]: value })
    }
    return <>
        {!isuser ? window.location.replace('/uploadfile?email=' + inputs.email) :
            <div>

                <form onSubmit={handleSubmit} className='form-post'>

                    <div>
                        {isuser && click && empty && <div className="error">User alreay</div>}
                    </div>

                    <div>
                        {errors.name ? <div className="error">{errors.name}</div> : ''}
                        <input type="text" placeholder="name ..."
                            onChange={e => change(e)} name='name' value={inputs.name} />
                    </div>
                    <div>
                        {errors.email ? <div className="error">{errors.email}</div> : ''}
                        <input type="email" placeholder="Email ..."
                            onChange={e => change(e)} name='email' value={inputs.email} />
                    </div>
                    <div>
                        {errors.password ? <div className="error">{errors.password}</div> : ''}
                        <input type="password" placeholder="Password ..."
                            onChange={e => change(e)} name='password' value={inputs.password} />
                    </div>
                    <div>
                        <button>Register</button>
                    </div>
                </form>
            </div>

        }
    </>

        ;
}

export default PostInputs;

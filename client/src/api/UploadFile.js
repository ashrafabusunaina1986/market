import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { GrDocumentUpload } from 'react-icons/gr'

function UploadFile() {
    const [emailParams, setEmailParams] = useSearchParams()
    useEffect(() => {
        console.log(localStorage.getItem('user'))
        const url = `http://localhost:8010/uploadfile/${emailParams.get('email')}`
        const emailFetch = async () => {

            try {

                const request = await axios.get(url)
                const email = await request.data
                console.log(email)
                setEmail(email.data)
                return await request.data
            } catch (error) {
                console.log(error)
            }


        }
        const e = emailParams.get('email')
        if (e) {
            emailFetch()
        } else {
            setEmail({ isemail: false })
        }
    }, [])

    const [email, setEmail] = useState('')
    const [inputs, setInputs] = useState({
        name: '',
        price: '',
        image: {}
    })
    const [picture, setPicture] = useState('')
    const [data, setData] = useState([])
    const [errors, setErrors] = useState({})

    const handleSubmit = e => {
        e.preventDefault()
        const error = {}
        const valid = {
            isname: /^[a-z]{3,20}(\s[a-z]{3,20})?$/.test(inputs.name) ? true : false,
            isprice: /^\d{1,4}$/.test(inputs.price) ? true : false,
            isimage: inputs.image.name ? true : false
        }
        if (valid.isimage && valid.isname && valid.isprice) {
            const formdata = new FormData()
            formdata.append('name', inputs.name)
            formdata.append('price', inputs.price)
            formdata.append('image', inputs.image)
            formdata.append('id', email.id)
            formdata.append('ename', email.name)
            formdata.append('email', emailParams.get('email'))
            axios.post('http://localhost:8010/uploadfile', formdata)
                .then(res => {

                }).catch(err => console.log(err))
        }
        valid.isimage ? error.image = '' : error.image = 'enter the image'
        !valid.isname ?
            error.name = 'enter name of word or two words (3-20) letters(word) ' :
            error.name = ''
        valid.isprice ? error.price = '' :
            error.price = 'enter price of 1-4 digits'

        setErrors(error)
    }
    return <>
        {!JSON.parse(localStorage.getItem('user')) ?
            <div>for upload file register <Link to='/newuser'>sign up</Link> or <Link to='/login'>log in</Link></div>
            :
            <div>

                <form onSubmit={handleSubmit} className="form-post" >
                    <div>
                        {!errors.name ? '' : <div className="error">{errors.name}</div>}
                        <input type="text" name="name" placeholder="name..."
                            onChange={e => setInputs({ ...inputs, name: e.target.value })}
                            value={inputs.name} />
                    </div>
                    <div>
                        {!errors.price ? '' : <div className="error">{errors.price}</div>}
                        <input type="text" name="price" placeholder="price..."
                            onChange={e => setInputs({ ...inputs, price: e.target.value })}
                            value={inputs.price} />
                    </div>
                    <div>
                        {!errors.image ? '' : <div className="error">{errors.image}</div>}
                        <div className="imgs">
                            <img src={picture} id="img" alt="" />
                            <label htmlFor="image">
                                <GrDocumentUpload className="gr" />
                                upload picture</label>

                            <input type="file" id="image" name="image"
                                accept="image/png,image/jpg,image/jpeg"
                                onChange={e => {
                                    console.log(e.target.value)
                                    var reader = new FileReader()
                                    reader.addEventListener('load', () => {
                                        console.log(reader.result)
                                        setPicture(reader.result)
                                    })
                                    reader.readAsDataURL(e.target.files[0])
                                    setInputs({ ...inputs, image: e.target.files[0] })
                                }} />
                        </div>

                    </div>
                    <div >
                        <div className="btn-add">

                            <button>Add</button>
                            <span className="item-length">{email.data ? email.data.length : 0} items </span>
                        </div>
                    </div>
                </form>
            </div>
        }

    </>




}

export default UploadFile;


import axios from "axios";
import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Buy() {
  const [params, setparams] = useSearchParams()
  const filepath = params.get('filepath')
  const name = params.get('name')
  const price = params.get('price')
  const param=useParams()
  var email=param.email
  const [inputs, setInputs] = useState({
  })
  const [errors, setErrors] = useState({})
  const [result,setResult]=useState(false)

  const input_change = e => {
    var name = e.target.name
    var value = e.target.value

    if (name === 'name') {
      if (!/^[a-z]{3,20}\s[a-z]{3,20}$/.test(value)) {
        setErrors({ ...errors, name: 'Enter name two words (3-20) letters' })
      } else {
        setErrors({ ...errors, name: '' })
      }
    }
    if (name === 'address') {
      if (value === '') {
        setErrors({ ...errors, address: 'enter address' })
      } else {
        setErrors({ ...errors, address: '' })
      }
    }
    if (name === 'mobile') {
      if (!/^(\d{10})$/.test(value)) {
        setErrors({ ...errors, mobile: 'enter mobile number 10 digits' })
      } else {
        setErrors({ ...errors, mobile: '' })
      }
    }

    //setInputs({...inputs,[name]:value})
  }
  const submit = e => {
    e.preventDefault()
    if (Object.keys(errors).length === 0) {
      setErrors({
        ...errors,
        name: 'Enter name two words (3-20) letters',
        address: 'enter address',
        mobile: 'enter mobile number 10 digits'
      })
    } else {
      if (errors.name === '' && errors.address === '' && errors.mobile === '') {
        var formdata = new FormData(e.target)
        var preload = Object.fromEntries(formdata)
        axios.post(`http://localhost:8010/item/${email}/buyitem`,{
          client:preload,
          name:name,
          filepath:filepath,
          price:price
        })
        .then(res=>{
          window.location.replace(`/item/${email}/buyitem/finsih/${res.data.c.client_id}`)
        }).catch(err=>{
          console.error(err)
        })
      }

    }
  }
  return <>
    {filepath?<form className="form-post w" onSubmit={submit}>
      <div style={{
        'margin': '10px 0', 'boxShadow': '0 0 3px 3px #faf',
        'padding': '10px 0'
      }}>
        <h4>To confirm the purchase, the data must be filled out</h4>
      </div>

      <div>
        {!errors.name ? '' : <h5 className="error">{errors.name}</h5>}
        <input type="text" id="name" name="name" placeholder="Enter name"
          value={inputs.name}
          onChange={input_change}
        />
      </div>
      <div>
        {!errors.address ? '' : <h5 className="error">{errors.address}</h5>}
        <input type="text" id="address" name='address' placeholder="Enter address"
          value={inputs.address}
          onChange={input_change} />
      </div>
      <div>
        {!errors.mobile ? '' : <h5 className="error">{errors.mobile}</h5>}
        <input type="text" id="mobile" name="mobile" placeholder="Enter number"
          value={inputs.mobile}
          onChange={input_change}
        />
      </div>
      <div>
        <button className="btn-buy">
          Confirm
        </button>
        {result? <h1>yes</h1>:''}
      </div>
    </form>:<h3 >where is details of purchase</h3>}
  </>;
}

export default Buy;

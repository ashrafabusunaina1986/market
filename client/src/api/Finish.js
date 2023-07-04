import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {MdMarkEmailRead} from 'react-icons/md'
import {FcAddressBook} from 'react-icons/fc'
import {ImMobile} from 'react-icons/im'


function Finish() {
  const params = useParams()
  var email = params.email
  var id = params.id
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get(`http://localhost:8010/item/${email}/buyitem/finish/${id}`)
      .then(res => {
        setData(res.data)
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])
  return <div className="view-finish">
    <div className="item1">
      <img src={'/' + data.filepath} alt="" />
      <div >
        <h5>Item Name:{data.item_name}</h5>
        <h5>Price:{data.price}</h5>
      </div>
      
    </div>
    <div className="item2">
        <h2>Name is {data.client_name} </h2>
        <h3>Email <MdMarkEmailRead/> {data.client_email}</h3>
        <h4>Address <FcAddressBook/> {data.client_address}</h4>
        <h4>Mobile <ImMobile/> {data.client_mobile}</h4>
      </div>
  </div>;
}

export default Finish;

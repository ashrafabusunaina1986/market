import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Btn_buy from "./Btn_buy";

function EShow_item() {
    const params = useParams()
    var id = params.id
    var email = params.email
    const [inf, setInf] = useState({})
    useEffect(() => {
        var url = window.location.pathname
        axios.get(`http://localhost:8010${url}`)
            .then(res => {
                console.log(res.data)
                setInf(res.data.items)
            }).catch(err => {
                console.error(err)
            })
    }, [])
    return <div>
        {
            inf ?
                <div className="show">
                    <img src={'/' + inf.filename} alt="htrfh" />
                    <h2>Name:{inf.name}</h2>
                    <h2>Price:{inf.price}</h2>
                    <Btn_buy email={email} file={inf.filename} name={inf.name} price={inf.price} />
                </div>
                : ''
        }
    </div>;
}

export default EShow_item;

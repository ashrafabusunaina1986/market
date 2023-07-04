import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

function GetUsers() {
    const [users, setUsers] = useState([])
    const [param,setparam]=useSearchParams()
    useEffect(() => {
        const dataFetch = async () => {
            try {
                const request = await axios.get(`http://localhost:8010/getusers`)
                setUsers(request.data.users)
                console.log(request.data)
                return request.data
            } catch (error) {
                console.log(error)
            }
            
        }
        dataFetch()
    }, [])
    return <div>
        {users[0] === 'not users' ? <h1>{users[0]}</h1> :
            users.map((u, i, a) => {
                return <div key={i}>
                    <Link to={'/?email='+a[a.length - 1 - i].email}  onClick={e=>{
                        setparam({email:e.target.outerText})
                        window.location.replace('/?email='+a[a.length - 1 - i].email)
                    } 
                        
                    }>{a[a.length - 1 - i].email}</Link>
                </div>
            })
        }
    </div>;
}

export default GetUsers;

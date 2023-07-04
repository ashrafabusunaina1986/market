import React ,{useState,useEffect} from "react";
import GetUsers from "./home/GetUsers";
import { useSearchParams } from "react-router-dom";
import Views from "./home/Views";

function Home() {
    const [email, setEmail] = useState('')
    const [emailp,setemailp]=useSearchParams()
    
    useEffect(() => {
        const e=localStorage.getItem('user')
        //console.log(JSON.parse(e))
        setEmail(e?JSON.parse(e).email:'')
       // setemailp({email:e?JSON.parse(e).email:''})
        
        
    },[])
    return <>
        
        <div>
            <Views email={email}/>
        </div>
    </>;
}

export default Home;

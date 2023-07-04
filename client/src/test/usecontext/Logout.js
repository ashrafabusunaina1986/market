import React, { useContext } from "react";
import { user } from "./Use1";
import {email_user} from './UseJe'

function Logout() {
    const u=useContext(email_user)
  return <div>
    {u? <h1>Email:{u}</h1>:'' }
  </div>;
}

export default Logout;

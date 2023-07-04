import React, { createContext, useState } from "react";
import Login from "../../test/usecontext/Logout"
import A from "./A";

export const user=createContext()

function Use1() {
    const [email,setEmail]=useState('')
  return <user.Provider value={email}>
    <A _email={setEmail}/>
    <Login/>
  </user.Provider>;
}

export default Use1;

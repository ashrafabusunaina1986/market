import React, { useEffect } from "react";

function Logout() {
    useEffect(()=>{
        localStorage.clear()
    })
  return window.location.replace('/')
}

export default Logout;

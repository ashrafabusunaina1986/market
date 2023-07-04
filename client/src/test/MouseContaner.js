import React, { useState } from "react";
import UseEffect from "./UseEffect";

function MouseContaner() {
    const [display,setDisplay]=useState(true)
  return <div>
    <button onClick={()=>setDisplay(!display)}>toggle</button>
    {display && <UseEffect/>}
  </div>;
}

export default MouseContaner;

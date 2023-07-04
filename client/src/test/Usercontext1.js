import React, { createContext } from "react";
import L from "./L";
import N from "./N";

export const u=createContext()

function Usercontext1() {
  return <div>
    <u.Provider value={'ashraf'}>
      <L/>
      <N/>
    </u.Provider>    
  </div>;
}

export default Usercontext1;

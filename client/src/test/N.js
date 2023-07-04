import React, { useContext } from "react";
import { userContext } from "./FetchingData";


function N() {
    const f=useContext(userContext)
  return <div>
    <h1>{f}</h1>
  </div>;
}

export default N;

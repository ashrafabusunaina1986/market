import React, { useContext } from "react";
import { u } from "./Usercontext1";

function L() {
    return <div>
        <u.Consumer>
            {
                user=>{
                    return <h1>user is {user}</h1>
                }
            }
        </u.Consumer>
    </div>;
}

export default L;

import React, { useEffect, useState } from "react";

function Intevel() {
    const [count,setCount]=useState(0)
    var someProp='dfflbdjgbdf'
    useEffect(()=>{
      function doSome(){
        console.log(someProp)
      }
      doSome()
        const inteval=setInterval(() => {
            setCount(prev=>prev+1)
        }, 1000);
        return ()=>{
          clearInterval(inteval)
        }
    },[someProp])
  return <div>
    {count}
  </div>;
}

export default Intevel;

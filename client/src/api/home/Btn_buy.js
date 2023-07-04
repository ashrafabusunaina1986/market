import React from "react";

function Btn_buy({email,file,name,price}) {

  return <button className="btn-buy" onClick={e=>{
    window.location.replace(`/item/${email}/buyitem?filepath=${file}&&name=${name}&&price=${price}`)
  }}>
        Buy 
  </button>;
}

export default Btn_buy;

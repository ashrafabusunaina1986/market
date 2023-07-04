import React from "react";

function Title() {
    console.log('rendering pure -')
  return <div>
    Use Callback hooks
  </div>;
}

export default React.memo(Title);

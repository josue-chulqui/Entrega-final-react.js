import React from "react";

const Small = React.memo(({ value }) => {
  console.log(' comprobar llamada :(  ');


  return <small> {value} </small>;
});

export default Small;
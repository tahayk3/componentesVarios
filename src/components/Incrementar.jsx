import React from "react";

export const Incrementar = React.memo(({incrementarPadre}) =>{

    console.log("Me estoy redibujando");
    return(<button onClick={()=>incrementarPadre(10)}>+1</button>);
})

export default Incrementar;
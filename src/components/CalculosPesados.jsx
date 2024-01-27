import { useMemo } from "react";
import { useState } from "react";

export const CalculosPesados = () =>{
    const [show, setShow] = useState(false);
    const [listNumbers,setlistNumbers] = useState([1,2,3,4,5,6,7,8,9,10]);

    const getCalculo = (listNumbers) => useMemo(()=>{
      console.log('Calculando');
      return listNumbers.reduce((a,b) => a*b)
    },[listNumbers])
    

    function agregarNumero(){
      setlistNumbers([...listNumbers,listNumbers[listNumbers.length-1]+1]);
    }

    return (
      <>
      <h2>Calculo: </h2>
      <p>{getCalculo(listNumbers)}</p>
      <button onClick={()=>setShow(!show)}>{show? "Show":"Hide"}</button>
      <button onClick={()=>agregarNumero()}>Agregar numero</button>
      </>
    );
}
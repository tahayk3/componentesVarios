import { useState } from "react"

export const useCounter = (valorInicial) =>{


    const [contador, setContador] = useState(valorInicial);

    function decrementar(){
        setContador(contador-1);
    }

    function resetear(){
        setContador(0);
    }

    function incrementar(){
        setContador(contador+1);
    }

    return{
        contador,
        decrementar,
        resetear,
        incrementar
    }

}
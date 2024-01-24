import { useState } from "react";

export const useForm = (initialForm={}) =>{

    const [formState, setformState] = useState(initialForm);


    function onInputChange({target}){
        const {name, value}  = target
        setformState({
            ...formState,
            [name]: value
        });
    }

    return{
        formState,
        onInputChange
    }

}
import { useEffect } from "react";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const UsuariosComponet = () =>{


    const {data,isLoading,errors} = useFetch('https://jsonplaceholder.typicode.com/users'); 
    
    return(
        <>
           <h3>fetch DATA API</h3>
           <ul>
          
           {isLoading? <h4>Cargando...</h4>: errors ? <p>Ocurrio un error: {errors}</p>:data.map(user=> <li key={user.id}>{user.name}</li> ) }
           </ul>
        </>
    );
}
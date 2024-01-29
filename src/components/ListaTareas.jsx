import React, { useReducer } from "react";
import {useForm} from '../hooks/useForm';

//estado inicial que se envia al useReducer
const initialState =[
    {
        id: new Date().getTime(),
        tarea: 'Explicar reducers',
        finalizada:true 
    }
];

function tareaReducer(state = initialState, action = {}){
    switch(action.type){
        case '[TAREA] Agregar Tarea': 
            return [...state, action.payload]
        case '[TAREA] Finalizar Tarea': 
            return state.map(tarea =>{
                if(tarea.id == action.payload){
                    return{
                        ...tarea,
                        finalizada: !tarea.finalizada
                    }
                }return tarea
            })
        case '[TAREA] borrar Tarea': 
            return state.filter(tarea => tarea.id !==action.payload)
        case '[TAREA] eliminar todo':
            return []
        default:
            return state     
    }
}

export const ListaTareas = () =>{

    const {tarea, formState,onInputChange} = useForm({tarea: ''});

    //state = estado
    //dispatch = 
    //tareaReducer = function que realiza una accion en base a el estado
    //initialState = un estado inicial para el estado 
    const [tareaState, dispatch] = useReducer(tareaReducer, initialState);

    function agregarTareaForm(evento){
        evento.preventDefault();
        if(formState.tarea =='') return

        const tarea = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        }
        const action = {
            type: '[TAREA] Agregar Tarea',
            payload: tarea
        }
        dispatch(action);
    }

    const finalizarTarea = ({id}) =>{
        console.log(id);
        const action = {
            type: '[TAREA] Finalizar Tarea',
            payload: id
        }
        dispatch(action);
    }

    const eliminarTarea = ({id}) =>{
        console.log(id);
        const action = {
            type: '[TAREA] borrar Tarea',
            payload: id
        }
        dispatch(action);
    }

    const reset = () =>{
        const action = {
            type: '[TAREA] eliminar todo',
            payload: ''
        }
        dispatch(action);
    }


    return(
        <>
        <form onSubmit={agregarTareaForm}>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    name="tarea" 
                    aria-describedby="emailHelp" 
                    placeholder="Ingresa tarea"
                    value={tarea}
                    onChange={onInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
            <button type="button" className="btn btn-danger" onClick={reset}>Borrar todo</button>
        </form>
        <ul className="list-group">
        {tareaState.map(elemento => {
            return(
                <li className="list-group-item d-flex justify-content-between" key={elemento.id}> 
                    <span>
                        {elemento.tarea} 
                        {elemento.finalizada? '✔️': '❌'}
                    </span>
                    <div>
                        <input 
                            type="checkbox"
                            value={elemento.finalizada}
                            onChange={()=>finalizarTarea(elemento)}
                        />
                        <button 
                            className="btn btn-danger" 
                            onClick={()=>eliminarTarea(elemento)}
                        >Eliminar
                        </button>
                    </div>
              </li>
            )
        } )}
        </ul>
        </>
    );
};
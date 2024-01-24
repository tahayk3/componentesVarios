import {useCounter} from '../hooks/useCounter';

export const ContadorComponentes = () =>{

    const {contador,decrementar,resetear, incrementar} = useCounter(0);

    return(
        <>
            <h3>Contador: {contador}</h3>
            <button className='btn btn-success' onClick={()=>decrementar(1)}>-1</button>
            <button className='btn btn-danger' onClick={()=>resetear()}>Resetear</button>
            <button className='btn btn-success' onClick={()=>incrementar(1)}>+1</button>
        </>
    );
}
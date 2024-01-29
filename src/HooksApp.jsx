import { ContadorComponentes } from "./components/ContadorComponentes";
import { FormularioComponent } from "./components/FormularioComponent";
import { UsuariosComponet } from "./components/UsuariosComponents";
import {CalculosPesados} from './components/CalculosPesados';
import {CallBackComponent} from './components/CallBackComponent';
import { ListaTareas } from "./components/ListaTareas";

export const HooksApp = () =>{
    return(
        <>
            <h1>Hooks</h1>
            <hr />
            <ContadorComponentes/>
            <hr />
            <FormularioComponent/>
            <hr />
            <UsuariosComponet/>
            <hr />
            <CalculosPesados></CalculosPesados>
            <hr />
            <CallBackComponent></CallBackComponent>
            <hr />
            <ListaTareas></ListaTareas>
            
        </>
    );
}
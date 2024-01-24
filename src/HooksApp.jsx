import { ContadorComponentes } from "./components/ContadorComponentes";
import { FormularioComponent } from "./components/FormularioComponent";
import { UsuariosComponet } from "./components/UsuariosComponents";

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
        </>
    );
}
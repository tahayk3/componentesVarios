import { ContadorComponentes } from "./components/ContadorComponentes";
import { FormularioComponent } from "./components/FormularioComponent";

export const HooksApp = () =>{
    return(
        <>
        <h1>Hooks</h1>
        <hr />
        <ContadorComponentes/>
        <hr />
        <FormularioComponent/>
        </>
    );
}
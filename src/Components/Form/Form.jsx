import { useContext } from "react";
import { GlobalContext } from "../../Global/Global";

import FormDiv from "./Form.style";


const Form = () => {
    const global = useContext(GlobalContext);

    return (
        <FormDiv>
            <input
                type="text"
                placeholder="Encontra o reusultado da aplicação"
                onChange={(e) => {
                    global.setSearch(e.target.value);
                }}
            />

            <select
                id="category"
                onChange={(event) => {
                    global.setOption(event.target.value);
                }}
                placeholder="Status"
            >
                <option value="">Status</option>
                <option value="created">Solicitado</option>
                <option value="processing">Processando</option>
                <option value="processed">Concluído</option>
            </select>
        </FormDiv>
    );
};

export default Form;
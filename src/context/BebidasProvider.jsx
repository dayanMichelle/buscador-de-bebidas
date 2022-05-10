import axios from "axios";
import { createContext, useEffect, useState } from "react";


const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
    const [ bedidaId, setBebidaId ] = useState(null);
    const [bebidas, setBebidas] = useState([]);
    const [modal, setModal] = useState(false);
    const [ receta, setReceta ] = useState([]);

    useEffect(() => {
        const obtenerReceta = async () => {
            if(!bedidaId) return;
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bedidaId}`;
                const { data } = await axios.get(url);
                setReceta(data.drinks[0]);
            } catch (error) {
                console.log(error)
            }
        }
        obtenerReceta()
    }, [bedidaId]);

    const consultarBebidas = async (datos) => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;
            const {data} = await axios.get(url);

            setBebidas(data.drinks);
        } catch (error) {
            console.log(error)
        }
    }

    const handleModalClick = () => {
        setModal(!modal);
    }

    const handleBebidaId = (id) => {
        setBebidaId(id);
    }
  
    return (
        <BebidasContext.Provider value={{
         consultarBebidas,
         bebidas,
         handleModalClick,
         modal,
         handleBebidaId,
         receta
        }}>
            {children}
        </BebidasContext.Provider>
    )
}
export { BebidasProvider}

export default BebidasContext;
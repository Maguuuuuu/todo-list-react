import { useAppContext } from "../../hooks";

import { useContext } from "react";

import { Outlet } from "react-router-dom";

import { Cabecalho, Conteudo, Footer } from "../../components";


const LayoutPadrao = () => {
    const { criador } = useAppContext();
    
    return(
        <>
        <Cabecalho/>
        <Conteudo>
            <Outlet/>
        </Conteudo>
        <Footer criador = {criador} />
     </>
    )
}

export { LayoutPadrao };
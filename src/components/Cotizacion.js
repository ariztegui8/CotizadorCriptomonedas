import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #fff;
    margin-top: 50px;
    width: 80%;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    border: 1px solid #e8562f;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 20px;
`

const Parrafo = styled.p`
    font-size: 18px;

    span{
        font-weight: bold;
        margin-left: 5px
    }
`

const Precio = styled.p`
    font-size: 30px;
    margin-bottom: 20px;

    span{
        font-weight: bold;
        margin-left: 5px
    }
`

const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null;
    console.log(resultado);

    return (
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Parrafo>Precio mas alto del dia: <span>{resultado.HIGHDAY}</span></Parrafo>
            <Parrafo>Precio mas bajo del dia: <span>{resultado.LOWDAY}</span></Parrafo>
            <Parrafo>Variacion ultimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Parrafo>
            <Parrafo>Ultima Actualizacion: <span>{resultado.LASTUPDATE}</span></Parrafo>
        </ResultadoDiv>
    )
}

export default Cotizacion

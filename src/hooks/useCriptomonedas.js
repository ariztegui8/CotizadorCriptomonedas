import React, { useState } from 'react';
import styled from "@emotion/styled";


const Label = styled.label`
    width: 100%;
    color: #fff;
    margin-bottom: 10px;
    font-size: 20px;
    text-transform: uppercase;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
`

const Select = styled.select`
    width: 80%;
    -webkit-appearance: none;
    padding: 15px;
    border-radius: 8px;
    outline: none;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    transition: background-color .3s ease;
    background: transparent;
    border: 1px solid #ab830d;

    &:hover{
    background-color: #735808;
    border-radius: 8px 8px 0 0px;
    }
`

const Option = styled.option`
    background: #ab830d;
    color: #fff;
    
`

const useCriptomonedas = (label, stateInicial, MONEDAS) => {


    //State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);
    
       const SelectCripto = ()=>(
           <>
               <Label>{label}</Label>
               <Select
                   onChange={e => actualizarState(e.target.value)} 
                   value={state}
               >
                   <Option value="">--Seleccione--</Option>
                   {MONEDAS.map(moneda =>(
                       <Option key={moneda.CoinInfo.Id} value={moneda.CoinInfo.Name}>{moneda.CoinInfo.FullName}</Option>
                   ))}
               </Select>
           </>
       );

       //Retorna state, interfaz y funcion que modifica el state
       return [state, SelectCripto, actualizarState];
    
}

export default useCriptomonedas

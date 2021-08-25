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
    margin-bottom: 20px;

    &:hover{
    background-color: #735808;
    border-radius: 8px 8px 0 0px;
    }
`

const Option = styled.option`
    background: #ab830d;
    color: #fff;
    
`

const useMoneda = (label, stateInicial, MONEDAS) => {

    //State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);
    
       const Seleccionar = ()=>(
           <>
               <Label>{label}</Label>
               <Select
                   onChange={e => actualizarState(e.target.value)} 
                   value={state}
               >
                   <Option value="">--Seleccione--</Option>
                   {MONEDAS.map(moneda =>(
                       <Option key={moneda.codigo} value={moneda.codigo}>{moneda.nombre}</Option>
                   ))}
               </Select>
           </>
       );

       //Retorna state, interfaz y funcion que modifica el state
       return [state, Seleccionar, actualizarState];
    
}

export default useMoneda

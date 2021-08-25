import React, { useEffect, useState } from 'react';
import styled from "@emotion/styled";
import useMoneda from '../hooks/useMoneda';
import useCriptomonedas from '../hooks/useCriptomonedas';
import axios from 'axios';
import Error from './Error';

const Boton = styled.input`
    margin-top: 40px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #009688;
    color: #fff;
    border: none;
    width: 80%;
    border-radius: 8px;
    transition: background-color .3s ease;

    &:hover{
        background-color: #04695f;
    }
`

const Formulario = ({guardarMoneda, guardarCriptomoneda}) => {

    //State del listado de criptomonedas
    const [listacripto, guardarCriptomonedas] = useState([]);

    const [error, guardarError] = useState(false);

    const MONEDAS = [
        {
            codigo: 'ARS',
            nombre: 'Peso Argentino'
        },  
        {
            codigo: 'MXN',
            nombre: 'Peso Mexicano'
        },
        {
            codigo: 'COP',
            nombre: 'Peso Colombiano'
        },
        {
            codigo: 'CLP',
            nombre: 'Peso Chileno'
        },
        {
            codigo: 'UYU',
            nombre: 'Peso Uruguayo'
        },
        {
            codigo: 'EUR',
            nombre: 'Euro'
        },
        {
            codigo: 'USD',
            nombre: 'Dolar EE.UU'
        },
        {
            codigo: 'GBP',
            nombre: 'Libra Esterlina'
        },
        {
            codigo: 'CNY',
            nombre: 'Yuan'
        },
        {
            codigo: 'BRL',
            nombre: 'Real'
        },
        {
            codigo: 'JPY',
            nombre: 'Yen'
        },
        
        
    ]

    //Utilizar useMoneda
    const [moneda, Seleccionar] = useMoneda('Elige tu Moneda', '', MONEDAS);

    //Utilizar useCriptomoneda
    const [criptomoneda, SelectCripto] = useCriptomonedas('Elige tu Criptomoneda', '', listacripto);

    //Ejecutar llamado a la API
    useEffect(()=>{
        const consultarAPI = async () => {

            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await axios.get(url);

            guardarCriptomonedas(resultado.data.Data);
            
        }
        consultarAPI();
    },[]);


    //Cuando el usuario hace submit
    const cotizarMoneda = (e) => {
        e.preventDefault();

        //Validar si ambos campos estan llenos
        if(moneda === '' || criptomoneda === ''){
            guardarError(true);
            return;
        }

        //Pasar los datos al componente principal
        guardarError(false);
        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda);
    }

    return (
        <form
            onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje='Complete todos los campos' /> : null}

            <Seleccionar />

            <SelectCripto />

            <Boton 
                type="submit"
                value="Calcular"
            />
        </form>
    )
}

export default Formulario

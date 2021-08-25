import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import imagen from './assets/img2.jpg';
import Cotizacion from "./components/Cotizacion";
import Formulario from "./components/Formulario";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  background: -webkit-linear-gradient(top left,  #020208  0,  #020208 40%, #0a1d17 100%);
  padding: 0 20px 0 0;
`

const Imagen = styled.img`
  width: 100%;
  height: 840px;
  object-fit: cover;
  filter: brightness(50%);
`

const Heading = styled.h1`
  color: #fff;
  text-align: left;
  font-size: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  text-transform: uppercase;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`

function App() {

  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [resultado, guardarResultado] = useState({});
  const [spinner, guardarSpinner] = useState(false);

  useEffect(()=>{

      const cotizarCriptomonedas = async ()=>{

        //Evitamos la ejecucion la primera vez
        if(moneda === '') return;
        
        //Consultar la API para obtener la cotizacion
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

        const resultado = await axios.get(url);

        //Mostrar el spinner
        guardarSpinner(true);

        //Ocultar el spinner y mostrar el resultado
        setTimeout(()=>{

          //Cambiar el estado de cargando
          guardarSpinner(false);

          //Guardar cotizacion
          guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
        }, 2000);

      }
      cotizarCriptomonedas();

  },[moneda, criptomoneda]);

  //Mostrar spinner o resultado
  const componente = (spinner) ? <Spinner /> : <Cotizacion resultado={resultado}/>

  return (
    <div className="App">
        <Contenedor>
            <div>
                <Imagen 
                  src={imagen}
                  alt="imagen-cripto"
                />
            </div>

            <div>
                <Heading>Cotiza Criptomonedas al Instante</Heading>

                <Formulario
                guardarMoneda={guardarMoneda}
                guardarCriptomoneda={guardarCriptomoneda}
                />

                {componente}

            </div>
        </Contenedor>
    </div>
  );
}

export default App;

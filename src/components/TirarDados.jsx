import React, { useState } from 'react';
import styled from 'styled-components';
import { tirarRandom } from '../helper';

const Boton = styled.button`
   background-color: white;
    border: 3px solid black;
    border-radius: 5px;
    color: black;
    padding: 30px 82px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin-top: 30px;
    margin-bottom:30px;
    text-transform: uppercase;
    transition: background-color .3s ease;

    &:hover{
      background-color: black;
      border: 3px solid black;
      color: white;
      cursor: pointer;
    }
`;

const TirarDados = ({nombre, setRandom, setRandom2, setRandom3, setRandom4, dados, caras, caras2, caras3, caras4, setError, setMostrarComponenteDado, setCargando, resultadoSuma, setComponenteResultado}) => {

  const numero1 = 0;
  const [numero2, setnumero2] = useState(0)
  const [numero3, setnumero3] = useState(0)
  const [numero4, setnumero4] = useState(0)
  const [numero5, setnumero5] = useState(0)



   const lanzar = () => {
       //setError(true);
      // setMostrarComponenteDado(false);
      setError(false)
      
      if(dados === '1' && caras !== undefined && caras !== '' && caras !== null){
        
        setComponenteResultado(false);
        let resultado = tirarRandom(numero1, numero2, caras);
        setRandom(resultado);
        setnumero2(resultado);
  
        setMostrarComponenteDado(false);
        setCargando(true);
        setError(false);

        setTimeout(() => {
          setCargando(false);
          setMostrarComponenteDado(true);
          setComponenteResultado(true);
        }, 2000);
        
        setRandom2(null);
        setRandom3(null);
        setRandom4(null);
        } else {
            // dado2
            if((dados === '2') && (caras2 !== undefined && caras2 !== '' && caras2 !== null)
            && (caras !== undefined && caras !== '' && caras !== null)
             ){
                setComponenteResultado(false);

                // tira el dado 1
                let resultado = tirarRandom(numero1, numero2, caras);
                setRandom(resultado);
                setnumero2(resultado);

                // tira el dados 2
                let resultado2 = tirarRandom(numero1, numero3, caras2);
                setRandom2(resultado2);
                setnumero3(resultado2);
                setMostrarComponenteDado(false);
                setCargando(true);
                setError(false);

                setTimeout(() => {
                    setCargando(false);
                    setMostrarComponenteDado(true);
                    setComponenteResultado(true);
                    }, 2000);
                setRandom3(null);
                setRandom4(null);

              }else {
               // dado3
                   if(dados === '3' && (caras2 !== undefined && caras2 !== '' && caras2 !== null)
                   && (caras !== undefined && caras !== '' && caras !== null) && (caras3 !== undefined && caras3 !== '' && caras3 !== null)){
                    setComponenteResultado(false);

                    // tira el dado 1
                    let resultado = tirarRandom(numero1, numero2, caras);
                    setRandom(resultado);
                    setnumero2(resultado);
    
                    // tira el dados 2
                    let resultado2 = tirarRandom(numero1, numero3, caras2);
                    setRandom2(resultado2);
                    setnumero3(resultado2);

                    // tira el dado 3
                      let resultado3 = tirarRandom(numero1, numero4, caras3);
                      setRandom3(resultado3);
                      setnumero4(resultado3);

                      setMostrarComponenteDado(false);
                      setCargando(true);
                      setError(false);

                      setTimeout(() => {
                      setCargando(false);
                      setMostrarComponenteDado(true);
                      setComponenteResultado(true);
                       }, 2000);
                      setRandom4(null);
                  }else {
                      // dado4
                      if(dados === '4' && (caras2 !== undefined && caras2 !== '' && caras2 !== null)
                      && (caras !== undefined && caras !== '' && caras !== null) && (caras3 !== undefined && caras3 !== '' && caras3 !== null) && (caras4 !== undefined && caras4 !== '' && caras4 !== null)){
                        
                        setComponenteResultado(false);

                        // tira el dado 1
                        let resultado = tirarRandom(numero1, numero2, caras);
                        setRandom(resultado);
                        setnumero2(resultado);
        
                        // tira el dados 2
                        let resultado2 = tirarRandom(numero1, numero3, caras2);
                        setRandom2(resultado2);
                        setnumero3(resultado2);
    
                        // tira el dado 3
                          let resultado3 = tirarRandom(numero1, numero4, caras3);
                          setRandom3(resultado3);
                          setnumero4(resultado3);
                        
                          // tira el dado4
                          let resultado4 = tirarRandom(numero1, numero5, caras4);
                          setRandom4(resultado4);
                          setnumero5(resultado4);

                          setMostrarComponenteDado(false);
                      setCargando(true);
                      setError(false);

                      setTimeout(() => {
                      setCargando(false);
                      setMostrarComponenteDado(true);
                      setComponenteResultado(true);
                       }, 2000);

                      } else {
                          setError(true);
                          setMostrarComponenteDado(false);
                          setComponenteResultado(false);
                          }
                        }

                    }
                  }
                }
             
    
   

    return (
        <div>
          <Boton
          type="button"
          onClick={lanzar}
          >{nombre}
          </Boton>
        </div>
    )
}

export default TirarDados;

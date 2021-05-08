import React from 'react';
import styled from 'styled-components';

const Resultado = styled.h2`
    margin-top: 0;
    margin-bottom: 15px;
`; 

export const MostrarResultado = ({resultadoSuma}) => {


    return (
        <div>
           <Resultado>{resultadoSuma}</Resultado>
        </div>
    )
}

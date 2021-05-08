import React, {Fragment} from 'react';
import styled from 'styled-components';
import { mostrarDado } from '../helper';


const Dado = styled.div`
    display: inline-block;
    font-size: 50px;
    margin: 0 10px 10px;
`;

export const MostrarDados = ({random, random2, random3, random4}) => {

    

   let mostrar1 = mostrarDado(random);
   let mostrar2 = mostrarDado(random2); 
   let mostrar3 = mostrarDado(random3); 
   let mostrar4 = mostrarDado(random4); 

    

    return (
        <Fragment>

            {mostrar1 ? (<Dado>
            {mostrar1}
            </Dado>) : null}

            {mostrar2 ? (<Dado>
            {mostrar2}
            </Dado>) : null}

            {mostrar3 ? (<Dado>
            {mostrar3}
            </Dado>) : null}

            {mostrar4 ? (<Dado>
            {mostrar4}
            </Dado>) : null}
            
        </Fragment>
        
    )
}

import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  margin-top: 10px;
`;

const Select = styled.select`
   width: 70%;
  padding: 12px 20px;
  margin: 8px 55px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;


const AgregarCaras = ({setCaras, setCaras2, setCaras3, setCaras4, mostrarAgregarCaras, mostrarAgregarCaras2, mostrarAgregarCaras3, mostrarAgregarCaras4, setMostrarComponenteDado, setComponenteResultado}) => {

  const enviarCaras = (e) => {
      if(mostrarAgregarCaras){
        setCaras(e.target.value);
        if((e.target.value) === ''){
          setMostrarComponenteDado(false)
          setComponenteResultado(false)
        }
      } 

      if(mostrarAgregarCaras2){
        setCaras2(e.target.value);
        if((e.target.value) === ''){
          setMostrarComponenteDado(false)
          setComponenteResultado(false)
        }
      } 
      if(mostrarAgregarCaras3){
        setCaras3(e.target.value);
      } 
      if(mostrarAgregarCaras4){
        setCaras4(e.target.value);
      } 
  }


    return (
        <div>
          <Container>              
              <Select onChange={enviarCaras}>
                <option value=""> - Elegir cantidad de caras -</option>
                <option value="2">2 Caras</option>
                <option value="3">3 Caras</option>
                <option value="4">4 Caras</option>
                <option value="5">5 Caras</option>
                <option value="6">6 Caras</option>
              </Select>
            </Container>
          
        </div>
    )
}

export default AgregarCaras;

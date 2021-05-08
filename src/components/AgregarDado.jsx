import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  margin-top: 20px;
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


const AgregarDado = ({setDados, setError, setMostrarAgregarCaras, setMostrarAgregarCaras2, setMostrarAgregarCaras3, setMostrarAgregarCaras4, setComponenteResultado}) => {


  const enviarDados = (e) => {
   

    if((e.target.value) === '' || (e.target.value) === undefined){
      setMostrarAgregarCaras(false);
      setMostrarAgregarCaras2(false);
      setMostrarAgregarCaras3(false);
      setMostrarAgregarCaras4(false);
      setDados(e.target.value)
      setError(false)
    }else {
      if((e.target.value) === '1'){
        setError(false);
        setMostrarAgregarCaras(true);
        setMostrarAgregarCaras2(false);
        setMostrarAgregarCaras3(false);
        setMostrarAgregarCaras4(false);
        setDados(e.target.value)
      }
  
      if((e.target.value) === '2'){
        setError(false);
        setMostrarAgregarCaras(true);
        setMostrarAgregarCaras2(true);
        setMostrarAgregarCaras3(false);
        setMostrarAgregarCaras4(false);
        setDados(e.target.value)
      }
  
      if((e.target.value) === '3'){
        setError(false);
        setMostrarAgregarCaras(true);
        setMostrarAgregarCaras2(true);
        setMostrarAgregarCaras3(true);
        setMostrarAgregarCaras4(false);
        setDados(e.target.value)
      }
  
      if((e.target.value) === '4'){
        setError(false);
        setMostrarAgregarCaras(true);
        setMostrarAgregarCaras2(true);
        setMostrarAgregarCaras3(true);
        setMostrarAgregarCaras4(true);
        setDados(e.target.value)
      }

    }

    
  }


    return (
        <div>
          <Container>
              <Select onChange={enviarDados}>
                <option value=""> - Elegir cantidad de dados -</option>
                <option value="1">1 Dado</option>
                <option value="2">2 Dados</option>
                <option value="3">3 Dados</option>
                <option value="4">4 Dados</option>
              </Select>
            </Container>
          
        </div>
    )
}

export default AgregarDado;

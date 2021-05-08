import React from 'react';
import styled from 'styled-components';

const Err = styled.div`
    width: 80%;
    margin: 15px auto 30px;
    background-color: #ffffff;
    color: #960202;
    border: red solid 2px;
    border-radius: 5px;
`;

const Mensaje = styled.p`
    margin-left: 5px;
    margin-right: 5px;
`;

const Error = () => {

    return (
        <Err>
            <Mensaje><i className="bi bi-exclamation-diamond"></i> Debe elegir cantidad de dados y caras de todos los dados para tirar </Mensaje>
        </Err>
    )
}

export default Error;
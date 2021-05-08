import React, {Fragment} from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';

const Logo = styled.img`
    width: 90px;
    margin-top:20px;
`;

const Titulo = styled.h1`
    color: #e45858;
    margin: 0;
`;

const Firma = styled.h5`
    margin:0;
    font-size: 20px;
    font-family: 'Great Vibes', cursive;
`;

const Header = ({titulo}) => {
    return (
        <Fragment>
            <Logo src={logo} alt="logo"/>
            <Titulo>{titulo}</Titulo>
            <Firma>By: Axel Molina</Firma>
        </Fragment>
    )
}

export default Header;
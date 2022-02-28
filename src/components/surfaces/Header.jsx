import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/images/logo-gatinho.JPG'

const DivHeader = styled.div`

    background-color: #FAC8E0;
    border-bottom: 3px solid #000;


    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;

    position: relative;
    min-height: 400px;
    
    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
`
const Img = styled.img`
    width: 180px;
    max-width: 180px;
    height: 180px;
    max-height: 180px;

    position: absolute;

    bottom: 0;
    left: 50%;
    transform: translate(-90px, 90px);
`

export const Header = () => {
    return (
        <DivHeader>
            <Img src={Logo} alt="" />
        </DivHeader>
    )
}

export default Header;
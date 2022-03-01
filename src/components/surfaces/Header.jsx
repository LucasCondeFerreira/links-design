import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/images/logo-gabi.png'

const DivHeader = styled.div`

    background-color: #EB5942;
    border-bottom: 10px solid #000;


    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;

    position: relative;
    min-height: 245px;


    @media (max-width: 560px){
        min-height: 180px;
    }
    
    margin: 0 auto;

    z-index: 1;
    display: flex;
    flex-wrap: wrap;
`
const Img = styled.img`
    width: 400px;
    height: 400px;

    @media (max-width: 560px){
    width: 260px;
    height: 260px;
        
    }

    border-radius: 100%;

    position: absolute;

    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
`

export const Header = () => {
    return (
        <DivHeader>
            <Img src={Logo} alt="" />
        </DivHeader>
    )
}

export default Header;
import React from 'react'
import styled from 'styled-components'

const DivFooter = styled.div`

    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%; 

    position: relative;
    max-width: 1600px;
    
    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
    
`
const H2 = styled.h2`
    font-size: 1.5em;
    color: #EB5942;

    text-transform: uppercase;
    align-items: center;
    text-align: center;

    margin: 40px auto;
`

export const Footer = () => {
    return (
        <DivFooter>
            <H2>MAKE YOUR DREAMS COME TRUE</H2>
        </DivFooter>
    )
}

export default Footer;
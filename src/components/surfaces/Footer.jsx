import React from 'react'
import styled from 'styled-components'

const DivFooter = styled.div`

    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%; 

    position: relative;
    max-width: 1600px;
    min-height: 400px;
    background-color: orange;
    
    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
    
`

export const Footer = () => {
    return (
        <DivFooter>
            <p>Um texto qualuqer</p>
        </DivFooter>
    )
}

export default Footer;
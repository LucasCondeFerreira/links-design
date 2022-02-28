import React from 'react'
import styled from 'styled-components'
import Button from '../data-display/button/Button'

const DivContent = styled.div`

    background-color: #000;

    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%; 

    position: relative;
    max-width: 1600px;
    min-height: 400px;
    
    margin: 0 auto;
`

export const Content = () => {
    return (
        <DivContent>
            <Button src={'https://google.com'} text={'Um elemento de botão'} />
            <Button src={'https://google.com'} text={'Um elemento de botão'} />
            <Button src={'https://google.com'} text={'Um elemento de botão'} />
        </DivContent>
    )
}

export default Content;
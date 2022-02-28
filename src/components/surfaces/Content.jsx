import React from 'react'
import styled from 'styled-components'
import Button from '../data-display/button/Button'
import Text from '../data-display/text/Text'

const DivContent = styled.div`

    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%; 

    position: relative;
    max-width: 1600px;
    min-height: 400px;
    
    padding-top: 200px;
    margin: 0 auto;
`

export const Content = () => {
    return (
        <DivContent>
            <Text h1={'Gabi Designs'} h3={'designer gráfica'} p={'Seja bem-vinda(o) ao meu cantinho, vocês está um passo a frente para realizar seu sonho de identidade visual. Meus links estão aqui embaixo esperando por você.'} />
            <Button src={'https://google.com'} text={'Whatsapp'} />
            <Button src={'https://google.com'} text={'E-mail'} />
            <Button src={'https://google.com'} text={'Pinterest'} />
            <Button src={'https://google.com'} text={'Behance'} />
        </DivContent>
    )
}

export default Content;
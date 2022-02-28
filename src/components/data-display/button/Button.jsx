import React from 'react'
import styled from 'styled-components'

const DivButton = styled.a`
    font-size: 18px;
    display: block;

    width: 380px;
    height: 70px;
    margin: 25px auto;

    border: 1px #212832 solid;
    border-radius: 50px;
    box-shadow: 0px 10px 14px -7px #29374b;
    text-shadow: 0px 1px 0px #4e6079;

    background: #212832;

    :hover{
        background:#212832;
    }

    > h4{
        width: 100%;
        margin-top: 1.4rem;
        
        font-size: 1.3em;
        text-align: center;
        align-items: center;
        color: #fff;
    }
`

export const Button = (props) => {
    return (
        <DivButton href={props.href} alt={props.alt}>
            <h4>{props.text}</h4>
        </DivButton>
    )
}

export default Button;
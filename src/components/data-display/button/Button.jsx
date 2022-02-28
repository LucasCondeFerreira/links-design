import React from 'react'
import styled from 'styled-components'

const DivButton = styled.a`
    font-size: 18px;
    display: block;

    width: 380px;
    height: 70px;
    margin: 25px auto;

    border: 1px rgba(250,200,236,1) solid;
    border-radius: 8px;
    box-shadow: 0px 10px 14px -7px rgba(212,110,186,1);
    text-shadow: 0px 1px 0px rgba(248,175,225,1);

    background: linear-gradient(rgba(250,200,236,1), rgba(248,183,229,1));

    :hover{
        background:rgba(250,200,236,1);
    }

    > p{
        margin: 1.7rem 0.5rem 0.5rem 2.5rem;
    }
`

export const Button = (props) => {
    return (
        <DivButton href={props.href} alt={props.alt}>
            <p>{props.text}</p>
        </DivButton>
    )
}

export default Button;
import React from 'react';
import styled from 'styled-components'
import Header from '../components/surfaces/Header'
import Content from '../components/surfaces/Content'
import Footer from '../components/surfaces/Footer'


const LimitContainer = styled.div`
  max-width: 100vw;
`

export default class Container extends React.Component {
    render() {
        return (
          <LimitContainer>
            <Header />
            <Content />
            <Footer />
          </LimitContainer>
        )
      }
}
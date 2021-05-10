import React from 'react';
// import './App.css';
import Exibicao from './Components/Exibicao'
import styled from 'styled-components'

const EstiloExibicao = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin: 2vh 0;
`

class App extends React.Component {
  render() {
    return (
      <EstiloExibicao>
        <Exibicao />
      </EstiloExibicao>
    )
  };
}

export default App;

import React from 'react';
import styled from 'styled-components'
const Mensagem = styled.div `

`
const BalaoMensagem = styled.div `
  display:flex;
  width: fit-content;
  height: fit-content;
  word-wrap: break-word;
  max-width: 60%;
  min-width:10%;
  margin: 5px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  padding: 0.9em 0.8em;
  border-radius: 0.5em;
  font-weight: 450;
  line-height: 1.3;
  background-color: ${props => {
        if (props.tipo === "eu") {
            return "#DDF7C8" 
        } else if (props.tipo === "outro") {
            return "#ffffff" 
        }
    }};
 
 align-self:  ${props => {
        if (props.tipo === "eu") {
            return "flex-end"
        } else {
            return "flex-start"
        }
    }};
  
`

const BlocoTela = styled.div`
  height: 100vh;
  width: 600px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #E5DDD5;

  div {
    display: flex;
    /* flex-grow: 1; */
    flex-direction: column;
    justify-self: flex-end;
    padding: 8px;

  }

  form {
    display: flex; 
    justify-content: space-evenly;
    padding-bottom: 10px  
  }
  
  
  form input:first-child {
    height: 7vh;
    width: 25%;
    border: none;
    border-radius: 5px;
  }

  form input:nth-child(2) {
    height: 7vh;
    width: 50%;
    border: none;
    border-radius: 5px;
  }

  form button {
    width: 15%;
    border: none;
    border-radius: 5px;
  }
`

class Exibicao extends React.Component {
    state = {
        informacoesDaTela: [],
        valorInputNome: "",
        valorInputMensagem: ""
    };

    onChangeUsuario = (event) => {
        this.setState({ valorInputNome: event.target.value });
    };

    onChangeMensagem = (event) => {
        this.setState({ valorInputMensagem: event.target.value });
    };

    onClickEnviaMensagem = (event) => {
        event.preventDefault()
        const objetoInformacoesDaTela = {
            nome: this.state.valorInputNome,
            mensagem: this.state.valorInputMensagem
        }

        const novasInformacoes = [...this.state.informacoesDaTela, objetoInformacoesDaTela];

        this.setState({ informacoesDaTela: novasInformacoes, valorInputMensagem: ""});
    };

    render() {
        const linhaDeChat = this.state.informacoesDaTela.map((item) => {
          if (item.nome.toLowerCase() === "eu") {
            return (
              <Mensagem tipo = {"eu"}>
                <BalaoMensagem tipo = {"eu"}>
                    <p>
                      <p>{item.mensagem}</p>
                    </p>       
                </BalaoMensagem>
                
              </Mensagem>
            );
            
          }else {
            return (
              <Mensagem tipo = {"outro"}>
                <BalaoMensagem tipo = {"outro"}>
                    <p>
                      <strong>{item.nome}</strong> 
                      <p>{item.mensagem}</p>
                    </p>       
                </BalaoMensagem>
              </Mensagem>
            );

          }
        });

        return (
            <BlocoTela>
                <div>{linhaDeChat}</div>
                <form action="#">
                    <input
                        value={this.state.valorInputNome}
                        onChange={this.onChangeUsuario}
                        placeholder="Usuário"
                    />

                    <input
                        value={this.state.valorInputMensagem}
                        onChange={this.onChangeMensagem}
                        placeholder="Mensagem"
                    />

                    <button onClick={this.onClickEnviaMensagem}>Enviar</button>
                </form>
            </BlocoTela>
        );
    };
}

export default Exibicao
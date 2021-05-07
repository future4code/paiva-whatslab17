import React from 'react';
import styled from 'styled-components'


const BlocoTela = styled.div`
  height: 800px;
  width: 600px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    justify-self: flex-start;
  }

  form {
    display: flex;
    
  }

  form input {
    height: 50px;
    width: 40%;
  }

  form button {
    width: 20%;
  }
`

class Exibicao extends React.Component {
    state = {
        informacoesDaTela: [
            {
                nome: "",
                mensagem: ""
            },
            {}
        ],
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

        this.setState({ informacoesDaTela: novasInformacoes});
    };

    render() {
        const linhaDeChat = this.state.informacoesDaTela.map((item) => {
            return (
                <p>
                  {item.nome}:{item.mensagem}
                </p>
            );
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

                    <button onClick={this.props.onClickEnviaMensagem}>Enviar</button>
                </form>
            </BlocoTela>
        );
    };
}

export default Exibicao
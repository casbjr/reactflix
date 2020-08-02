import React from 'react'
import styled from 'styled-components'
import Iframe from 'react-iframe'
import PageDefault from '../../components/PageDefault'
import Button from '../../components/Button';
import { Link } from 'react-router-dom';


const StyledText = styled.text`
  text-align: center;
  font-size: 35px;
  white-space: pre-wrap;
  font-family: "Gill Sans Extrabold", Helvetica, sans-serif;
`;

const Erro = styled.div`
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    text-align: center;
    h1 {
      margin-bottom: 70px;
    }
  }
`
const Erro404 = () => {
  const url = 'https://casbjr.github.io/game-dev/'
  return (
    <PageDefault>
      <Erro>
        <div>
          <StyledText>
                Sentimos muito.{"\n"}
                Não conseguimos encontrar a {"\n"}
                página que você está procurando.
          </StyledText>
          <h3>404. Page Not Found</h3>
          <br />
          <Button>
            <Link to="/">
                Voltar para Home
            </Link>
          </Button>
          <br />
        </div>
      </Erro>
    </PageDefault>
  )
}

export default Erro404;

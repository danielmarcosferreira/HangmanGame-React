import "./App.css";
import styled from "styled-components";
import GlobalStyle from "./globalStyle";
import palavras from "./palavras";
import hangmanImg from "./images/forca0.png";
import hangmanImg1 from "./images/forca1.png";
import hangmanImg2 from "./images/forca2.png";
import hangmanImg3 from "./images/forca3.png";
import hangmanImg4 from "./images/forca4.png";
import hangmanImg5 from "./images/forca5.png";
import hangmanImg6 from "./images/forca6.png";
import { useState } from "react";

function App() {
  const [botaoClicado, setBotaoClicado] = useState(false);
  const [tracejado, setTracejado] = useState("")

  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  <palavras />;
  let palavraSeparada = [];
  let tracejada = [];

  function sortearPalavras() {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    const palavraAleatoria = palavras[indiceAleatorio];
    setBotaoClicado(true);
    palavraSeparada = palavraAleatoria.split("").map((letra) => `${letra}`);
    colocandoTracos(palavraSeparada);
    mostrarPalavra(palavraSeparada)
  }

  function colocandoTracos(palavra) {
    console.log(palavra);
    tracejada = palavraSeparada.map((letra) => "_");
    console.log(tracejada);
  }

  function mostrarPalavra (array) {
    const novoArray = palavraSeparada.map((letra) => "_")
    setTracejado(novoArray)
  }

  function verificaLetra(l) {
    console.log(l);
    console.log(palavraSeparada);
    if (palavraSeparada.includes(l)) {
      console.log("Contem!!!");
    }
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Main>
          <img src={hangmanImg} alt="Imagem da forca do jogo" />
          <RightSide>
            <button onClick={sortearPalavras} disabled={botaoClicado}>
              Escolher Palavra
            </button>
            <h4>{tracejado}</h4>
          </RightSide>
        </Main>
        <Footer>
          <Letters>
            {alfabeto.map((l, index) => {
              return (
                <li key={index} onClick={() => verificaLetra(l)}>
                  {l.toUpperCase()}
                </li>
              );
            })}
          </Letters>
        </Footer>
      </Container>

      <Guess>
        <p>Já sei a palavra!</p>
        <input></input>
        <button>Chutar</button>
      </Guess>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  background: darkgray;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 40px;
  margin-bottom: 40px;
  img {
    width: 30vh;
    height: 44vh;
  }
`;

const RightSide = styled.div`
  margin-right: 40px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  button {
    background: #24ae60;
    height: 40px;
    width: 220px;
    cursor: pointer;

    color: white;
    font-size: 17px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
  }
  h4 {
    background: pink;
    width: 100%;
    font-size: 40px;
    letter-spacing: 12px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .esconder {
    display: none;
  }
`;

const Letters = styled.div`
  display: flex;
  flex-wrap: wrap;

  li {
    background: #e1ecf4;
    font-weight: bold;
    color: #053e64;
    display: inline-block;
    width: 40px;
    height: 40px;

    margin: 5px;
    border-radius: 10%;
    border: 1px solid #83aecb;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Footer = styled.div`
  background-color: antiquewhite;
  max-width: 63%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Guess = styled.div`
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  p {
    width: 115px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    background: #c8ddf2;
    color: #053e64;
    display: inline-block;
    width: 80px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #053e64;
    cursor: pointer;
  }
  input {
    width: 350px;
    height: 30px;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid #053e64;
  }
`;

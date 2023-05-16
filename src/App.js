import "./App.css";
import styled from "styled-components";
import GlobalStyle from "./globalStyle";
import palavras from "./palavras";
import imagem from "./images/forca0.png";
import imagem1 from "./images/forca1.png";
import imagem2 from "./images/forca2.png";
import imagem3 from "./images/forca3.png";
import imagem4 from "./images/forca4.png";
import imagem5 from "./images/forca5.png";
import imagem6 from "./images/forca6.png";
import { useState } from "react";

let imagemForca = [imagem, imagem1, imagem2, imagem3, imagem4, imagem5, imagem6]

  let palavraSeparada = [];
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

  let contador = 0;


function App() {
  const [botaoClicado, setBotaoClicado] = useState(false);
  let [tracejada, setTracejado] = useState([])
  const [image, setImage] = useState(imagemForca)

  const [palavra, setPalavra] = useState([])

  const [corDaLetra, setCorDaLetra] = useState()

  const arrDePalavras = palavras;

  let ativo;
  
  function sortearPalavras() {
    const indiceAleatorio = Math.floor(Math.random() * arrDePalavras.length);
    const palavraAleatoria = arrDePalavras[indiceAleatorio];
    setBotaoClicado(true);
    palavraSeparada = palavraAleatoria.split("").map((letra) => `${letra}`);
    colocandoTracos(palavraSeparada);
    mostrarPalavra(palavraSeparada)
  }

  function colocandoTracos(palavra) {
    console.log(palavra);
    tracejada = palavraSeparada.map((letra) => " _ ");
    console.log(tracejada);
  }

  function mostrarPalavra (array) {
    const novoArray = tracejada
    setTracejado(novoArray)
  }

  function verificaLetra(l) {
    if (palavraSeparada.includes(l)) {
      palavraSeparada.map((letra, idx) => {
        if (letra === l) {
          setCorDaLetra(true)
          mostrarLetra(l, idx)
        }
      })
    } else {
      ativo = "red"
      console.log("Errou!")
      mostrarImagem()
      setCorDaLetra(false)
      
      // console.log(ativo)
      // contador = contador + 1;
      // setImage(image[contador])
      // console.log(contador)
    } 
  }

  function mostrarLetra(l, idx) {
    
    let posicao = tracejada[idx] = l
    // setTracejado(posicao)
    console.log(l, idx)
    console.log(tracejada)
    console.log(palavraSeparada)
    if (tracejada === palavraSeparada) {
      console.log("voce terminou")
    }
  }

  function mostrarImagem() {
    return image[contador]
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Main>
          <img src={mostrarImagem()} alt="Imagem da forca do jogo" />
          <RightSide>
            <button onClick={sortearPalavras} disabled={botaoClicado}>
              Escolher Palavra
            </button>
            <h4>{tracejada}</h4>
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

  .red {
    background: red;
  }

  .green {
    background: green;
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

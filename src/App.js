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

let imagensForca = [
  imagem,
  imagem1,
  imagem2,
  imagem3,
  imagem4,
  imagem5,
  imagem6,
];
let palavraArray = [];
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
let novaPalavra;
let palavraSorteada;

function App() {
  const [botaoClicado, setBotaoClicado] = useState(false);
  let [erros, setErros] = useState(0);
  const [desabilitaInput, setDesabilitaInput] = useState(true);
  let [palavraTracejada, setPalavraTracejada] = useState([]);
  const [letrasUsadas, setLetrasUsadas] = useState(alfabeto);
  const [stringSemAcento, setStringSemAcento] = useState("");
  const [chute, setChute] = useState("");
  const [arrayLetras, setArrayLetras] = useState([]);
  const [corPalavra, setCorPalavra] = useState("black");

  const arrDePalavras = palavras;

  function iniciarJogo() {
    setDesabilitaInput(false);
    setLetrasUsadas([]);
    setArrayLetras([]);
    sortearPalavra();
    setErros(0);
    setChute("");
    setCorPalavra("black");
  }

  function finalizarJogo() {
    setLetrasUsadas(alfabeto);
    setDesabilitaInput([true]);
    setBotaoClicado(false);
    setPalavraTracejada(palavraSorteada);
  }

  function ganhou() {
    alert(`Parabéns por ter acertado a palavra ${palavraSorteada}!!!`);
    setCorPalavra("green");
    finalizarJogo();
  }

  function perdeu() {
    alert("Voce perdeu!");
    setCorPalavra("red");
    finalizarJogo();
  }

  function sortearPalavra() {
    const indiceAleatorio = Math.floor(Math.random() * arrDePalavras.length);
    palavraSorteada = arrDePalavras[indiceAleatorio];
    console.log(palavraSorteada)
    setBotaoClicado(true);

    novaPalavra = palavraSorteada.normalize("NFD").replace(/\p{Mn}/gu, "");
    setStringSemAcento(novaPalavra);

    palavraArray = palavraSorteada.split("").map((letra) => `${letra}`);

    colocandoTracos(palavraArray);
    setDesabilitaInput(false);
    setLetrasUsadas([]);
  }

  function colocandoTracos(palavra) {
    palavraTracejada = palavraArray.map((letra) => " _ ");
    setPalavraTracejada(palavraTracejada);
  }

  function verificaLetra(l) {
    clicouLetra(l);
    if (palavraArray.includes(l)) {
      palavraArray.map((letra, idx) => {
        if (letra === l) {
          mostrarLetra(l, idx);
        }
      });

      for (let i = 0; i < palavraArray.length; i++) {
        if (palavraArray[i] === l) {
          arrayLetras.push(l);
        }
      }
    } else if (palavraArray.length !== 0) {
      setErros((erros += 1));
      if (erros === 6) {
        perdeu();
      }
    }
    if (
      arrayLetras.length !== 0 &&
      palavraArray.length === arrayLetras.length
    ) {
      ganhou();
    }
  }

  function clicouLetra(l) {
    setLetrasUsadas([...letrasUsadas, l]);
  }

  function mostrarLetra(l) {
    const novaPalavraJogo = [...palavraTracejada];

    palavraArray.forEach((letra, i) => {
      if (stringSemAcento[i] === l) {
        novaPalavraJogo[i] = letra;
      }
    });
    setPalavraTracejada(novaPalavraJogo);
  }

  function chutarPalavraInteira() {
    if (chute === palavraSorteada) {
      ganhou ();
    } else {
      perdeu ();
    }
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Main>
          <img src={imagensForca[erros]} alt="Imagem da forca do jogo" />
          <RightSide>
            <button
              onClick={iniciarJogo}
              className={``}
              disabled={botaoClicado}
            >
              Escolher Palavra
            </button>
            <h1 className={corPalavra}>{palavraTracejada}</h1>
          </RightSide>
        </Main>
        <Footer>
          <Letters>
            {alfabeto.map((l, index) => {
              return (
                <button
                  key={index}
                  disabled={letrasUsadas.includes(l)}
                  onClick={() => verificaLetra(l)}
                >
                  {l.toUpperCase()}
                </button>
              );
            })}
          </Letters>
        </Footer>
      </Container>

      <Guess>
        <p>Já sei a palavra!</p>
        <input
          disabled={desabilitaInput}
          value={chute}
          onChange={(e) => setChute(e.target.value)}
        ></input>
        <button onClick={chutarPalavraInteira} disabled={desabilitaInput}>
          Chutar
        </button>
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

  h1 {
    width: 100%;
    font-size: 40px;
    letter-spacing: 12px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .black {
    color: black;
  }

  .red {
    color: red;
  }

  .green {
    color: green;
  }
`;

const Letters = styled.div`
  display: flex;
  flex-wrap: wrap;

  button {
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

  button:hover {
    background-color: #b3d3ea;
  }

  button:disabled {
    background-color: #9faab5;
    cursor: default;
  }
`;

const Footer = styled.div`
  max-width: 63%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Guess = styled.div`
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

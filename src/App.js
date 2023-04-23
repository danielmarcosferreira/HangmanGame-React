import "./App.css";
import styled from "styled-components";
import GlobalStyle from "./globalStyle";
import hangmanImg from "./images/forca0.png";
import hangmanImg1 from "./images/forca1.png";
import hangmanImg2 from "./images/forca2.png";
import hangmanImg3 from "./images/forca3.png";
import hangmanImg4 from "./images/forca4.png";
import hangmanImg5 from "./images/forca5.png";
import hangmanImg6 from "./images/forca6.png";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Container>
        <Main>
          <img src={hangmanImg} alt="Imagem da forca do jogo" />
          <RightSide>
            <button>Escolher Palavra</button>
            <h4>_ _ _ _ _ _ _ _ _ _ _ _</h4>
          </RightSide>
        </Main>
        <Footer>
          <Letters>
            <p>A</p>
            <p>B</p>
            <p>C</p>
            <p>D</p>
            <p>E</p>
            <p>F</p>
            <p>G</p>
            <p>H</p>
            <p>I</p>
            <p>J</p>
            <p>K</p>
            <p>L</p>
            <p>M</p>
            
            <p>N</p>
            <p>O</p>
            <p>P</p>
            <p>Q</p>
            <p>R</p>
            <p>S</p>
            <p>T</p>
            <p>U</p>
            <p>V</p>
            <p>W</p>
            <p>X</p>
            <p>Y</p>
            <p>Z</p>
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
  }
`;

const Letters = styled.div`
  display: flex;
  flex-wrap: wrap;


  p {
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
  max-width: 80%;

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
    background: #C8DDF2;
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

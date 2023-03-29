import styled from "styled-components";


/*===== Header Styles =====*/

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #070907;
  box-shadow: inset 0 0 50px 5px #00ff62;

  @media (max-width: 1000px) {
    height: 100vh;
    flex-direction: column-reverse;
    padding-top: 10vh;
    box-shadow: inset 0 0 35px 0px #00ff62;
  }
`;


export const Logo = styled.div`
  width: 45%;
  height: 100%;
  padding-left: 5%;
  display: flex;
  align-items: center;
  animation: myAnim 2s ease-in-out 0s infinite normal forwards;

  img {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 1000px) {
    width: 80%;
    padding-left: 0%;
    margin-bottom: 15vh;
  }

  @keyframes myAnim {
    0% {
      transform: translate(0);
    }

    10% {
      transform: translate(-2px, -2px);
    }

    20% {
      transform: translate(2px, -2px);
    }

    30% {
      transform: translate(-2px, 2px);
    }

    40% {
      transform: translate(2px, 2px);
    }

    50% {
      transform: translate(-2px, -2px);
    }

    60% {
      transform: translate(2px, -2px);
    }

    70% {
      transform: translate(-2px, 2px);
    }

    80% {
      transform: translate(-2px, -2px);
    }

    90% {
      transform: translate(2px, -2px);
    }

    100% {
      transform: translate(0);
    }
  }
`;

export const Banner = styled.div`
  width: 60%;
  margin-right: 5%;
  height: 70%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background-color: #070907;

  video {
    width: 150%;
  }

  @media (max-width: 1000px) {
    width: 80%;
    margin-right: 0%;

    video {
      width: 100%;
    }
  }
`;

/*===== API Styles =====*/

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  padding: 100px 5%;
  margin: 0 auto;
  background-attachment: fixed;
  background-color: #070907;
  box-shadow: inset 0 0 80px 5px #00ff62;

  @media (max-width: 1000px) {
    padding: 100px 5%;
    box-shadow: inset 0 0 35px 0px #00ff62;
  }
`;

export const Seta = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 700;
  bottom: 50px;
  right: 50%;
  height: 100px;
  width: 50px;
  color: #00ff62;
  animation: arrow 1s ease-in-out 0s infinite normal forwards;

  @keyframes arrow {
	0%,
	100% {
		transform: translateY(0);
	}

	10%,
	30%,
	50%,
	70% {
		transform: translateY(-8px);
	}

	20%,
	40%,
	60% {
		transform: translateY(8px);
	}

	80% {
		transform: translateY(6.4px);
	}

	90% {
		transform: translateY(-6.4px);
	}

}
@media (max-width: 1000px) {
    left: 45%;
  }
`

export const Pesquisa = styled.input`
  width: 500px;
  border: 5px solid #00ff62;
  color: #00ff62;
  padding: 1rem 2rem;
  margin-top: 50px;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 25px 5px;
  background-color: #000000cf;
  transition: ease-in-out 0.3s;
  z-index: 2;

  ::placeholder {
    color: #00ff62;
  }

  &:focus {
    box-shadow: 0px 0px 25px 5px #00ff62;
  }

  @media (max-width: 1000px) {
    width: 90%;
    margin-top: 0px;
    font-size: 1rem;
  }
`;

export const ListaPersonagens = styled.div`
  padding: 25px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Personagens = styled.ul`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Personagem = styled.li`
  position: relative;
  width: 300px;
  height: 420px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  transition: ease-in-out 0.2s;
  padding: 25px 20px;
  border-radius: 40px 10px;
  background-color: #000000cf;
  border-radius: 30px 10px;
  border: 5px solid #00ff952e;
  box-shadow: #325d443e 0px 6px 12px -2px, #00ff804b 0px 3px 7px -3px;

  &:hover {
    z-index: 1;
    transform: scale(1.2);
    box-shadow: 0 0 0 5px #00ff807a, 0 0 0 10px #00ff8057, 0 0 0 15px #00ff8044,
      0 0 0 20px #00ff802d, 0 0 0 25px #00ff801d;
  }

  @media (max-width: 1000px) {
    width: 300px;
    height: 420px;

    &:hover {
    transform: scale(1.1);
  }
  }
`;

export const Nome = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
  padding: 5px 15px;
  border-radius: 25px;
  color: #000;
  background-color: #00ff62;
`;

export const Imagem = styled.figure`
  width: 170px;
  height: 170px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0px 0px 25px 5px #00ff62;
    
  }
`;

export const Status = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  color: #000;
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 5px;
  padding: 10px 15px;
  background-color: ${props => 
    props.children === 'Alive' ? '#00ffdd' :
    props.children === 'Dead' ? '#ff0055' :
    props.children === 'unknown' ? 'white' : 'white'
  };
`;

export const Descricao = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
  justify-content: space-between;
`;

export const Tipo = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;

export const Genero = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  background-color: #00ff62;
  font-size: 1rem;
  font-weight: 700;
  color: #000;
  gap: 5px;
`

export const Especie = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px;
  color: #000;
  font-weight: 900;
  border-radius: 5px;
  background-color: #00ff62;
`

export const Local = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  gap: 5px;
  color: #00ff62;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
`;

export const Botoes = styled.div`
  display: flex;
  gap: 2rem;
  margin: 25px 0;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    cursor: pointer;
    border-radius: 10px;
    transform: skew(-25deg);
    transition: ease-in-out 0.3s;
    background-color: #00ff62;
    box-shadow: #325d403e 0px 6px 12px -2px, #00ff954b 0px 3px 7px -3px;

    &:hover {
      box-shadow: 0px 0px 25px 5px #00ff62;
    }

    &:disabled {
      opacity: 0.5;
    }

    span {
      font-size: 1rem;
      font-weight: 700;
      transform: skew(25deg);
    }
  }
`;

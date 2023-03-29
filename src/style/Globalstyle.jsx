import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    /*===== Global Styles =====*/
    *{
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
        font-family: 'Chakra Petch', sans-serif;
    }

    body{
        min-height: 100vh;
        max-width: 100vw;
        overflow-x: hidden;
    }

/*===== Scrollbar Styles =====*/
    body::-webkit-scrollbar {
    width: 12px;
    }

    body::-webkit-scrollbar-track {
        background: #010201;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #00ff62;
        border: solid 2px #010201;
        border-radius: 5px;
    }
`;

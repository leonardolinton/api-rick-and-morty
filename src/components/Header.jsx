import React from 'react';
import * as S from "../style/Styles";
import banner from "../assets/banner.mp4";
import logo from "../assets/tt.png";
import { RiArrowDownSLine } from "react-icons/ri";

export default function Header() {
  return (
    <S.Header>
        <S.Logo>
          <img src={logo} alt="Rick and Morty" />
        </S.Logo>
        <S.Banner>
          <video src={banner} autoPlay muted loop></video>
          <S.Seta><RiArrowDownSLine/></S.Seta>
        </S.Banner>
    </S.Header>
  )
}

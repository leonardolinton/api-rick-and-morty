import axios from "axios";
import * as S from "../style/Styles";

import {
  RiAliensFill,
  RiEmotionNormalFill,
  RiMenLine,
  RiWomenLine,
  RiForbidLine,
  RiMapPinFill,
} from "react-icons/ri";
import React, { useEffect, useState } from "react";

export default function Api() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character?name=${search}&page=${page}`
      )
      .then((response) => {
        setCharacters(response.data.results);
        setPages(response.data.info.pages);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [search, page]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <S.Container>
      <S.Pesquisa
        type="text"
        placeholder="Procurar personagem"
        value={search}
        onChange={handleSearch}
      />
      <S.ListaPersonagens>
        <S.Personagens>
          {characters.map((character) => (
            <S.Personagem key={character.id}>
              <S.Imagem>
                <img src={character.image} alt={character.name} />
              </S.Imagem>
              <S.Status>{character.status}</S.Status>
              <S.Descricao>
                <S.Nome>{character.name}</S.Nome>
                <S.Local>
                  <RiMapPinFill /> {character.location.name}
                </S.Local>
                <S.Tipo>
                  <S.Especie>
                    {character.species === "Human" ? (
                      <RiEmotionNormalFill />
                    ) : (
                      <RiAliensFill />
                    )}
                    {character.species}
                  </S.Especie>
                  <S.Genero>
                    {character.gender}{" "}
                    {character.gender === "Male" ? (
                      <RiMenLine />
                    ) : character.gender === "Female" ? (
                      <RiWomenLine />
                    ) : character.gender === "unknown" ? (
                      <RiForbidLine />
                    ) : (
                      <RiForbidLine />
                    )}
                  </S.Genero>
                </S.Tipo>
              </S.Descricao>
            </S.Personagem>
          ))}
        </S.Personagens>
      </S.ListaPersonagens>
      <S.Botoes>
        <button onClick={handlePrevPage} disabled={page === 1}>
          <span>Anterior</span>
        </button>
        <button onClick={handleNextPage} disabled={page === pages}>
          <span>Próximo</span>
        </button>
      </S.Botoes>
    </S.Container>
  );
}

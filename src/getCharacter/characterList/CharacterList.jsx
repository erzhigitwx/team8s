import React from "react";
import { useQuery } from "react-query";

const SlicedCharacterList = () => {
  const { isLoading, error, data } = useQuery("characters", () =>
    fetch("https://rickandmortyapi.com/api/character").then((res) => res.json())
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.results?.slice(0, 20).map((character) => (
        <li key={character.id}>
          <h3>{character.name}</h3>
          <p>Status: {character.status}</p>
          <p>Gender: {character.gender}</p>
          <p>Total episodes: {character.episode.length}</p>
        </li>
      ))}
    </ul>
  );
};

const CharacterList = () => {
  const { isLoading, error, data } = useQuery("characters", () =>
    fetch("https://rickandmortyapi.com/api/character").then((res) => res.json())
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <ul>
        {data.results?.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
      <SlicedCharacterList />
    </>
  );
};

export default CharacterList;

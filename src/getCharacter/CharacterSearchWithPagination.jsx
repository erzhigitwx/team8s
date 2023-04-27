import { useState } from "react";
import { useQuery } from "react-query";
import Autocomplete from "@mui/material/Autocomplete";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";

function CharacterSearch() {
  const fetchCharacters = function () {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => data.results);
  };

  const { isLoading, error, data } = useQuery(
    "charactersSearch",
    fetchCharacters
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Autocomplete
      id="character-search"
      options={data}
      getOptionLabel={(character) => character.name}
      renderInput={(params) => (
        <TextField {...params} label="Search by name" variant="outlined" />
      )}
    />
  );
}

function CharacterWithPagination() {
  function fetchCharacters(page = 1) {
    return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => res.json())
      .then((data) => data);
  }

  const [page, setPage] = useState(1);
  const { isLoading, error, data, isFetching } = useQuery(
    ["characters", page],
    () => fetchCharacters(page),
    {
      keepPreviousData: true,
    }
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (isLoading && !isFetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data found</div>;

  return (
    <div>
      <ul>
        {data.results?.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
      <Pagination
        count={data?.info.pages}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}

function CharacterSearchWithPagination() {
  return (
    <div>
      <CharacterSearch />
      <CharacterWithPagination />
    </div>
  );
}

export default CharacterSearchWithPagination;

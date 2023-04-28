import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import Autocomplete from "@mui/material/Autocomplete";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";

function CharacterSearchWithPagination() {
  const fetchCharacters = useCallback((page = 1) => {
    return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => res.json())
      .then((data) => data);
  }, []);

  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useQuery(
    ["characters", page],
    () => fetchCharacters(page),
    {
      keepPreviousData: true,
    }
  );

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const fetchCharactersSearch = useCallback(() => {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => data.results);
  }, []);

  const {
    isLoading: isLoadingSearch,
    error: errorSearch,
    data: dataSearch,
  } = useQuery("charactersSearch", fetchCharactersSearch);

  if (isLoading || isLoadingSearch) return <div>Loading...</div>;
  if (error || errorSearch)
    return <div>Error: {error?.message || errorSearch?.message}</div>;

  return (
    <>
      <Autocomplete
        id="character-search"
        options={dataSearch}
        getOptionLabel={(character) => character.name}
        renderInput={(params) => (
          <TextField {...params} label="Search by name" variant="outlined" />
        )}
      />
      <ul>
        {data?.results?.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
      <Pagination
        count={data?.info?.pages}
        page={page}
        onChange={handlePageChange}
      />
    </>
  );
}

export default CharacterSearchWithPagination;

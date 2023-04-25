import { Pagination } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
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
  if (!data) return <div>No data found</div>; // check if data is undefined

  return (
    <div>
      <ul>
        {data.results.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
      <Pagination
        count={data.info.pages}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default CharacterWithPagination;

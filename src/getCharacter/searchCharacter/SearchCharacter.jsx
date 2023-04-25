import { useQuery } from "react-query";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function CharacterSearch() {
  // get default data
  const fetchCharacters = function () {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => data.results);
  };

  //   states
  const { isLoading, error, data } = useQuery("characters", fetchCharacters);

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

export default CharacterSearch;

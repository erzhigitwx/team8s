import Content from "./components/content/Content";
import Header from "./components/header/Header";
import CharacterList from "./getCharacter/characterList/CharacterList";
import CharacterSearch from "./getCharacter/searchCharacter/SearchCharacter";
import CharacterWithPagination from "./getCharacter/CharacterWithPagination";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      {/* <CharacterSearch /> */}
      {/* <CharacterList /> */}
      {/* <CharacterWithPagination /> */}
    </div>
  );
}

export default App;

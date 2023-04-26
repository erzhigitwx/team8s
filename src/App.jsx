import Content from "./components/content/Content";
import Header from "./components/header/Header";
import CharacterList from "./getCharacter/characterList/CharacterList";
import CharacterSearchWithPagination from "./getCharacter/CharacterSearchWithPagination";


function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <CharacterList />
      <CharacterSearchWithPagination />
    </div>
  );
}

export default App;

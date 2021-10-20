import './App.css';
import Header from './components/header/header';
import SearchBar from './components/searchBar/searchBar';
import Cards from './components/cards/cards';
function App() {

  return (
    <div className="App">
      <Header/>
     <SearchBar />
     <Cards />
    </div>
  );
}

export default App;

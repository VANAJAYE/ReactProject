import logo from './logo.svg';
import './App.css';
import SearchBar from "./Components/SearchBar"
import BookData from './data.json'
import Statefile from './Components/Statefile';
import Greet from './Components/Greet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar placeholder="Enter book name" data="BookData" />
        <Statefile name="Sadvita"></Statefile>
        <Greet name="Vanaja"></Greet>
        <Greet name="Vanaja1"></Greet>
        <Greet name="Vanaja2"></Greet>
      </header>
    </div>
  );
}

export default App;

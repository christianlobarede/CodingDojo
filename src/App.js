import "./App.css";
import Clock from "./Components/Clock";
import FetchPokemon from "./Components/FetchPokemon";

function App() {
  return (
    <div className="App">
      <Clock />
      <FetchPokemon />
    </div>
  );
}

export default App;

import "./App.css";
import AxiosFetched from "./Components/AxiosFetched";
import Clock from "./Components/Clock";
import FetchPokemon from "./Components/FetchPokemon";

function App() {
  return (
    <div className="App">
      <Clock />
      <FetchPokemon />
      <AxiosFetched />
    </div>
  );
}

export default App;

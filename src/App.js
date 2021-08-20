import "./App.css";
import AxiosFetched from "./Components/AxiosFetched";
import Clock from "./Components/Clock";
import FetchPokemon from "./Components/FetchPokemon";
import { Router } from "@reach/router";
import { Link } from "@reach/router";
import Home from "./Components/Reach/Home";
import Number from "./Components/Reach/Number";
import Palabra from "./Components/Reach/Palabra";
import Interfaz2 from "./Components/LukeApi/Interfaz2";

function App() {
  return (
    <div className="App container" path="/home">
      {/*   <Clock /> */}
      {/*       <Link to="/fetch">fetch</Link>
      <Link to="/axios">axios</Link>
      <Router>
        <FetchPokemon path="/fetch" />
        <AxiosFetched path="/axios" />
      </Router> */}
      {/*       <Router>
        <Home path="/home" />
        <Number path="/:id" />
        <Palabra path="/:palabra" />
      </Router> */}
      <Interfaz2 />
    </div>
  );
}

export default App;

import "./App.css";
import Weather from "./Weather";
import Search from "./Search";
import Overview from "./Overview";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-wrapper">
          <div className="weather-app">
            <Search />
            <Overview />
            <Weather />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

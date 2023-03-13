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
          <a href="https://github.com/AnnaS30/my-app">Open-source code</a> by
          AnnaS and hosted on{" "}
          <a href="https://gentle-faun-caab27.netlify.app">Netlify</a>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Dictionary from "./Dictionary";
import girl from "./img/girl.svg";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary </header>
        <img src={girl} className="girlPhoto" alt="" />
        <main>
          <Dictionary defaultKeyword="Nature" />
        </main>
      </div>
      <footer className="App-footer">
        Coded by
        <a href="https://github.com/laura-dumitru/react-dictionary-project">
          {" "}
          Laura{" "}
        </a>
      </footer>
    </div>
  );
}

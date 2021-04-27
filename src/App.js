import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">What word are you looking for?</header>
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

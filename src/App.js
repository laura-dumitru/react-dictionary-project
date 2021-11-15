import "./App.css";
import Dictionary from "./Dictionary";
import book from "./img/book.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <img src={book} className="bookPhoto" alt="" />
        <main>
          <Dictionary defaultKeyword="Flowers" />
        </main>
      </div>
      <footer className="App-footer">
        Coded by
        <a
          href="https://github.com/laura-dumitru/react-dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Laura{" "}
        </a>
      </footer>
    </div>
  );
}

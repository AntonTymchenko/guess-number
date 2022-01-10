import Container from "./components/Container";
import HelpTableNumberAndRecord from "./components/HelpAndRecordPart/HelpTableNumber";
import MainTableForGame from "./components/MainTableForGame";
import "./App.css";
import { useState } from "react";

function App() {
  const [bestResult, setBestResult] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Guess Number</h1>
      </header>
      <Container>
        <MainTableForGame setBestResult={setBestResult} />
        <HelpTableNumberAndRecord bestResult={bestResult} />
      </Container>
    </div>
  );
}

export default App;

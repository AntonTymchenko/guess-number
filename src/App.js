import Container from "./components/Container";
import HelpTableNumberAndRecord from "./components/HelpAndRecordPart/HelpTableNumber";
import MainTableForGame from "./components/MainTableForGame";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Guess Number</h1>
      </header>
      <Container>
        <MainTableForGame />
        <HelpTableNumberAndRecord />
      </Container>
    </div>
  );
}

export default App;

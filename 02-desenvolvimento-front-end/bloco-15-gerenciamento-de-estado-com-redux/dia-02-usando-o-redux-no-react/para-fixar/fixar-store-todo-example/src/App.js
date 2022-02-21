import FirstComponent from './components/FirstComponent';
import './App.css';
import SecondComponent from './components/SecondComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Inicia exercicio para fixar react-redux com um exemplo de todo</h1>
       <div>
        <FirstComponent />
        <SecondComponent />
      </div>
      </header>
    </div>
  );
}

export default App;

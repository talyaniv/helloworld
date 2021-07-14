import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Environment Variables: {JSON.stringify(process.env)}
      </header>
    </div>
  );
}

export default App;

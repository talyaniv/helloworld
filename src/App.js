import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Environment Variables: {JSON.stringify(process.env.REACT_APP_TEST_V)}
      </header>
    </div>
  );
}

export default App;

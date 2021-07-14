import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Environment Variable TEST_V: {process.env.TEST_V || 'no value'}
      </header>
    </div>
  );
}

export default App;

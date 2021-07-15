import './App.css';
import env from 'react-dotenv';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Environment Variables: {JSON.stringify(env.TEST_V)}
      </header>
    </div>
  );
}

export default App;

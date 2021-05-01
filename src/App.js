import logo from './logo.svg';
import './App.css';

import Title from './components/Title.js';
import Link from './components/Link.js';
import Joke from './components/Joke.js';
import Readying from './components/Readying.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>


      <Title />
      <Readying />
      <Joke />
      <Link />
    </div>
  );
}

export default App;

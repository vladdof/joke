import logo from './logo.svg';
import './App.css';

import Title from './components/Title.js';
import Banner from './components/Banner.js';
import Link from './components/Link.js';
import Joke from './components/Joke.js';
import Readying from './components/Readying.js';
import Text from './components/Text.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Banner text={["10 ", <span>смешных</span>, "? шуток для разрботчика"]} />
      <Text text={["на фото ", <del>серьезный</del>, " человек"]} color mb="var(--mb)" />
      <Title text={["первая ", <span>шутка</span>, <br/>, " скоро будет..."]} mb="90px" />
      <Readying />
      <Joke />
      <Link />
    </div>
  );
}

export default App;

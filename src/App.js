import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import About from './pages/About';
import Home from './pages/Home';

function App() {

  const [home, sethome] = useState(false);
  const [about, setAbout] = useState(false);
  return (
    <div>
      {/* <h1>fsgf</h1> */}
      <button onClick={() =>{ sethome(!home); setAbout(false)} }>Home</button>
      <button onClick={() =>{ setAbout(!about) ; sethome(false)}}>About</button>
      <h1>
        {home ? <Home /> : ""}
      </h1>
      {about ? <About /> : ""}
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import Contador from '../../components/Contador';
import './index.css';
import Header from '../../components/Header';
import audio from '../../assets/audio/fragatasound.wav';

function App() {
  function play() {
    const audio = document.querySelector('audio');
    audio.play();
  }
  useEffect(() => {
    play();
  });
  return (
    <div id="container">
      <Header />

      <audio src={audio} />
      <main>
        <h1>Em breve</h1>
        <p>Nossa fragata entra em alto mar</p>
      </main>

      <footer>
        <Contador />
      </footer>
    </div>
  );
}
export default App;

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
    <>
      <Header />
      <audio src={audio} />
      <section id="interface">
        <article>
          <header>
            <section className="title">
              <h1>Em breve</h1>
              <p>Nossa fragata entra em alto mar</p>
            </section>
          </header>
          <footer>
            <Contador />
          </footer>
        </article>
      </section>
    </>
  );
}
export default App;

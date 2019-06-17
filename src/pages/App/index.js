import React from "react";
import Contador from "../../components/Contador";
import "./index.css";
import Header from "../../components/Header";
import audio from "../../assets/audio/fragatasound.wav";
function App() {
  return (
    <>
      <Header />
      <embed src={audio} autostart="TRUE" />
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

import React from "react";
import Countdown from "react-countdown-now";
import "./Contador.css";
// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="time">
        <label>{days}</label>
        <label className="pointer">:</label>
        <label className="pointer">{hours}</label>
        <label className="pointer">:</label>
        <label className="pointer">{minutes}</label>
        <label className="pointer">:</label>
        <label className="pointer">{seconds}</label>
      </div>
    );
  }
};

function Contador() {
  const data = new Date();

  // Pega o valor do tempo em milissegundos
  const TimeMilliseconds =
    1000 *
      (86400 * data.getDate() +
        3600 * data.getHours() +
        60 * data.getMinutes() +
        data.getSeconds()) +
    data.getMilliseconds();

  //data de previsão
  const PrevDate = 9050000000;

  return (
    <Countdown
      date={Date.now() + (PrevDate - TimeMilliseconds)}
      renderer={renderer}
    />
  );
}
export default Contador;

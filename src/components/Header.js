import React, { useState } from "react";
import logo from "../assets/img/Fragatasolo.png";
import Modal from "react-responsive-modal";
import "./Header.css";
export default function Header() {
  const [modal, setModal] = useState(false);
  function OpenOrCloseModal() {
    setModal(!modal);
  }
  return (
    <header id="main-header">
      <div className="header-content">
        <div className="header-logo">
          <img className="logo" alt="Fragata corp" src={logo} />
          <p>
            {" "}
            <strong>Fragata</strong> corp.
          </p>
        </div>
        <p style={{ cursor: "pointer" }} onClick={OpenOrCloseModal}>
          Saiba mais
        </p>
      </div>

      <Modal id="modal" open={modal} onClose={OpenOrCloseModal} center>
        <div>
          <h3>
            <i />
          </h3>
          <h2>Por que acreditar?</h2>
          <br />
          <p>
            O Fragata Corp pretende alcançar diversos públicos e objetivos,
            porém se tivéssemos que resumir nossa missão, com certeza o termo
            utilizado seria <strong>ecossistema tecnológico.</strong> Não temos
            dúvidas sobre a constante evolução de demanda tecnológica, porém
            algo que nos preocupa é falta de informação que a sociedade tem
            quanto a esse assunto.
          </p>{" "}
          <br />
          <p>
            Buscamos através de parceiros uma oportunidade capaz de levar
            conhecimento perante a população, visamos alcançar Escolas,
            Empresas, Instituições Privadas e Públicas, e ofertar a eles um
            minicurso de 4 horas com o objetivo de desenvolver uma aplicação do
            zero, que tenha pertinência com o dia a dia dos interessados.
          </p>
          <br />
          <p>
            Nessa deixa pretendemos apresentar a eles produtos e oportunidades
            que o mercado tecnológico oferece.
          </p>
        </div>
      </Modal>
    </header>
  );
}

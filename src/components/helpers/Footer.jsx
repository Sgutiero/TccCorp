import React from "react";
import '../helpers/Footer.css'
import Imagen from '../img/tcc.png'

export const Footer = () => {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-left">
            <img src={Imagen} alt="" />
          <p className="footer-company-name">Compañia de Envios TCC © 2023</p>

        </div>

        <div className="footer-right">
          <p>Contactate con nosotros</p>

          <form action="#" method="post">
            <input type="text" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Mensaje"></textarea>
            <button>Enviar</button>
          </form>
        </div>
      </footer>
    </>
  );
};


export default Footer
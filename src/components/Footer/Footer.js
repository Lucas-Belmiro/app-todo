import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <section className="container-footer">
        <p>Copyright @2024 - Lucas Belmiro. Todos os direitos reservados </p>
        <div className="section-creator">
          <p>Feito por: </p>
          <img
            src={"./assets/images/logo2_Lucas.png"}
            alt="Logo"
          ></img>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
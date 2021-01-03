import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={() => closeSubmenu()}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Infraestrutura de pagamentos para a internet</h1>
          <p>
            Milhões de empresas de todos os tamanhos, de pequenas
            startups a grandes corporações, usam soluções de
            software e API da Stripe para receber pagamentos,
            enviar repasses e gerenciar suas operações online.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img
            src={phoneImg}
            className="phone-img"
            alt="phone"
          />
        </article>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import Logo from "../../assets/mi.png";

import { Container, Button } from "./styles";

function Welcome() {
  return (
    <Container>
      <header>
        <img src={Logo} />
        <section>
          <Button>
            <a href="#projects">Projetos</a>
          </Button>
          <Button>
            <a href="#contact">Contato</a>
          </Button>
        </section>
      </header>
      <div>
        <span></span>

        <section>
          <h2>Olá, me chamo Milene</h2>
          <h1>
            Sou <span>Web FullStack </span> Development
          </h1>
          <h6>
            {" "}
            Apaixonada pelas melhores tecnologias de desenvolvimento e
            programação.
          </h6>
          <article></article>

          <ul>
            <li>
              <a href="https://www.facebook.com/milene.taborda" target="_blank">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://github.com/milenetaborda" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/milene-taborda/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Container>
  );
}

export default Welcome;

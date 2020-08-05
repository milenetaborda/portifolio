import React from "react";
import { AiOutlineLine } from "react-icons/ai";

import Photo from "../../assets/photo.png";

import { Container } from "./styles";

export default function About() {
  return (
    <Container>
      <img src={Photo} alt="My Photo" />
      <div>
        <main>
          <h1>
            <AiOutlineLine /> Sobre mim
          </h1>
          <p>
            Sou aluna de Desenvolvimente Web Full Stack na instituição Labenu,
            onde busco aprimorar constantemente meus conhecimentos e aptidões na
            área de tecnologia. Possuo experiência em programação funcional,
            Javascript, React, Redux, Node.js, Typescript, SQL.{" "}
          </p>

          <strong>NodeJS | MySQL | HTML | CSS | Javascript</strong>
        </main>
        <button
          type="submit"
          onClick={() =>
            window.open(
              "https://github.com/milenetaborda/portifolio/files/5025537/CV.-Milene.Taborda.pdf",
              "_blank"
            )
          }
        >
          Download CV
        </button>
      </div>
    </Container>
  );
}

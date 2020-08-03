import React from 'react';

import {Container, Footer} from './styles';
import {FaLinkedinIn, FaGithub, FaFacebook} from 'react-icons/fa';

export default function Contact() {
  return (
    <Container id="contact">
      <div>
        <h1>Contrate-me!</h1>
        <h3>Procuro uma oportunidade onde possa aprender me desenvolver e  evoluir na minha carreira profissional.</h3>
        <h3>E-mail para contato: milenetaborda1@outlook.com</h3>
        <h3>Celular: (43) 99871-7111</h3>

        <section>
       <ul>
       <li><a  href="https://www.facebook.com/milene.taborda" target="_blank"><FaFacebook  /></a></li>
            <li><a href="https://github.com/milenetaborda" target="_blank"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/milene-taborda/" target="_blank"><FaLinkedinIn /></a></li>
        </ul>
      </section>

      <Footer>
      <p>© 2020 Milene Taborda</p>
    </Footer>
      </div>


    </Container>
  )
}

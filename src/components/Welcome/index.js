import React from 'react';
import {FaLinkedinIn, FaGithub, FaFacebook} from 'react-icons/fa';
import Logo from '../../assets/mi.png'

import { Container, Button } from './styles';

function Welcome() {
  return (
    <Container>
      <header>
        <img src={Logo} />
        <section>
          <button>Projetos</button>
          <Button>Contato</Button>
        </section>
      </header>
        <div>
          <span></span> 
  
          <section>
          <h2>Olá, eu sou Milene</h2>
            <h1>Sou <span>Web FullStack </span> Development</h1>
            <h6>Está a procura de um desenvolvedor para fazer parte de sua equipe?</h6>
            <article></article>
          
          <ul>
            <li><FaFacebook /></li>
            <li><FaGithub /></li>
            <li><FaLinkedinIn /></li>
          </ul>
          </section>
        </div>
          
    </Container>
  )
}

export default Welcome;
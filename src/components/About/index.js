import React from 'react';
import {AiOutlineLine} from 'react-icons/ai'

import Photo from '../../assets/photo.png';

import { Container } from './styles'

export default function About() {
  return (
    <Container>
     <img src={Photo} alt="My Photo"/>
     <div>
       <main>
          <h1> <AiOutlineLine /> Sobre mim</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repudiandae magnam tenetur autem nobis delectus inventore provident quae aut possimus error hic incidunt consectetur culpa nemo quibusdam, ipsa assumenda labore.</p>
       </main>
      <button type="submit">Download CV</button>
     </div>
    </Container>
  )
}

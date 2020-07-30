import React from 'react';

import {Container } from './styles';

import {MdSchool} from 'react-icons/md'

export default function MyResume() {
  return (
    <Container>
     <h3>Meu resumo</h3>
     <h1>Formação acadêmica</h1>

     <ul>
       <li>
        <p><MdSchool /></p>
        <div>
          <h1>Bacharelado em Administração</h1>
          <strong>2018 - 2019 <span> | Uninter </span></strong>
          <p>Lorem ipsum dolor, recusandae odio provident voluptatum, optio porro deserunt ipsum excepturi accusamus, consequuntur eum.</p>
        </div>
       </li>


       <li>
         <p><MdSchool /></p>
         <div>
          <h1>Eng. da Computação</h1>
            <strong>2019 - 2024 <span> | Uninter </span></strong>
            <p>Lorem ipsum dolor, recusandae odio provident voluptatum, optio porro deserunt ipsum excepturi accusamus, consequuntur eum.</p>
         </div>
       
       </li>

       <li>
        <p><MdSchool /></p>
        <div>
          <h1>Web Full Stack Development </h1>
          <strong>2020<span> | Labenu </span></strong>
          <p>Lorem ipsum dolor, recusandae odio provident voluptatum, optio porro deserunt ipsum excepturi accusamus, consequuntur eum.</p>
        </div>
       </li>
     </ul>
    </Container>
  )
}

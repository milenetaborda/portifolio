import React from 'react';

import {Container } from './styles';

import {MdSchool} from 'react-icons/md'

export default function MyResume() {
  return (
    <Container>
     <h3>Meu resumo</h3>
     <h1>Formação acadêmica / Especialização</h1>

     <ul>
       <li>
        <p><MdSchool /></p>
        <div>
          <h1>Bacharelado em Administração</h1>
          <strong>2018 - 2019 <span> | Uninter </span></strong>
          <p>O curso de Administração da Uninter tem foco no empreendedorismo, tanto para a gestão do seu próprio negócio quanto para a atuação nas organizações. O curso oferece ao aluno uma formação crítica, reflexiva, sustentável e independente, aliando o conteúdo teórico a uma gama de aplicações práticas. </p>
        </div>
       </li>

       <li>
         <p><MdSchool /></p>
         <div>
          <h1>Eng. da Computação</h1>
            <strong>2019 - 2024 <span> | Uninter </span></strong>
            <p>O curso forma engenheiros da computação para o mercado, com atuação em indústria, comércio, saúde e no mercado financeiro. Não apenas projetando sistemas de software e hardware, mas desenvolvendo soluções com tecnologias voltadas ao uso de redes neurais (inteligência artificial), estatística, eletrônica e programação. </p>
         </div>
       </li>

       <li>
        <p><MdSchool /></p>
        <div>
          <h1>Web Full Stack Development </h1>
          <strong>2020<span> | Labenu </span></strong>
          <p>A Labenu é uma startup que forma Desenvolvedores Web Full Stack prontos para o mercado de trabalho. São mais de 1000 horas de aprendizagem e desenvolvimento de projetos em Frontend, Backend e DevOps</p>
        </div>
       </li>
     </ul>
    </Container>
  )
}

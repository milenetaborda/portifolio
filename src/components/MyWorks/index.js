import React, { Component } from 'react';

import { Container } from './styles';

export default class MyWorks extends Component {
  constructor(props) {
    state = {
      works: []
    }
  }

  render() {
    return (
      <Container>
        <h3>Meu portfolio</h3>
      <h1>Meus recentes trabalhos</h1>

      <div>
        <ul>
           <li><button type="submit">Todos</button></li>
          <li><button type="submit" >Front end</button></li>
          <li><button type="submit" >Back end</button></li> 
        </ul>
      </div>

      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
      </Container>
    )
  }
}

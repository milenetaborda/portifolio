import React, { Component } from 'react';
import { Container, Button } from './styles';

export default class MyWorks extends Component {
    state = {
      works: [],
      tags: "all"
    }
  
    componentDidMount() {
      const result = require('../../server.json')
      this.setState({ works: result.works })
    }

    setFilter= (tag) => {
      this.setState({ tags: tag })
    }

   render() {
    const { works, tags } = this.state;

    const filterWorks = tags === "all" ? works :  works.filter(work => work.tag === tags );   

    return (
      <Container id="projects">
        <h3>Meu portfolio</h3>
      <h1>Meus recentes trabalhos</h1>

      <div>
        <ul >
           <li><Button type="submit" selected={tags === "all" } onClick={() => this.setFilter("all")} >Todos</Button></li>
          <li><Button type="submit" selected={tags === "frontend" } onClick={() => this.setFilter("frontend")}  >Front end</Button></li>
          <li><Button type="submit" selected={tags === "backend" } onClick={() => this.setFilter("backend")}  >Back end</Button></li> 
        </ul>
      </div>
      
      <ul>
      {filterWorks.map(work => (
        <li><img src={work.image} alt=""/></li>
      ))} 
      </ul>

      <button> Mais projetos</button>

      </Container>
    )
  }
}

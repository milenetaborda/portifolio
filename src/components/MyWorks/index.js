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
      
      <div className="container">
        {filterWorks.map(work => (
          <a  href={work.repository} target="_blank">
          <div className="box">
            <div className="imgBox">
              <img src={work.image} alt=""/>
            </div>

            <div className="details">
              <div className="content">
                <h2>{work.title}</h2>
                <p>{work.description}</p>
              </div>
            </div>
           </div>
           </a>
        ))}
      </div>
      
      <button ><a  href="https://github.com/milenetaborda?tab=repositories" target="_blank"> Mais projetos </a></button>

      </Container>
    )
  }
}

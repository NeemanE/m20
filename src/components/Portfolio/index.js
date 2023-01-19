import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import gitPortfolio from '../../gitPortfolio.json';
import GitCards from '../GitCards';


function Container(props) {
    return <div className="container">{props.children}</div>;
}

function Portfolio () {  

    return (
        <section>
          <div className="showcase">
            <h1 className="title">Portfolio of Neeman Elchurafa</h1>
          </div>

          <Container>
            {gitPortfolio.map((showcase) => (
              <GitCards order={showcase.number} name={showcase.name} github={showcase.github}/>
            ))}
          </Container>
        </section>
    
    );
  }

export default Portfolio;
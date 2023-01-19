import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function GitCards(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img src={props.preview}/>
        </div>
        <div className="card-content">
              <p className="git-project" id="git-name">{props.name}</p>
        </div>
      </div>
    );
}
  
  export default GitCards;
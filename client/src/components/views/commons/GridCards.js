import React from 'react'
import { Col } from 'antd';

function GridCards(props) {

  if(props.landingPage) {
    return (
      <Col lg={4} md={10} xs={16}>
          <div style={{ position: 'relative'}}>
              <a href={`/movie/${props.movieId}`} >
                  <img style={{ width: '100%', height: '320px'}} src={props.image} alt={props.movieName}/>
              </a>
          
          </div>
      </Col>
    ) 
  } else {
    return (
      <Col lg={4} md={10} xs={16}>
          <div style={{ position: 'relative'}}>
            <img style={{ width: '100%', height: '320px'}} src={props.image} alt={props.characterName}/>
          </div>
      </Col>
    )
  }

  
}

export default GridCards

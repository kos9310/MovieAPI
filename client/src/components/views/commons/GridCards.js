import React from 'react'
import { Col } from 'antd';

function GridCards(props) {
  return (
    <Col lg={4} md={10} xs={16}>
        <div style={{ position: 'relative'}}>
            <a href={`/movie/${props.movieId}`} >
                <img style={{ width: '100%', height: '320px'}} src={props.image} alt={props.movieName}/>
            </a>
        
        </div>
    </Col>
  )
}

export default GridCards

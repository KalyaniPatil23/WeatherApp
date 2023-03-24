import React from "react";
import './Card.css';

function Card(props) {

    return(
        <div className="card-container">
            <div className="image-container" style={{backgroundImage: 'url(' + props.imageUrl + ')', height: '70%'}}>
                {/* <img src={'../background.jpeg'} alt='' /> */}
                <div className="card-title">
                    <h2>{props.title}</h2></div>
            </div>
            <div className="card-content">
            <div style={{ height: '100%', fontSize: '60px', fontWeight: 'bold', float: 'left'}}>32 &deg;</div>
            <div style={{width: '10%', float: 'left', paddingTop: '5%', marginLeft: '10%'}}>
              <div style={{width: '70%', fontSize: '24px', fontWeight: 'bold'}}>City</div>
              <div style={{width: '70%', display: 'flex'}}>
                Date
              </div>
        </div>
            </div>
        </div>
    )
}

export default Card;
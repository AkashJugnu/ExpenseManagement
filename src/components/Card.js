import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';




const CardComponent = ({Header}) => {
    return(

          Header.map((card, idx) => {
            return(
           <div style={{padding:"2px"}}>
           <Card
           bg={card.type}
           key={card.key}
           text={'white'}
           style={{ width: '18rem' }}
           className="mb-2"
         >
           <Card.Header>{card.key}</Card.Header>
           <Card.Body>
             <Card.Title>{card.key} is -  </Card.Title>
             <Card.Text>
              Rs. {card.value || 0}
             </Card.Text>
           </Card.Body>
         </Card>
           </div>
          )})
    )
}

export default CardComponent;
import React from 'react';
import {CardGroup, Card, Button} from 'react-bootstrap';

const CardDesc=props=>{
	return(
		<Card className="carddesc-whole">
              <Card.Header className="carddesc-header">Hello, we are BTS!</Card.Header>
              <Card.Body className="carddesc-body">
                <Card.Title>BTS/ Bangtan Sonyeondan/ Bulletproof Boy Scouts</Card.Title>
                <Card.Text>
                  are a K-Pop boy group. They debuted on 13th June 2013 from the company 'Big Hit Entertainment' with the album '2 Cool 4 Skool'. BTS consists of 7 members: Jin, Suga, J-hope, RM, Jimin, V and Jungkook. Since their debut, they have become global megastars, receiving all the major awards and nominations like AMAs, Grammy etc. and also being brand ambassadors for UNICEF.
                </Card.Text>
              </Card.Body>
            </Card>
		);
};

export default CardDesc;
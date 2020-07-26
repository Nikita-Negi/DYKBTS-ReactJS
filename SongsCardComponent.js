import React from 'react';
import {CardGroup, Card, Button} from 'react-bootstrap';

const SongsCard=props=>{
	return(
		<Card className="carddesc-whole">
              <Card.Header className="songscard-header">Hello, we are BTS!</Card.Header>
              <Card.Body className="songscard-body">
                <Card.Title>BTS Discography</Card.Title>
                <Card.Text> BTS has a wide range of discography, spanning over 22 albums of both group and individual creations. Here is a sample of some of my favourite songs. Click on the play button on the video to listen to the songs.</Card.Text>
              </Card.Body>
            </Card>
		);
};

export default SongsCard;
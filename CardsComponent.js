import React from 'react';
import {CardGroup, Card, Button} from 'react-bootstrap';
import img1 from '../assets/images/card1.jpg';
import img2 from '../assets/images/card2.jpg';
import img3 from '../assets/images/card3.jpeg';
import { Link } from 'react-router-dom';

const CardComp=props=>{
	return(
		<nav>
		<CardGroup>
			<Card style={{ width: '18rem' }}>
			  <Card.Img variant="top" src={img1} className="firstcard" />
			  <Card.Body>
			    <Card.Title>Know About BTS</Card.Title>
			    <Card.Text>
			      Click below to know about the history of BTS and its members.
			    </Card.Text>
			    <Link to="/about">
			    	<Button variant="info">Take Me There</Button>
			    </Link>
			  </Card.Body>
			</Card>

			<Card style={{ width: '18rem' }}>
			  <Card.Img variant="top" src={img2} />
			  <Card.Body>
			    <Card.Title>BTS Discography</Card.Title>
			    <Card.Text>
			      Click below to know about the albums and songs of BTS.
			    </Card.Text>
			    <Link to="/songs">
			    	<Button variant="info">Take Me There</Button>
			    </Link>
			  </Card.Body>
			</Card>

			<Card style={{ width: '18rem' }}>
			  <Card.Img variant="top" src={img3} />
			  <Card.Body>
			    <Card.Title>BTS Meme Quiz</Card.Title>
			    <Card.Text>
			      Click below to take a meme filled quiz about BTS.
			    </Card.Text>
			    <Link to="/quiz">
			    	<Button variant="info">Take Me There</Button>
			    </Link>
			  </Card.Body>
			</Card>
		</CardGroup>
		</nav>
		);
};

export default CardComp;
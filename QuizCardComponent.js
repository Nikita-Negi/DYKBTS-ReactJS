import React from 'react';
import {CardGroup, Card, Button} from 'react-bootstrap';

const QuizCard=props=>{
	return(
		<Card className="carddesc-whole">
              <Card.Header className="quizcard-header">Hello, we are BTS!</Card.Header>
              <Card.Body className="quizcard-body">
                <Card.Title>BTS Meme Quiz</Card.Title>
                <Card.Text>BTS are natural crackheads and the funniest people around. It is only natural for them to have some iconic hilarious moments. Time to have some fun! Take the quiz below to see if you can match the their level of crazy.</Card.Text>
              </Card.Body>
            </Card>
		);
};

export default QuizCard;
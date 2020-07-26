import React from 'react';
import QuizCard from './QuizCardComponent';
import Quiz from 'react-quiz-component';
import { quiz } from './quiz';

function MemeQuiz (props) {
    return(
        <div className="quiz-body">
            <p className="appname-quiz"> BTS Meme Quiz - BTS Meme Quiz - BTS Meme Quiz </p> 

            <QuizCard />

            <br />

            <div className="quiz-window">
            	<Quiz quiz={quiz} shuffle={true} continueTillCorrect={true} />
            </div>


            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

       	</div>
    );
}

export default MemeQuiz;
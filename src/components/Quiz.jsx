import { useState } from "react";
import QUESTIONS from "../questions.js";
import quizTrophyImg from "../assets/quiz-complete.png"

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  function handleUserAnswer(selectedAnswer) {
    setUserAnswers(prevUserAnswers => {
        return [...prevUserAnswers, selectedAnswer]
    });
  }

  if(quizIsComplete) {
    return <div id="summary">
        <img src={quizTrophyImg} alt="Trophy icon"/>
        <h2>Quiz Completed!</h2>
    </div>
  }

  const sortedAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  sortedAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
            {sortedAnswers.map((answer) => (
                <li key={answer} className="answer">
                    <button onClick={() => handleUserAnswer(answer)}>{answer}</button>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

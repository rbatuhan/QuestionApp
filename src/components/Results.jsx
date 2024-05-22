import React from "react";

function Results({ userAnswer, correctAnswer, wrongAnswer }) {
  return (
    <div className="results">
      <div>
        <h2>Results</h2>
        <p>Doğru = {correctAnswer}</p>
        <p>Yanlış = {wrongAnswer}</p>
      </div>
      <div>
        <h3>Sonuç</h3>
        <ul>
          {userAnswer.map((answer, index) => (
            <li key={index}>
              Question {answer.questionId}: Sizin Cevabınız - {answer.answer} (
              {answer.isCorrect ? "Doğru" : "Yanlış"})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Results;
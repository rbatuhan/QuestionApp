import { useState, useEffect } from 'react'
import questions from '../../public/assets/questions'
import Results from './Results';

function Questions() {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timer, setTimer] = useState(30); // Her soru ekranda en fazla 30sn kalması için
    const currentQuestion = questions[currentQuestionIndex];
    const [showOptions, setShowOptions] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);
    const [userAnswer, setUserAnswer] = useState([]);
    const [quizCompleted, setQuizCompleted] = useState(false);

    useEffect(() => {
        // İlk 10sn cevap şıkları görünmemesi için
        setShowOptions(false); 
        const countDown = timer > 0 && setInterval(() => {
            setTimer(prevTimer => prevTimer - 1);
        }, 1000);

        if (timer <= 20) {
            setShowOptions(true);
        }

        // Cevap şıklarından biri tıklandıktan ya da 30sn tamamlandıktan sonra yeni soruya geçmek için
        if (timer === 0) {
            nextQuestion(); 
        }

        return () => clearInterval(countDown);
    }, [timer, currentQuestionIndex]);

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimer(30);
            setShowOptions(false);
        } else {
            setQuizCompleted(true);
        }
    };

    const handleAnswer = (selectedOption) => {
        const isCorrect = selectedOption === currentQuestion.answer;
        if(isCorrect) {
            setCorrectAnswer(prevCorrect => prevCorrect + 1);
        } else {
            setWrongAnswer(prevWrong => prevWrong + 1);
        }
        setUserAnswer(prevAnswers => [
            ...prevAnswers, 
            {
                questionId: currentQuestion.id, 
                answer: selectedOption, isCorrect
            }
        ]);
        nextQuestion();
    };

    const finishQuiz = () => {
        setQuizCompleted(true);
      };

      return (
        <div>
          {!quizCompleted ? (
            <div className='questions'>
                <p className='timer'>{timer}</p>
                <img src={`/assets/pictures/${currentQuestion.media}`} alt={currentQuestion.media} width='500' />
                <h2>{currentQuestion.id}-{currentQuestion.question}</h2>
                {showOptions && (
                    <div className='options'>
                        {currentQuestion.options.map((item, index) => (
                            <button className='button' key={index} onClick={() => handleAnswer(item)}>
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </div>
          ) : (
            // Test bitiminde her soruya verilen yanıt ile doğru ve yanlış sayıları kullanıcı ile paylaşılacaktır.
            <Results userAnswer={userAnswer} correctAnswer={correctAnswer} wrongAnswer={wrongAnswer} />
          )}
        </div>
      );
}

export default Questions
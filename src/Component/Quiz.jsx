import React, { useEffect, useRef, useState } from 'react';
import Question from './Question';
import data from '../data';

const Quiz = () => {
    const totalQuestions = data.length;
    const [question, setQuestion] = useState(1);
    const [isAnswered, setIsAnswered] = useState(false);
    const [executed, setExecuted] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [finalScore, setFinalScore] = useState(0);
    const [errorMessage, setErrorMessage] = useState(null);
    const currentQuestion = data[question - 1];
    const childRef = useRef();
    const answersRef = useRef([...currentQuestion.incorrectAnswers, currentQuestion.correctAnswer]);
    const [congratulations, setCongratulations] = useState(null);

    // Shuffle answers only once when the component is first rendered
    useEffect(() => {
        if (!executed) {
            const answers = answersRef.current;
            for (let i = answers.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [answers[i], answers[j]] = [answers[j], answers[i]]; // Swap elements
            }
            setExecuted(true);
        }
    }, [executed]);

    const handleNextQuestionButton = () => {
        if (!isAnswered) {
            setErrorMessage(<div className='flex justify-center mt-8 bg-[rgb(255,224,224)] rounded-2xl w-full border border-red-500 p-0.5 lg:w-1/2'>
                <div className='text-red-500 py-2 '>
                    <p >Please Select one answer for the question</p>
                </div>
            </div>)
        } else {
            if (question === totalQuestions) {
                setCongratulations(
                    <div className='flex flex-col items-center'>
                        <div className='text-3xl font-semibold text-center text-white'>
                            {finalScore >= totalQuestions * 0.7 ?
                                (

                                    <p className='my-8'>Congratulations you have have passed the quiz!</p>

                                )
                                :
                                (
                                    <>
                                        <p>Better luck next time :( </p>
                                        <p className='my-8'>You need to score at least 70% to pass the quiz</p>
                                    </>
                                )}
                        </div>
                        <div >
                            <p className='text-3xl font-semibold text-center text-white'>Your Score is {finalScore}/{totalQuestions}</p>
                        </div>

                        <div className='m-auto text-white bg-indigo-600 w-full mt-8 rounded-lg text-md font-semibold py-[14px] px-[20px] uppercase cursor-pointer text-center lg:px-[0px] lg:w-49' onClick={() => window.location.reload()}>
                            Try Again
                        </div>



                    </div>
                );
                setQuizCompleted(true);
            } else {
                // to reset the child component state when next button is clicked
                if (childRef.current) {
                    childRef.current.resetState();
                }
                setQuestion(question + 1);
                setExecuted(false);
                setErrorMessage(null); // Reset the executed flag for the next question
                // setting up the answers array for the new question
                answersRef.current = [...data[question].incorrectAnswers, data[question].correctAnswer];
            }
        }
    };

    return (
        <div className='w-full lg:w-[975px]'>
            {quizCompleted ? (
                congratulations
            ) : (
                <>
                    <div className='mt-10 text-xl text-white/60'>
                        <h2>Question {question}/{totalQuestions}</h2>
                    </div>
                    <Question
                        question={currentQuestion.question}
                        incorrectAnswers={currentQuestion.incorrectAnswers}
                        correctAnswer={currentQuestion.correctAnswer}
                        answers={answersRef.current}
                        ref={childRef}
                        passScore={(score) => {
                            setFinalScore(score)
                        }}
                        onQuestionAnswered={(ans) => setIsAnswered(ans)}
                    />
                    <div className='flex justify-center'>
                        <div className='m-auto text-white bg-indigo-600 w-full mt-4 rounded-lg text-md font-semibold py-[14px] px-[20px] uppercase cursor-pointer text-center lg:px-[0px] lg:w-49' onClick={handleNextQuestionButton}>
                            Next Question
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        {errorMessage}
                    </div>


                </>
            )}
        </div>
    );
};

export default Quiz;

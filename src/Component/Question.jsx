import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import Answer from './Answer'

const Question = forwardRef(({ props, question,answers, correctAnswer,onQuestionAnswered,passScore }, ref) => {
    const [answerSelected, setAnswerSelected] = useState('')
    const [isAnswered, setIsAnswered] = useState(false)
    const [correct, setCorrect] = useState(false)
    const [score,setScore] = useState(0);
    
    //method executed to reset the state when next button is clicked
    useImperativeHandle(ref, () => ({
        resetState() {
            setAnswerSelected('');
            setIsAnswered(false);
            setCorrect(false);
            onQuestionAnswered(false)
        }
    }));

    const verifyAnswerHandler = (ans) => {
        setAnswerSelected(ans)
        setIsAnswered(true)
        if (ans === correctAnswer) {
            setCorrect(true)
            setScore(score+1)
            passScore(score+1)
        }
        onQuestionAnswered(true)


    }
    return (
        <div>
            <div className='mt-4 text-2xl text-white'>{question}</div>
            <div className='flex flex-col lg:flex-row flex-wrap justify-between mt-12'>
                {answers.map((answer, index) =>
                    <Answer
                        onChangeColor={verifyAnswerHandler}
                        key={answer}
                        id={index}
                        ans={answer}
                        isAnswered={isAnswered}
                        correctAnswer={correctAnswer}
                        answerSelected={answerSelected}
                        correct={correct}
                    />)}
            </div>

        </div>
    )
});

export default Question

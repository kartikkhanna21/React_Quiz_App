import React, { useEffect, useState } from 'react'

const Answer = ({ correctAnswer, ans, id, onChangeColor, isAnswered, answerSelected }) => {
    const verifyAnswerHandler = () => {
        onChangeColor(ans);
    }
    return (
        <div
            className={isAnswered ?
                ans === correctAnswer ? 'w-full lg:w-48 bg-white border-2 border-indigo-600 min-h-[45px] cursor-not-allowed pointer-events-none mb-8 flex rounded-lg correct-answer'
                    :
                    ans === answerSelected ? 'w-full lg:w-48 bg-white border-2 border-indigo-600 min-h-[45px] cursor-not-allowed pointer-events-none mb-8 flex rounded-lg wrong-answer'
                        :
                        'w-full lg:w-48 bg-white border-2 border-indigo-600 min-h-[45px] cursor-not-allowed pointer-events-none mb-8 flex rounded-lg'
                :
                'w-full lg:w-48 bg-white border-2 border-indigo-600 min-h-[45px] cursor-pointer mb-8 flex rounded-lg'
            }
            onClick={verifyAnswerHandler}>
            <div className="answer-letter ">{String.fromCharCode(65 + id)}</div>
            <div className="answer-text">{ans}</div>
        </div>
    )
}

export default Answer

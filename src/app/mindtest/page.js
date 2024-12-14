'use client'

import Question from "./question"
import Answer from "./answer"
import { useState } from "react"
import QuestionData from "../../../api/questions.json"


export default function Test() {
  const questions = QuestionData

  const [ currentQuestion, setCurrentQuestion ] = useState(0)
  const [ choiceAnswer, setChoiceAnswer ] = useState(null)
  const [ start, setStart ] = useState(true)
  const [ end, setEnd ] = useState(false)

  return (
    <div className="p-6 sm:p-11 w-11/12 sm:w-8/12 bg-white border-black border flex flex-col">
      { start ?           
        <button 
          onClick={ () => setStart(false) }
          className="hover:bg-yellow-500 bg-yellow-300  \
            p-3 px-5 self-center rounded-md border transition" 
        >
          Bắt đầu 
        </button> :

        questions[currentQuestion] ? 
          <>
            <Question className="my-3">
              { questions[currentQuestion].question }
            </Question>
            <div>
              {questions[currentQuestion].choices.map((choice, index) =>
                <Answer
                  onClick={ () => setChoiceAnswer(index + 1) } 
                  highlight={ index + 1 == choiceAnswer ? true : false }
                  key={ index }
                >
                  { choice }
                </Answer>
              )}
            </div>
            <button 
              onClick={ () => {
                if (choiceAnswer) {
                  setCurrentQuestion(currentQuestion + 1) 
                  setChoiceAnswer(null)
                }
              }}
              className={ 
                (choiceAnswer ? "hover:bg-yellow-500" : "cursor-not-allowed opacity-80") + " bg-yellow-300  \
                p-3 px-5 self-end rounded-md border transition" 
              }>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </> :
          ""
      }
    </div>
  )
}
'use client'

import Question from "./question"
import Answer from "./answer"
import { useState, useRef } from "react"
import { checkAnswer, classifyDepression } from "./analysis_question"
import QuestionData from "../../../api/questions.json"


export default function Test({ type }) {
  const typeQuestion = import("../../../api/tools/" + type + ".json")
  const questions = typeQuestion.questions

  const [ currentQuestion, setCurrentQuestion ] = useState(0) 
  const [ choiceAnswer, setChoiceAnswer ] = useState(null) // 0, 1, 2, 3
  const [ start, setStart ] = useState(true)
  const scores = useRef({
    score1: 0, score2: 0, score3: 0
  })

  const resetScores = () => {
    scores.current.score1 = 0
    scores.current.score2 = 0
    scores.current.score3 = 0
  }

  return (
    <div className="bg-white flex flex-col">
      { start ?           
        <button 
          onClick={ () => setStart(false) }
          className="button-question"
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
                  onClick={ () => setChoiceAnswer(index) } 
                  highlight={ index == choiceAnswer ? true : false }
                  key={ index }
                >
                  { choice }
                </Answer>
              )}
            </div>
            <button 
              onClick={ () => {
                if (choiceAnswer != null) {
                  // console.log(choiceAnswer)
                  checkAnswer(currentQuestion, choiceAnswer, scores.current)
                  setCurrentQuestion(currentQuestion + 1) 
                  setChoiceAnswer(null)
                }
              }}
              className={ 
                (choiceAnswer != null ? "hover:bg-yellow-500" : "cursor-not-allowed opacity-80") + " bg-yellow-300  \
                p-3 px-5 self-end rounded-md border transition" 
              }>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </> :
          <>
            {/* { console.log(scores) } */}
            <h1 className="text-xl self-center flex">
              <p className="underline underline-offset-1 mr-2">Kết quả: </p> 
            </h1>
            <button 
              onClick={ () => {
                resetScores()
                setStart(true)
                setCurrentQuestion(0)
                setChoiceAnswer(null) 
              }}
              className="hover:bg-yellow-500 bg-yellow-300  \
                p-2 px-5 mt-3 self-center rounded-md border transition" 
            >
              Trở lại
            </button>
          </>
      }
    </div>
  )
}
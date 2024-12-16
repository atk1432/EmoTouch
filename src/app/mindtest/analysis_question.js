export function checkAnswer(currentQuestion, choice, scores) {
  if (currentQuestion <= 21) {
    scores.score1 += choice
  } else if (currentQuestion <= 40) {
    scores.score2 += choice 
  } else {
    scores.score3 += choice + 1
  }
}


export function checkAnswer(currentQuestion, choice, scores) {
  if (currentQuestion <= 21) {
    scores.score1 += choice
  } else if (currentQuestion <= 40) {
    scores.score2 += choice 
  } else {
    scores.score3 += choice + 1
  }
}

export function classifyDepression(chenScore, psqiScore, dass21Score) {
  var dass21_score = dass21Score
  var psqi_score = psqiScore
  if (chenScore <= 30) {
      if (psqiScore < 5) {
          if (dass21Score < 10) {
              return "Không bị trầm cảm";
          } else if (dass21Score >= 10 && dass21Score <= 13) {
              return "Trầm cảm nhẹ";
          } else if (dass21Score >= 14 && dass21Score <= 20) {
              return "Trầm cảm vừa";
          } else if (dass21Score >= 21 && dass21Score <= 27) {
              return "Trầm cảm nặng";
          } else {
              return "Trầm cảm nghiêm trọng";
          }
      } else if (psqiScore >= 5 && psqiScore <= 10) {
          if (dass21Score < 10) {
              return "Không bị trầm cảm";
          } else if (dass21Score >= 10 && dass21Score <= 13) {
              return "Trầm cảm nhẹ";
          } else if (dass21Score >= 14 && dass21Score <= 20) {
              return "Trầm cảm vừa";
          } else if (dass21Score >= 21 && dass21Score <= 27) {
              return "Trầm cảm nặng";
          } else {
              return "Trầm cảm nghiêm trọng";
          }
      } else {
          if (dass21Score < 10) {
              return "Không bị trầm cảm";
          } else if (dass21Score >= 10 && dass21Score <= 13) {
              return "Trầm cảm nhẹ";
          } else if (dass21Score >= 14 && dass21Score <= 20) {
              return "Trầm cảm vừa";
          } else if (dass21Score >= 21 && dass21Score <= 27) {
              return "Trầm cảm nặng";
          } else {
              return "Trầm cảm nghiêm trọng";
          }
      }
  } else if (chenScore >= 31 && chenScore <= 50) {
      if (psqiScore < 5) {
          if (dass21Score < 10) {
              return "Không bị trầm cảm";
          } else if (dass21Score >= 10 && dass21Score <= 13) {
              return "Trầm cảm nhẹ";
          } else if (dass21Score >= 14 && dass21Score <= 20) {
              return "Trầm cảm vừa";
          } else if (dass21Score >= 21 && dass21Score <= 27) {
              return "Trầm cảm nặng";
          } else {
              return "Trầm cảm nghiêm trọng";
          }
      } else if (psqiScore >= 5 && psqiScore <= 10) {
          if (dass21Score < 10) {
              return "Không bị trầm cảm";
          } else if (dass21Score >= 10 && dass21Score <= 13) {
              return "Trầm cảm nhẹ";
          } else if (dass21Score >= 14 && dass21Score <= 20) {
              return "Trầm cảm vừa";
          } else if (dass21Score >= 21 && dass21Score <= 27) {
              return "Trầm cảm nặng";
          } else {
              return "Trầm cảm nghiêm trọng";
          }
      } else {
          if (dass21Score < 10) {
              return "Không bị trầm cảm";
          } else if (dass21Score >= 10 && dass21Score <= 13) {
              return "Trầm cảm nhẹ";
          } else if (dass21Score >= 14 && dass21Score <= 20) {
              return "Trầm cảm vừa";
          } else if (dass21Score >= 21 && dass21Score <= 27) {
              return "Trầm cảm nặng";
          } else {
              return "Trầm cảm nghiêm trọng";
          }
      }
  } else if (chenScore >= 51 && chenScore <= 70) {
      if (psqiScore < 5) {
          if (dass21Score < 10) {
              return "Không bị trầm cảm";
          } else if (dass21Score >= 10 && dass21Score <= 13) {
              return "Trầm cảm nhẹ";
          } else if (dass21Score >= 14 && dass21Score <= 20) {
              return "Trầm cảm vừa";
          } else if (dass21Score >= 21 && dass21Score <= 27) {
              return "Trầm cảm nặng";
          } else {
              return "Trầm cảm nghiêm trọng";
          }
      } else if (psqiScore >= 5 && psqiScore <= 10) {
          if (dass21Score < 10) {
              return "Không bị trầm cảm";
          } else if (dass21Score >= 10 && dass21Score <= 13) {
              return "Trầm cảm nhẹ";
          } else if (dass21Score >= 14 && dass21Score <= 20) {
              return "Trầm cảm vừa";
          } else if (dass21Score >= 21 && dass21Score <= 27) {
              return "Trầm cảm nặng";
          } else {
              return "Trầm cảm nghiêm trọng";
          }
      } else {
          if (dass21Score < 10) {
              return "Không bị trầm cảm";
          } else if (dass21Score >= 10 && dass21Score <= 13) {
              return "Trầm cảm nhẹ";
          } else if (dass21Score >= 14 && dass21Score <= 20) {
              return "Trầm cảm vừa";
          } else if (dass21Score >= 21 && dass21Score <= 27) {
              return "Trầm cảm nặng";
          } else {
              return "Trầm cảm nghiêm trọng";
          }
      }
  } else {
    if (psqi_score < 5) {
      if (dass21_score < 10) {
          return "Không bị trầm cảm";
      } else if (dass21_score >= 10 && dass21_score <= 13) {
          return "Trầm cảm nhẹ";
      } else if (dass21_score >= 14 && dass21_score <= 20) {
          return "Trầm cảm vừa";
      } else if (dass21_score >= 21 && dass21_score <= 27) {
          return "Trầm cảm nặng";
      } else {
          return "Trầm cảm nghiêm trọng";
      }
  } else if (psqi_score >= 5 && psqi_score <= 10) {
      if (dass21_score < 10) {
          return "Không bị trầm cảm";
      } else if (dass21_score >= 10 && dass21_score <= 13) {
          return "Trầm cảm nhẹ";
      } else if (dass21_score >= 14 && dass21_score <= 20) {
          return "Trầm cảm vừa";
      } else if (dass21_score >= 21 && dass21_score <= 27) {
          return "Trầm cảm nặng";
      } else {
          return "Trầm cảm nghiêm trọng";
      }
  } else {
      if (dass21_score < 10) {
          return "Không bị trầm cảm";
      } else if (dass21_score >= 10 && dass21_score <= 13) {
          return "Trầm cảm nhẹ";
      } else if (dass21_score >= 14 && dass21_score <= 20) {
          return "Trầm cảm vừa";
      } else if (dass21_score >= 21 && dass21_score <= 27) {
          return "Trầm cảm nặng";
      } else {
          return "Trầm cảm nghiêm trọng";
      }
    }
  }
}

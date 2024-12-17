function between(x, min, max) {
  return x >= min && x <= max;
}

export function checkAnswer(type, currentQuestion, choice, scores) {
  switch (type) {
    case "dass21":
      // https://maic.qld.gov.au/wp-content/uploads/2016/07/DASS-21.pdf
      // https://www.youtube.com/watch?v=P7oKAR8khXU&t=285s
      // https://bookingcare.vn/cam-nang/bai-test-danh-gia-lo-au--tram-cam--stress-dass-21-p177.html
      if ([3, 5, 10, 13, 16, 17, 21].includes(currentQuestion)) 
        scores.depression += choice
      else if ([2, 4, 7, 9, 15, 19, 20].includes(currentQuestion))
        scores.anxiety += choice
      else
        scores.stress += choice
  } 
}

export function classify(type, scores) {


  switch (type) {
    case "dass21":
      const depression = scores.depression * 2
      const anxiety = scores.anxiety * 2
      const stress = scores.stress * 2
      const disease = [
        { text: "Bình thường", status: "normal" },
        { text: "Nhẹ", status: "mild" },
        { text: "Vừa", status: "moderate" },
        { text: "Nặng", status: "severe" },
        { text: "Rất nặng", status: "ex_severe" }
      ]
      const result = {}

      if (between(depression, 0, 9)) {
        result.depression = disease[0]
      } else if (between(depression, 10, 13)) {
        result.depression = disease[1]
      } else if (between(depression, 14, 20)) {
        result.depression = disease[2]
      } else if (between(depression, 21, 27)) {
        result.depression = disease[3]
      } else {
        result.depression = disease[4]
      }

      if (between(anxiety, 0, 7)) {
        result.anxiety = disease[0]
      } else if (between(anxiety, 8, 9)) {
        result.anxiety = disease[1]
      } else if (between(anxiety, 10, 14)) {
        result.anxiety = disease[2]
      } else if (between(anxiety, 15, 19)) {
        result.anxiety = disease[3]
      } else {
        result.anxiety = disease[4]
      }

      if (between(stress, 0, 14)) {
        result.stress = disease[0]
      } else if (between(stress, 15, 18)) {
        result.stress = disease[1]
      } else if (between(stress, 19, 25)) {
        result.stress = disease[2]
      } else if (between(stress, 26, 33)) {
        result.stress = disease[3]
      } else {
        result.stress = disease[4]
      }

      return result
  }
}


export default function handler(req, res) {
  const { name } = req.query
  if (name == 'dass21')
    res.status(200).json({
        "name": "DASS-21",
        "questions": [
            "Tôi nhận thấy khó mà nghỉ ngơi",
            "Tôi thấy mình bị khô miệng",  
            "Tôi không thấy có một cảm giác lạc quan nào cả",
            "Tôi bị khó thở (thở nhanh, khó thở mà không do làm việc mệt)",
            "Tôi thấy khó mà bắt tay vào làm công việc",
            "Tôi đã phản ứng cách quá lố khi có những sự việc xãy ra",
            "Tay tôi bị run",
            "Tôi thấy mình đã dùng quá nhiều năng lực vào việc lo lắng",
            "Tôi lo mình đến những nơi mà tôi có thể bị hốt hoảng và tự làm mất mặt",
            "Tôi thấy tương lai mình chả có gì để mong chờ cả",
            "Tôi thấy bồn chồn",
            "Tôi thấy khó mà thư giãn",
            "Tôi thấy mình xuống tinh thần và buồn rầu",
            "Tôi thấy thiếu kiên nhẫn với những điều cản trở việc tôi đang làm",
            "Tôi thấy mình gần như bị hốt hoảng",
            "Tôi không thấy hăng hái để làm bất cứ chuyện gì",
            "Tôi thấy mình là người kém giá trị",
            "Tôi thấy mình rất dễ nhạy cảm",
            "Tôi thấy tim mình đập nhanh, đập hụt nhịp mà không do làm việc mệt",
            "Tôi cảm thấy sợ vô cớ",
            "Tôi cảm thấy cuộc sống mình không có ý nghĩa"
        ],
        "choices": [
            "Không xảy ra",
            "Thỉnh thoảng",
            "Thường xảy ra",
            "Rất thường xảy ra"
        ],
        "scores": ["depression", "anxiety", "stress"]
    })
  else {
    res.status(200).json({ hello: "Hello" })
  }
}
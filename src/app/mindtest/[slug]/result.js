import { classify } from "../analysis_question"

export default function Result({ type, scores }) {
  const typeResult = classify(type, scores)
  console.log(typeResult)
  const result = (() => {
    if (type == 'dass21')
      return (<>
        <tr>
          <td className="p-3 border">Trầm cảm </td>
          <td className="p-3 border">{ scores.depression }</td>
          <td className="p-3 border">{ typeResult.depression.text }</td>
        </tr>
        <tr>
          <td className="p-3 border">Lo lắng </td>
          <td className="p-3 border">{ scores.anxiety }</td>
          <td className="p-3 border">{ typeResult.anxiety.text }</td>
        </tr>
        <tr>
          <td className="p-3 border">Stress </td>
          <td className="p-3 border">{ scores.stress }</td>
          <td className="p-3 border">{ typeResult.stress.text }</td>
        </tr>

      </>)
  })()

  return (
    <table className="border border-collapse">
      <thead>
        <tr>
          <th className="p-3 border">Loại</th>
          <th className="p-3 border">Điểm</th>
          <th className="p-3 border">Tình trạng</th>
        </tr>
      </thead>
      <tbody>
        { result }
      </tbody>
    </table>
)}
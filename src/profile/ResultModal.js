export default function ResultModal({ resultInfo }) {
  console.log(resultInfo.incorrect);
  return (
    <div>
      <div>{resultInfo.infinitive ? resultInfo.infinitive.charAt(0).toUpperCase() + resultInfo.infinitive.slice(1) : `${resultInfo.tense} - ${resultInfo.subtense}`}</div>
      <div>{resultInfo.score}%</div>
      <div>
        <div>Correct: {resultInfo.correct.length}</div>
        <ol>
          {resultInfo.correct.map((info, i) => (
            <li key={i}>{info}</li>
          ))}
        </ol>
      </div>
      <div>
        <div>Incorrect: {resultInfo.incorrect.length}</div>
        <ol>
          {resultInfo.incorrect.map((info, i) => (
            <li key={i}>{info}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

import Result from "./Result";

export default function ResultsModal({ results }) {
  return (
    <div>
      {results.map((sum, i) => (
        <Result key={i} score={sum.score} type={sum.infinitive === "" ? `${sum.tense} - ${sum.subtense}` : (sum.infinitive.charAt(0).toUpperCase() + sum.infinitive.slice(1)) } />
      ))}
    </div>
  )
}

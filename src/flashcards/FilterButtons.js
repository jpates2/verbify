export default function FilterButtons({ onTenseFilter }) {
  return (
    <div>
      <button onClick={() => onTenseFilter("verb")}>Learn by Verb</button>
      <button onClick={() => onTenseFilter("tense")}>Learn by Tense</button>
    </div>
  )
}

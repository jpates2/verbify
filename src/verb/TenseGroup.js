import { useState } from "react";
import VerbPair from "./VerbPair";
import classes from "./TenseGroup.module.css";
import TenseList from "./TenseList";

export default function TenseGroup({ children, conjugations, tenses, tenseSection }) {
  const [activeTense, setActiveTense] = useState("present");
  const [imperativeTense, setImperativeTense] = useState("affirmative");

  function handleTenseClick(tense) {
    if (tenseSection !== "imperative") {setActiveTense(tense)}
    if (tenseSection === "imperative") {setImperativeTense(tense)}
  }

  const selectedTense = conjugations[tenseSection][activeTense];
  const selectedImperativeTense = conjugations[tenseSection][imperativeTense];

  let verbContent;
  if (["indicative", "subjunctive", "progressive", "perfect", "perfect subjunctive"].includes(tenseSection)) {
    verbContent = (
      <div>
        <VerbPair pronoun="yo" conVerb={selectedTense.yo} />
        <VerbPair pronoun="tu" conVerb={selectedTense.tu} />
        <VerbPair pronoun="el / ella" conVerb={selectedTense.ud} />
        <VerbPair pronoun="nosotros / as" conVerb={selectedTense.nosotros} />
        <VerbPair pronoun="vosotros / as" conVerb={selectedTense.vosotros} />
        <VerbPair pronoun="ellos / ellas" conVerb={selectedTense.uds} />
      </div>
    )
  }

  if (tenseSection === "imperative") {
    verbContent = (
      <div>
        <VerbPair pronoun="tu" conVerb={selectedImperativeTense.tu} />
        <VerbPair pronoun="el / ella" conVerb={selectedImperativeTense.ud} />
        <VerbPair pronoun="vosotros / as" conVerb={selectedImperativeTense.vosotros} />
        <VerbPair pronoun="ellos / ellas" conVerb={selectedImperativeTense.uds} />
      </div>
    )
  }

  if (tenseSection === "participles") {
    verbContent = (
      <div>
        <div>{selectedTense}</div>
      </div>
    )
  }

  return (
    <section className={classes["tense-group__container"]}>
      <div className={classes["tense-group__header"]}>{children}</div>
      {tenseSection !== "imperative" && <TenseList tenses={tenses} activeTense={activeTense} onTenseClick={handleTenseClick} tenseSection={tenseSection} />}
      {tenseSection === "imperative" && <TenseList tenses={tenses} activeTense={imperativeTense} onTenseClick={handleTenseClick} tenseSection={tenseSection} />}
      {verbContent}
    </section>
  )
}

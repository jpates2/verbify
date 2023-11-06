import { useState } from "react";
import VerbPair from "./VerbPair";
import classes from "./TenseGroup.module.css";
import TenseList from "./TenseList";
import { VerbExample } from "../info/verb-info";

export default function TenseGroup({ children, tenses, tenseSection }) {
  const [activeTense, setActiveTense] = useState("present");
  const [imperativeTense, setImperativeTense] = useState("positive");

  function handleTenseClick(tense) {
    if (tenseSection !== "imperative") {setActiveTense(tense)}
    if (tenseSection === "imperative") {setImperativeTense(tense)}
  }

  const selectedTense = VerbExample[tenseSection][activeTense];
  const selectedImperativeTense = VerbExample[tenseSection][imperativeTense];

  let verbContent;
  if (["indicative", "subjunctive", "progressive", "perfect", "perfect-subjunctive"].includes(tenseSection)) {
    verbContent = (
      <div>
        <VerbPair pronoun="yo" conVerb={selectedTense.yo} />
        <VerbPair pronoun="tu" conVerb={selectedTense.tu} />
        <VerbPair pronoun="el / ella / usted" conVerb={selectedTense.el} />
        <VerbPair pronoun="nosotros / nosotras" conVerb={selectedTense.nos} />
        <VerbPair pronoun="vosotros / vosotras" conVerb={selectedTense.vos} />
        <VerbPair pronoun="ellos / ellas / ustedes" conVerb={selectedTense.ellos} />
      </div>
    )
  }

  if (tenseSection === "imperative") {
    verbContent = (
      <div>
        <VerbPair pronoun="tu" conVerb={selectedImperativeTense.tu} />
        <VerbPair pronoun="el / ella / usted" conVerb={selectedImperativeTense.el} />
        <VerbPair pronoun="nosotros / nosotras" conVerb={selectedImperativeTense.nos} />
        <VerbPair pronoun="vosotros / vosotras" conVerb={selectedImperativeTense.vos} />
        <VerbPair pronoun="ellos / ellas / ustedes" conVerb={selectedImperativeTense.ellos} />
      </div>
    )
  }

  if (tenseSection === "participle") {
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

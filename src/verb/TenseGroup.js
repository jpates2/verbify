import { useState } from "react";
import VerbPair from "./VerbPair";
import classes from "./TenseGroup.module.css";
import TenseList from "./TenseList";

const verbExample = {
  indicative: {
    present: {
      yo: "soy",
      tu: "eres",
      el: "es",
      nos: "somos",
      vos: "sois",
      ellos: "son"
    },
    preterite: {
      yo: "fui",
      tu: "fuiste",
      el: "fue",
      nos: "fuimos",
      vos: "fuisteis",
      ellos: "fueron"
    },
    imperfect: {
      yo: "era",
      tu: "eras",
      el: "era",
      nos: "eramos",
      vos: "erais",
      ellos: "eran"
    },
    conditional: {
      yo: "seria",
      tu: "serias",
      el: "seria",
      nos: "seriamos",
      vos: "seriais",
      ellos: "serian"
    },
    future: {
      yo: "sere",
      tu: "seras",
      el: "sera",
      nos: "seremos",
      vos: "sereis",
      ellos: "seran"
    }
  },
  subjunctive: {
    present: {
      yo: "sea",
      tu: "seas",
      el: "sea",
      nos: "seamos",
      vos: "seais",
      ellos: "sean"
    },
    imperfect: {
      yo: "fuera / fuesa",
      tu: "fueras / fuesas",
      el: "fuera / fuesa",
      nos: "fueramos / fuesemos",
      vos: "fuerais / fueseis",
      ellos: "fueran / fuesen"
    },
    future: {
      yo: "fuere",
      tu: "fueres",
      el: "fuere",
      nos: "fueremos",
      vos: "fuereis",
      ellos: "feueren"
    }
  }
}

export default function TenseGroup({ children, tenses, tenseSection }) {
  const [activeTense, setActiveTense] = useState("present");

  function handleTenseClick(tense) {
    setActiveTense(tense);
  }

  const selectedTense = verbExample[tenseSection][activeTense];

  return (
    <section className={classes["tense-group__container"]}>
      <div className={classes["tense-group__header"]}>{children}</div>
      <TenseList tenses={tenses} activeTense={activeTense} onTenseClick={handleTenseClick} tenseSection={tenseSection} />
      <div>
        <VerbPair pronoun="yo" conVerb={selectedTense.yo} />
        <VerbPair pronoun="tu" conVerb={selectedTense.tu} />
        <VerbPair pronoun="el / ella / usted" conVerb={selectedTense.el} />
        <VerbPair pronoun="nosotros / nosotras" conVerb={selectedTense.nos} />
        <VerbPair pronoun="vosotros / vosotras" conVerb={selectedTense.vos} />
        <VerbPair pronoun="ellos / ellas / ustedes" conVerb={selectedTense.ellos} />
      </div>
    </section>
  )
}

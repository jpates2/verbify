import { useState } from "react";
import { motion } from "framer-motion";
import VerbPair from "../verbs/VerbPair";
import { useTense } from "../hooks/useTense";
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
  const [activeTenses, setActiveTenses] = useState({
    indicative: "present",
    subjunctive: "present"
  });

  function handleTensesClick(tense) {
    setActiveTenses((prevTense) => {
      return {
        ...prevTense,
        [tenseSection]: tense
      }
    });
  }

  const selectedTense = verbExample[tenseSection][activeTenses[tenseSection]];

  return (
    <section className={classes["tense-group__container"]}>
      <div className={classes["tense-group__header"]}>{children}</div>
      <motion.ul className={classes["tense-group__list"]}>
      {tenses.map((tense) => (
        <motion.li key={tense}>
          <div onClick={() => handleTensesClick(tense.toLowerCase())}>{tense}</div>
          {activeTenses[tenseSection] === tense.toLowerCase() && (
            <motion.div className={classes["tense__underline"]} layoutId="animate-tense"></motion.div>
          )}
        </motion.li>
      ))}
    </motion.ul>
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

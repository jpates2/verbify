import { useState } from "react";
import { motion } from "framer-motion";
import VerbPair from "../verbs/VerbPair";
import classes from "./TenseGroup.module.css";

const verbExample = {
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
}

export default function TenseGroup({ children, tenses }) {
  const [verbTense, setVerbTense] = useState("present");
  const selectedTense = verbExample[verbTense];

  function handleVerbClick(tense) {
    setVerbTense(tense);
  }

  return (
    <section className={classes["tense-group__container"]}>
      <div className={classes["tense-group__header"]}>{children}</div>
      <motion.ul className={classes["tense-group__list"]}>
        {tenses.map(tense => (
          <motion.li key={`${children} ${tense}`} >
            <div onClick={() => {handleVerbClick(tense.toLowerCase())}}>{tense}</div>
            {verbTense === tense.toLowerCase() && <motion.div className={classes["tense__underline"]} layoutId="animate-tense" ></motion.div>}
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

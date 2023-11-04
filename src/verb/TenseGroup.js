import VerbPair from "../verbs/VerbPair";
import classes from "./TenseGroup.module.css";

export default function TenseGroup({ children, tenses }) {
  return (
    <section className={classes["tense-group__container"]}>
      <div className={classes["tense-group__header"]}>{children}</div>
      <ul className={classes["tense-group__list"]}>
        {tenses.map(tense => (
          <li key={`${children} ${tense}`}>{tense}</li>
        ))}
      </ul>
      <div>
        <VerbPair pronoun="yo" conVerb="soy" />
        <VerbPair pronoun="tu" conVerb="eres" />
        <VerbPair pronoun="el / ella / usted" conVerb="es" />
        <VerbPair pronoun="nosotros / nosotras" conVerb="somos" />
        <VerbPair pronoun="vosotros / vosotras" conVerb="sois" />
        <VerbPair pronoun="ellos / ellas / ustedes" conVerb="son" />
      </div>
    </section>
  )
}

import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Header from "../verb/Header";
import Nav from "../layout/Nav";
import TenseGroup from "../verb/TenseGroup";

export default function VerbPage() {
  let params = useParams();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Nav />
      <Header verb={params.verb} />
      <TenseGroup tenseSection="indicative" tenses={["Present", "Preterite", "Imperfect", "Conditional", "Future"]}>
        Present Indicative
      </TenseGroup>
      <TenseGroup tenseSection="participle" tenses={["Present", "Past"]}>
        Participle
      </TenseGroup>
      <TenseGroup tenseSection="imperative" tenses={["Positive", "Negative"]}>
        Imperative
      </TenseGroup>
      <TenseGroup tenseSection="subjunctive" tenses={["Present", "Imperfect", "Future"]}>
        Subjunctive
      </TenseGroup>
      <TenseGroup tenseSection="perfect-subjunctive" tenses={["Present", "Past", "Future"]}>
        Perfect Subjunctive
      </TenseGroup>
      <TenseGroup tenseSection="progressive" tenses={["Present", "Preterite", "Imperfect", "Conditional", "Future"]}>
        Progressive
      </TenseGroup>
      <TenseGroup tenseSection="perfect" tenses={["Present", "Preterite", "Pluperfect", "Conditional", "Future"]}>
        Perfect
      </TenseGroup>
    </motion.div>
  );
}

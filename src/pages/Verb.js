import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Header from "../verb/Header";
import Nav from "../layout/Nav";
import TenseGroup from "../verb/TenseGroup";
import { fetchConjugations } from "../util/http";
import { VerbExample } from "../info/verb-info";
import Footer from "../layout/Footer";

export default function VerbPage() {
  let params = useParams();
  const verb = params.verb;

  const [conjugations, setConjugations] = useState(VerbExample);

  useEffect(() => {
    async function getConjugations() {
      try {
        const verbConjugations = await fetchConjugations(verb);
        setConjugations(verbConjugations);
      } catch (error) {

      }
    }
    getConjugations();
  }, [verb])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Nav />
      <Header verb={verb} />
      <TenseGroup verb={verb} conjugations={conjugations} tenseSection="indicative" tenses={["Present", "Preterite", "Imperfect", "Conditional", "Future"]}>
        Present Indicative
      </TenseGroup>
      <TenseGroup verb={verb} conjugations={conjugations} tenseSection="participle" tenses={["Present", "Past"]}>
        Participle
      </TenseGroup>
      <TenseGroup verb={verb} conjugations={conjugations} tenseSection="imperative" tenses={["Affirmative", "Negative"]}>
        Imperative
      </TenseGroup>
      <TenseGroup verb={verb} conjugations={conjugations} tenseSection="subjunctive" tenses={["Present", "Imperfect", "Future"]}>
        Subjunctive
      </TenseGroup>
      <TenseGroup verb={verb} conjugations={conjugations} tenseSection="perfect-subjunctive" tenses={["Present", "Past", "Future"]}>
        Perfect Subjunctive
      </TenseGroup>
      <TenseGroup verb={verb} conjugations={conjugations} tenseSection="progressive" tenses={["Present", "Preterite", "Imperfect", "Conditional", "Future"]}>
        Progressive
      </TenseGroup>
      <TenseGroup verb={verb} conjugations={conjugations} tenseSection="perfect" tenses={["Present", "Preterite", "Pluperfect", "Conditional", "Future"]}>
        Perfect
      </TenseGroup>
      <Footer />
    </motion.div>
  );
}

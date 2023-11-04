import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Header from "../verb/Header";
import Nav from "../layout/Nav";

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
    </motion.div>
  );
}

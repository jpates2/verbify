import React from "react";
import { motion } from "framer-motion";
import Nav from "../layout/Nav";
import Header from "../verbs/Header";
import VerbSearch from "../verbs/VerbSearch";
import VerbCards from "../verbs/VerbCards";

export default function VerbsPage() {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
      <Nav />
      <Header />
      <VerbSearch />
      <VerbCards />
    </motion.div>
  );
}

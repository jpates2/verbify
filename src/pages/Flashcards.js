import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../flashcards/Header";
import Nav from "../layout/Nav";
import FilterButtons from "../flashcards/FilterButtons";
import VerbFilter from "../flashcards/VerbFilter";
import TenseFilter from "../flashcards/TenseFilter";

export default function FlashcardsPage() {
  const [flashcardFilter, setFlashcardFilter] = useState("tense");

  function handleFlashcardFilter(tense) {
    setFlashcardFilter(tense);
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Nav />
        <Header />
        <FilterButtons onFlashcardFilter={handleFlashcardFilter} filter={flashcardFilter} />
        {flashcardFilter === "verb" && <VerbFilter />}
        {flashcardFilter === "tense" && <TenseFilter />}
      </motion.div>
    </AnimatePresence>
  );
}

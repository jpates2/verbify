import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../flashcards/Header";
import Nav from "../layout/Nav";

export default function FlashcardsPage() {
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
      </motion.div>
    </AnimatePresence>
  );
}

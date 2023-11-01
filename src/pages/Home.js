import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../layout/Header";
import Intro from "../components/Intro";
import Learn from "../components/Learn";
import Nav from "../layout/Nav";
import StartLearning from "../components/StartLearning";
import Reviews from "../components/Reviews";

export default function HomePage() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0,
          transition: {duration: 2}
        }}
        transition={{ duration: 2 }}
      >
        <Nav />
        <main>
          <Header />
          <Intro />
          <Learn />
          <StartLearning />
          <Reviews />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}

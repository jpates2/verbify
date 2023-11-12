import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "../layout/Nav";
import Header from "../verbs/Header";
import VerbSearch from "../verbs/VerbSearch";
import VerbCards from "../verbs/VerbCards";
import Footer from "../layout/Footer";

export default function VerbsPage() {
  const [searchTerms, setSearchTerms] = useState("");

  function handleSearch (event) {
    setSearchTerms(event.target.value.toLowerCase())
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Nav />
      <Header />
      <VerbSearch onSearch={handleSearch} />
      <VerbCards searchTerms={searchTerms} />
      <Footer />
    </motion.div>
  );
}

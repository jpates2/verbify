import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import Border from "../flashcard/Border";
import Header from "../flashcard/Header";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import classes from "../flashcard/Border.module.css";
import Content from "../flashcard/Content";
import { fetchRandomVerb } from '../util/http';
import Modal from '../layout/Modal';
import OpeningModal from '../flashcard/OpeningModal';
import TimerProvider from '../store/ContextProvider';

export default function FlashcardPage() {
  const location = useLocation();
  const [fetchedVerb, setFetchedVerb] = useState("");
  const [showModal, setShowModal] = useState(false);
  const flashcardType = location.search.includes("?") ? "tense" : "verb";

  let tense, subtense, filteredVerb;
  const filter = (location.search.split(/[?=&]+/))[4];

  if (location.search.includes("?")) {
    tense = location.pathname.split("/").slice(-1).join("").replace("%20", " ");
    subtense = (location.search.split(/[?=&]+/))[2].replace("%20", " ");
  }

  if (!location.search.includes("?")) {
    filteredVerb = location.pathname.split("/").slice(-1).join("");
  }

  useEffect(() => {
    setShowModal(true)
  }, [])

  useEffect(() => {
    if (filter) {
      async function getVerbs() {
        try {
          const verb = await fetchRandomVerb(filter);
          setFetchedVerb(verb);
        } catch (error) {

        }
      }
      getVerbs();
    }
  }, [filter])

  function handleGo() {
    setShowModal(false);
  }

  return (
    <TimerProvider>
      <section className={classes["flashcard-page"]}>
        <Nav showModal={showModal} />
        {showModal &&
          <Modal>
            <OpeningModal onGo={handleGo} />
          </Modal>
        }
        <Header />
        <Content tense={tense} subtense={subtense} filter={filter} fetchedVerb={fetchedVerb} filteredVerb={filteredVerb} flashcardType={flashcardType} />
        <Border />
        <Footer />
      </section>
    </TimerProvider>
  )
}

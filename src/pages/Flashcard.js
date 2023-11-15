import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import Border from "../flashcard/Border";
import Header from "../flashcard/Header";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import classes from "../flashcard/Border.module.css";
import Content from "../flashcard/Content";
import Modal from '../layout/Modal';
import OpeningModal from '../flashcard/OpeningModal';
import TimerProvider from '../store/ContextProvider';

export default function FlashcardPage() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true)
  }, [])

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
        <Content location={location} />
        <Border />
        <Footer />
      </section>
    </TimerProvider>
  )
}

import React, {useState} from "react";
import { motion } from "framer-motion";
import Nav from "../layout/Nav";
import Header from "../signup/Header"
import FormContainer from "../signup/FormContainer";
import { UserDetailsContextProvider } from "../store/UserDetailsContext";

export default function SignupPage() {
  const [showModal, setShowModal] = useState(false);

  function handleSignupStatus(input) {
    setShowModal(input);
  }

  return (
    <UserDetailsContextProvider>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Nav showModal={showModal} />
          <Header />
          <FormContainer onSignupStatus={handleSignupStatus} />
        </motion.div>
    </UserDetailsContextProvider>
  );
}

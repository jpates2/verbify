import React from "react";
import { motion } from "framer-motion";
import Nav from "../layout/Nav";
import Header from "../signup/Header"
import FormContainer from "../signup/FormContainer";
import { BuddyContextProvider } from "../store/BuddyContext";
import { UserDetailsContextProvider } from "../store/UserDetailsContext";

export default function SignupPage() {
  return (
    <UserDetailsContextProvider>
      <BuddyContextProvider>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Nav />
          <Header />
          <FormContainer />
        </motion.div>
      </BuddyContextProvider>
    </UserDetailsContextProvider>
  );
}

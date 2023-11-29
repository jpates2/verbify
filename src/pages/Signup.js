import React, {useState} from "react";
import { useLoaderData } from 'react-router-dom';
import { motion } from "framer-motion";
import Nav from "../layout/Nav";
import Header from "../signup/Header"
import FormContainer from "../signup/FormContainer";
import { UserDetailsContextProvider } from "../store/UserDetailsContext";

export default function SignupPage() {
  const emailsData = useLoaderData();
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
          <FormContainer emailsData={emailsData} onSignupStatus={handleSignupStatus} />
        </motion.div>
    </UserDetailsContextProvider>
  );
}

export async function loader() {
  try {
    const response = await fetch("https://verbify-94228-default-rtdb.europe-west1.firebasedatabase.app/emails.json");

    if (!response.ok) {
      throw new Error("Failed to fetch data. Please reload the page.")
    }

    const emailsData = await response.json();
    const userEmails = Object.values(emailsData);

    return userEmails;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

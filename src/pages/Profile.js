import { useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';
import Nav from "../layout/Nav";
import Header from "../profile/Header";
import PersonalDetails from "../profile/PersonalDetails";
import Practice from "../profile/Practice";
import Results from "../profile/Results";
import Stats from "../profile/Stats";
import { UserDetailsContextProvider } from "../store/UserDetailsContext";
import styles from "../styles/profile.module.css";
import Signout from '../profile/Signout';
import Footer from '../layout/Footer';
import { useState } from 'react';
import Modal from '../layout/Modal';
import EditDetailsModal from '../profile/EditDetailsModal';

export default function ProfilePage() {
  const signupDetails = useLoaderData();
  const [userDetails, setUserDetails] = useState(signupDetails);
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit(input) {
    setIsEditing(input);
  }

  function handleEditDetails (input, details) {
    setIsEditing(input);
    setUserDetails(details)
  }

  return (
    <UserDetailsContextProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {isEditing &&
          <Modal>
            <EditDetailsModal onEditDetails={handleEditDetails} />
          </Modal>
        }
        <Nav />
        <Header localSignupDetails={userDetails} />
        <Stats />
        <div className={styles["results_practice"]}>
          <Results />
          <Practice />
        </div>
        <PersonalDetails onEditDetails={handleEdit} localSignupDetails={userDetails} />
        <Signout />
        <Footer />
      </motion.div>
    </UserDetailsContextProvider>
  )
}

export async function loader({ params }) {
  try {
    const response = await fetch(`https://verbify-94228-default-rtdb.europe-west1.firebasedatabase.app/users/${params.username}.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch data. Please reload the page.")
    }

    const data = await response.json();
    const liveUserDetails = Object.values(data).find(user => user.username === params.username);

    return liveUserDetails;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

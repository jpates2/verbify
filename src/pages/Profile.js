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
import { useEffect, useState } from 'react';
import Modal from '../layout/Modal';
import EditDetailsModal from '../profile/EditDetailsModal';

export default function ProfilePage() {
  const loggedInUserDetails = useLoaderData();
  const [userDetails, setUserDetails] = useState(loggedInUserDetails);
  const [isEditing, setIsEditing] = useState(false);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [dates, setDates] = useState([]);

  function handleEdit(input) {
    setIsEditing(input);
  }

  function handleEditDetails (input, details) {
    setIsEditing(input);
    setUserDetails(details);
  }

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const formattedDateToday = Number(year + month + day);

  if (userDetails.results) {
    Object.values(userDetails.results).forEach(function(result) {
      if (!dates.includes(result.date)) {
        setDates(prevDates => [...prevDates, result.date])
      }
    })
  }

  useEffect(() => {
    const currentStreakDates = [...dates, formattedDateToday].sort((a, b) => b - a);

    if (currentStreakDates.length === 1) return;

    if (currentStreakDates.length >= 2 && currentStreakDates[1] === formattedDateToday) setCurrentStreak(1);

    if (currentStreakDates.length === 2 && currentStreakDates[0] !== formattedDateToday) return;

    if (currentStreakDates.length > 2) {
      for (let i = 1; i < currentStreakDates.length - 1; i++) {
        if (currentStreakDates[i] - currentStreakDates[i + 1] === 1) {
          setCurrentStreak(prevStreak => prevStreak + 1);
        } else {
          return;
        }
      }
    }
  }, [setCurrentStreak, dates, formattedDateToday])

  let uniqueErrors = [];
  let errors = [];
  if (userDetails.incorrect) {
    Object.values(userDetails.incorrect).forEach(function (result) {
      const incorrectArrays = result.incorrectAnswers;
      incorrectArrays.forEach(array => {
        if (!uniqueErrors.includes(array[2])) {
          errors.push([array[0], array[1], array[2]]);
          uniqueErrors.push(array[2]);
        }
      })
    })
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
        <Stats currentStreak={currentStreak} userResults={userDetails.results} />
        <div className={styles["results_practice"]}>
          <Results userResults={userDetails.results} />
          <Practice username={userDetails.username} userResults={userDetails.results} initialErrors={errors} initialUniqueErrors={uniqueErrors} />
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

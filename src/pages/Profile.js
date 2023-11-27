import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Nav from "../layout/Nav";
import Header from "../profile/Header";
import PersonalDetails from "../profile/PersonalDetails";
import Practice from "../profile/Practice";
import Results from "../profile/Results";
import Stats from "../profile/Stats";
import { UserDetailsContextProvider } from "../store/UserDetailsContext";
import styles from "../styles/profile.module.css";
import { useSelector } from 'react-redux';

export default function ProfilePage() {
  // const localSignupDetails = JSON.parse(localStorage.getItem('signupDetails'));
  // const loggedInStatus = useSelector(state => state.status);
  const signupDetails = useLoaderData();

  // useEffect(() => {
  //   localStorage.setItem('loggedInStatus', JSON.stringify(loggedInStatus));
  // }, [loggedInStatus]);

  return (
    <UserDetailsContextProvider>
        <Nav />
        <Header localSignupDetails={signupDetails} />
        <Stats />
        <div className={styles["results_practice"]}>
          <Results />
          <Practice />
        </div>
        <PersonalDetails localSignupDetails={signupDetails} />
    </UserDetailsContextProvider>
  )
}

export async function loader({ params }) {
  try {
    const response = await fetch("https://verbify-94228-default-rtdb.europe-west1.firebasedatabase.app/users.json");
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

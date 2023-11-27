import { useLoaderData } from 'react-router-dom';
import Nav from "../layout/Nav";
import Header from "../profile/Header";
import PersonalDetails from "../profile/PersonalDetails";
import Practice from "../profile/Practice";
import Results from "../profile/Results";
import Stats from "../profile/Stats";
import { UserDetailsContextProvider } from "../store/UserDetailsContext";
import styles from "../styles/profile.module.css";

export default function ProfilePage() {
  // const localSignupDetails = JSON.parse(localStorage.getItem('signupDetails'));
  const signupDetails = useLoaderData();
  console.log(signupDetails)

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
  const response = await fetch("https://verbify-94228-default-rtdb.europe-west1.firebasedatabase.app/users.json");
  const data = await response.json();
  const liveUserDetails = Object.values(data).find(user => user.username === params.username);
  return liveUserDetails;
}

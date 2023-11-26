import Nav from "../layout/Nav";
import Header from "../profile/Header";
import PersonalDetails from "../profile/PersonalDetails";
import Practice from "../profile/Practice";
import Results from "../profile/Results";
import Stats from "../profile/Stats";
import { UserDetailsContextProvider } from "../store/UserDetailsContext";
import styles from "../styles/profile.module.css";

export default function ProfilePage() {
  const signupDetails = JSON.parse(localStorage.getItem('signupDetails'));
  console.log(signupDetails);

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

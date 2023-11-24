import Nav from "../layout/Nav";
import Header from "../profile/Header";
import Practice from "../profile/Practice";
import Results from "../profile/Results";
import Stats from "../profile/Stats";
import { UserDetailsContextProvider } from "../store/UserDetailsContext";
import styles from "../styles/profile.module.css";

export default function ProfilePage() {
  return (
    <UserDetailsContextProvider>
        <Nav />
        <Header />
        <Stats />
        <div className={styles["results_practice"]}>
          <Results />
          <Practice />
        </div>
    </UserDetailsContextProvider>
  )
}

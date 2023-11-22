import Nav from "../layout/Nav";
import Header from "../profile/Header";
import { BuddyContextProvider } from "../store/BuddyContext";
import { UserDetailsContextProvider } from "../store/UserDetailsContext";


export default function ProfilePage() {
  return (
    <BuddyContextProvider>
      <UserDetailsContextProvider>
        <Nav />
        <Header />
      </UserDetailsContextProvider>
    </BuddyContextProvider>
  )
}

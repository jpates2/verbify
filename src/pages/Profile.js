import Nav from "../layout/Nav";
import Header from "../profile/Header";
import { UserDetailsContextProvider } from "../store/UserDetailsContext";

export default function ProfilePage() {
  return (
    <UserDetailsContextProvider>
        <Nav />
        <Header />
    </UserDetailsContextProvider>
  )
}

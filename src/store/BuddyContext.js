import { createContext, useState } from "react";
import { buddyInfo } from "../info/buddy-info";

const BuddyContext = createContext({
  buddyName: "",
  buddyImg: "",
  selectBuddy: (buddy) => {}
})

export function BuddyContextProvider({ children }) {
  const [userBuddy, setUserBuddy] = useState({});

  function selectBuddy(buddy) {
    setUserBuddy({buddyName: buddy.name, buddyImg: buddy.image});
  }


  const buddyCtx = {
    buddyName: userBuddy.buddyName,
    buddyImg: userBuddy.buddyImg,
    selectBuddy
  }
  console.log(buddyCtx)

  return (
    <BuddyContext.Provider value={buddyCtx}>
      {children}
    </BuddyContext.Provider>
  )
}

export default BuddyContext;

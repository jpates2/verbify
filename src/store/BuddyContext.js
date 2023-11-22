import { createContext, useState } from "react";

const BuddyContext = createContext({
  buddyName: "",
  buddyImg: "",
  selectBuddy: (buddy) => {}
})

export function BuddyContextProvider({ children }) {
  const [userBuddy, setUserBuddy] = useState({buddyName: "**", buddyImg: "**"});
  function selectBuddy(buddy) {
    setUserBuddy({buddyName: buddy.name, buddyImg: buddy.image});
    console.log("buddy function");
  }

  const buddyCtx = {
    buddyName: userBuddy.buddyName,
    buddyImg: userBuddy.buddyImg,
    selectBuddy
  }
  // console.log("buddy context:", buddyCtx)

  return (
    <BuddyContext.Provider value={buddyCtx}>
      {children}
    </BuddyContext.Provider>
  )
}

export default BuddyContext;

import { createContext, useState } from "react";

const BuddyContext = createContext({
  buddy: "",
  selectBuddy: (name) => {}
})

export function BuddyContextProvider({ children }) {
  const [userBuddy, setUserBuddy] = useState("");

  function selectBuddy(name) {
    setUserBuddy(name)
  }

  const buddyCtx = {
    buddy: userBuddy,
    selectBuddy
  }

  return (
    <BuddyContext.Provider value={buddyCtx}>
      {children}
    </BuddyContext.Provider>
  )
}

export default BuddyContext;

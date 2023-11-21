import { createContext, useReducer } from "react";

const UserDetailsContext = createContext({
  fullName: "",
  phone: "",
  email: "",
  newUserDetails: (user) => {}
})

function userDetailsReducer(state, action) {
  if (action.type === "ADD_USER") {
    const newUser = {
      fullName: action.user.fullName,
      phone: action.user.phone,
      email: action.user.email,
    }
    return newUser;
  }
}

export function UserDetailsContextProvider({ children }) {
  const [userDetails, dispatchUserDetailsAction] = useReducer(userDetailsReducer, { fullName: "", phone: "", email: "" });

  function newUserDetails(user) {
    dispatchUserDetailsAction({ type: "ADD_USER", user});
  }

  const userDetailsCtx = {
    fullName: userDetails.fullName,
    phone: userDetails.phone,
    email: userDetails.email,
    newUserDetails
  }

  return (
    <UserDetailsContext.Provider value={userDetailsCtx}>
      {children}
    </UserDetailsContext.Provider>
  )
}

export default UserDetailsContext;

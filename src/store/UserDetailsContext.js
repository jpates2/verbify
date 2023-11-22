import { createContext, useReducer } from "react";

const UserDetailsContext = createContext({
  fullName: "",
  phone: "",
  email: "",
  username: "",
  newUserDetails: (user) => {},
  newUsername: (user) => {},
})

function userDetailsReducer(state, action) {
  if (action.type === "ADD_USER") {
    const newUser = {
      ...state,
      fullName: action.user.fullName,
      phone: action.user.phone,
      email: action.user.email,
    }
    return newUser;
  }

  if (action.type === "ADD_USERNAME") {
    const user = {
      ...state,
      username: action.user.username,
    }
    return user;
  }
}

export function UserDetailsContextProvider({ children }) {
  const [userDetails, dispatchUserDetailsAction] = useReducer(userDetailsReducer, { fullName: "", phone: "", email: "" , username: ""});

  function newUserDetails(user) {
    dispatchUserDetailsAction({ type: "ADD_USER", user});
  }

  function newUsername(user) {
    dispatchUserDetailsAction({ type: "ADD_USERNAME", user});
  }

  const userDetailsCtx = {
    fullName: userDetails.fullName,
    phone: userDetails.phone,
    email: userDetails.email,
    username: userDetails.username,
    newUserDetails,
    newUsername
  }

  return (
    <UserDetailsContext.Provider value={userDetailsCtx}>
      {children}
    </UserDetailsContext.Provider>
  )
}

export default UserDetailsContext;

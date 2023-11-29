import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import VerbsPage from "./pages/Verbs";
import VerbPage from "./pages/Verb";
import FlashcardsPage from "./pages/Flashcards";
import FlashcardPage from "./pages/Flashcard";
import SignupPage, { loader as emailsDataLoader } from "./pages/Signup";
import ProfilePage, { loader as userDetailsLoader } from "./pages/Profile";

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/flashcards", element: <FlashcardsPage />},
  {path: "/flashcards/:flashcard/:tense?/:type?", element: <FlashcardPage />},
  {path: "/verbs", element: <VerbsPage /> },
  {path: "/verbs/:verb", element: <VerbPage />},
  {path: "/signup", element: <SignupPage />, loader: emailsDataLoader },
  {path: "/profile/:username", element: <ProfilePage />, loader: userDetailsLoader},
])

function App() {
  return <RouterProvider router={router} />
}

export default App;

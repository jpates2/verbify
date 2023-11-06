import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import VerbsPage from "./pages/Verbs";
import VerbPage from "./pages/Verb";
import FlashcardsPage from "./pages/Flashcards";
import SignupPage from "./pages/Signup";

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/flashcards", element: <FlashcardsPage />},
  {path: "/verbs", element: <VerbsPage /> },
  {path: "/verbs/:verb", element: <VerbPage />},
  {path: "/signup", element: <SignupPage /> },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;

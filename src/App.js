import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import VerbsPage from "./pages/Verbs";
import FlashcardsPage from "./pages/Flashcards";

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/flashcards", element: <FlashcardsPage />},
  {path: "/verbs", element: <VerbsPage /> },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import Header from "./layout/Header";
import Intro from "./components/Intro";
import Learn from "./components/Learn";
import Nav from "./layout/Nav";

import classes from "../src/styles/shared.module.css"
import StartLearning from "./components/StartLearning";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Intro />
      <Learn />
      <StartLearning />
    </>
  );
}

export default App;

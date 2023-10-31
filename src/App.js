import Header from "./layout/Header";
import Intro from "./components/Intro";
import Learn from "./components/Learn";

import classes from "../src/styles/shared.module.css"
import StartLearning from "./components/StartLearning";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Learn />
      <StartLearning />
    </>
  );
}

export default App;

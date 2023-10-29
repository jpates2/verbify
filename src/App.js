import Header from "./layout/Header";
import Intro from "./components/Intro";
import Learn from "./components/Learn";

import classes from "../src/styles/shared.module.css"

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Learn />
      <div className={classes["test-div"]}>

      </div>
    </>
  );
}

export default App;

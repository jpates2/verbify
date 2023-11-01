import React from "react";
import Header from "../layout/Header";
import Intro from "../components/Intro";
import Learn from "../components/Learn";
import Nav from "../layout/Nav";
import StartLearning from "../components/StartLearning";

export default function HomePage() {
  return (
    <React.Fragment>
      <Nav />
      <main>
        <Header />
        <Intro />
        <Learn />
        <StartLearning />
      </main>
    </React.Fragment>
  );
}

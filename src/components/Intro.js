import classes from "./Intro.module.css";

export default function Intro() {
  return (
    <section id="intro">
      <div className={classes["intro__container"]}>
        <div className={classes["intro__box"]}>
          <p>
            Welcome to Verbify, your ultimate resource for mastering Spanish verbs with ease and enjoyment.
          </p>
          <p>
            Review any verb and its many conjugations, then it's time to get practising with our flashcards! Sign up now and create a profile to track your progress, build a streak, and work on those pesky problem verbs.
          </p>
          <p>
            We're all about making learning fun and effective, so join us for an exciting journey towards mastering Spanish verbs!
          </p>
        </div>
      </div>
    </section>
  )
}

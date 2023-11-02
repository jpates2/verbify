import SlideInSection from "../layout/SlideInSection";
import SuggestionsForm from "./SuggestionsForm";
import classes from "./Suggestions.module.css";

export default function Suggestions() {
  return (
    <SlideInSection>
      <div id="suggestions" className={classes["suggestions__container"]}>
        <div className={classes["suggestions__text"]}>
          <h2 className={classes["suggestions__header"]}>Anything else you'd like to see on Verbify?</h2>
          <p className={classes["suggestions__para"]}>We're always open to suggestions for how we can improve your learning experience. Let us know anything you'd like to see added or improved!</p>
        </div>
        <div className={classes["suggestions__background"]}>
          <SuggestionsForm />
        </div>
      </div>
    </SlideInSection>
  )
}

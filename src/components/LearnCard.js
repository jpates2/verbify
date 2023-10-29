import classes from "./LearnCard.module.css";

export default function LearnCard(props) {
  return (
    <div className={classes["learn-card__container"]}>
      <h5>{props.title}</h5>
      <p>{props.description}</p>
    </div>
  )
}

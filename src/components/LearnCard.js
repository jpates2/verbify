import classes from "./LearnCard.module.css";

export default function LearnCard(props) {
  return (
    <div className={classes["learn-card__container"]}>
      <div className={classes["learn-card__image-container"]}>
        <img src={props.image} alt="" className={classes["learn-card__image"]} />
      </div>
      <div className={classes["learn-card__info"]}>
        <h5 className={classes["learn-card__title"]}>{props.title}</h5>
        <p className={classes["learn-card__description"]}>{props.description}</p>
      </div>
      <button className={classes["learn-card__link"]}>{props.link}</button>
    </div>
  )
}

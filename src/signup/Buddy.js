import classes from "./Buddy.module.css";

export default function Buddy({ buddyName, image, onBuddySelection, activeBuddy }) {
  const cssClass = activeBuddy ? `${classes["buddy-modal__image-circle"]} ${classes["buddy-modal__image-circle-active"]}` : `${classes["buddy-modal__image-circle"]}`;



  return (
    <div className={cssClass}>
      <img onClick={onBuddySelection} id={buddyName} src={image} alt="alien learning buddy" className={classes["buddy-modal__image"]} />
    </div>
  )
}

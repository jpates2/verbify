import classes from "./Buddy.module.css";

export default function Buddy({ buddyName, image, onBuddySelection }) {
  return (
    <div className={classes["buddy-modal__image-circle"]}>
      <img onClick={onBuddySelection} id={buddyName} src={image} alt="alien learning buddy" className={classes["buddy-modal__image"]} />
    </div>
  )
}

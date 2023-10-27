import classes from "./Header.module.css";

export default function Header() {
  return (
    <section id="header">
      <div className={classes["header__container"]}>
        <h2 className={classes["header__title"]}>verbify</h2>
        <p>Unlock Spanish fluency, verb by verb</p>
      </div>
    </section>
  )
}

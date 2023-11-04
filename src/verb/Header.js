import classes from "./Header.module.css";

export default function Header({ verb }) {
  return (
    <section>
      <div className={classes["verb__header-container"]}>
          <h1 className={classes["verb__header"]}>{verb}</h1>
          <p className={classes["verb__translations"]}>to go down</p>
      </div>
      <div className={classes["verb__container-background"]}></div>
    </section>
  )
}

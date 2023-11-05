import classes from "./PageHeader.module.css";

export default function PageHeader({ children, text }) {
  return (
    <>
      <div className={classes["header__container"]}>
          <h1 className={classes["header__main"]}>{children}</h1>
          <p className={classes["header__slogan"]}>{text}</p>
      </div>
      <div className={classes["header__container-background"]}></div>
    </>
  )
}

import { useEffect, useState } from "react";
import classes from "./Header.module.css";
import { fetchTranslations } from "../util/http";

export default function Header({ verb }) {
  const [translations, setTranslations] = useState("");

  useEffect(() => {
    async function getTranslation() {
      try {
        const translation = await fetchTranslations(verb);
        setTranslations(translation);
      } catch (error) {

      }
    }
    getTranslation();
  }, [verb])

  return (
    <section>
      <div className={classes["verb__header-container"]}>
          <h1 className={classes["verb__header"]}>{verb}</h1>
          <p className={classes["verb__translations"]}>{translations}</p>
      </div>
      <div className={classes["verb__container-background"]}></div>
    </section>
  )
}

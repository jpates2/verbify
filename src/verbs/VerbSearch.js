import classes from "./VerbSearch.module.css";

export default function VerbSearch() {
  return (
    <div className={classes["verbs__search-bar-container"]}>
      <input placeholder="Search..." className={classes["verbs__search-bar"]} />
    </div>
  )
}

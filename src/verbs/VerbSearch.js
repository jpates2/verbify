import classes from "./VerbSearch.module.css";

export default function VerbSearch({ onSearch }) {
  return (
    <div className={classes["verbs__search-bar-container"]}>
      <input onChange={onSearch} placeholder="Search..." className={classes["verbs__search-bar"]} />
    </div>
  )
}

import { useState } from "react";
import VerbSearch from "../verbs/VerbSearch";
import VerbCards from "./VerbCards";
import classes from "./VerbFilter.module.css";

export default function VerbFilter() {
  const [searchTerms, setSearchTerms] = useState("");

  function handleSearch (event) {
    setSearchTerms(event.target.value.toLowerCase())
  }

  return (
    <div>
      <VerbSearch onSearch={handleSearch} />
      <VerbCards searchTerms={searchTerms} />
    </div>
  )
}

import { useState, useEffect } from "react";
import { fetchVerbs } from "../util/http";

export function useFetchVerbs(searchTerms, limits) {
  const [allVerbs, setAllVerbs] = useState([]);
  const [fetchingVerbs, setFetchingVerbs] = useState();
  const [error, setError] = useState();

  let initialLimit;
  if (window.innerWidth >= 1200) {initialLimit = limits[0]}
  if (window.innerWidth < 1200 && window.innerWidth > 700) {initialLimit = limits[1]}
  if (window.innerWidth <= 700) {initialLimit = limits[2]}
  const [limit, setLimit] = useState(initialLimit);

  function handleLimitIncrease() {
    setLimit((prevLimit) => {
      return prevLimit + initialLimit;
    })
  }

  useEffect(() => {
    async function getVerbs() {
      setFetchingVerbs(true);
      try {
        const verbs = await fetchVerbs();
        setAllVerbs(verbs);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data. Please reload the page to try again.' });
      }
      setFetchingVerbs(false);
    }
    getVerbs();
  }, [])

  const filteredVerbs = allVerbs.filter(verb => {
    return (verb.infinitive.includes(searchTerms) || verb.translation.includes(searchTerms));
  })

  const sortedVerbs = filteredVerbs.sort(function(a, b) {
    return a.infinitive.localeCompare(b.infinitive);
 })

  return {
    sortedVerbs,
    fetchingVerbs,
    error,
    limit,
    handleLimitIncrease
  }
}

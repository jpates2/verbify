export async function fetchVerbs() {
  const response = await fetch("https://raw.githubusercontent.com/ghidinelli/fred-jehle-spanish-verbs/master/jehle_verb_lookup.json");
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch verbs");
  }

  const infinitives = [];
  for (const verb in data) {
    if (
      data[verb].length > 0 &&
      data[verb][0].performer === "yo" &&
      data[verb][0].mood === "Indicative" &&
      data[verb][0].tense === "Present"
    ) {
      const translation = (data[verb][0].translation).split(';', 1)[0]

      infinitives.push({
        infinitive: data[verb][0].infinitive,
        translation
      });
    }
  }

  console.log(infinitives);
  return infinitives;
}

export async function fetchTranslations(verb) {
  const response = await fetch("https://raw.githubusercontent.com/ghidinelli/fred-jehle-spanish-verbs/master/jehle_verb_lookup.json");
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch verbs");
  }

  const translation = data[verb][0].translation;

  console.log(translation);
  return translation;
}

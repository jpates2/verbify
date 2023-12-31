import { verbos } from "verbos";

export async function fetchVerbs() {
  const verbosData = verbos();
  const infinitives = [];

  for (const verb of verbosData) {
    if (verb["english"]["infinitivo"] !== "there to be") {
      infinitives.push({
        infinitive: verb["infinitivo"].split('(', 1)[0],
        translation: verb["english"]["infinitivo"].split(/[,();]+/, 1)[0].trim(),
        regular: verb.regular
      });
    }
  }

  return infinitives;
}

export async function fetchTranslations(verb) {
  const verbosData = verbos();
  const currentVerb = verbosData.filter(obj => {return obj.infinitivo === verb})

  const translation = currentVerb[0]["english"]["infinitivo"];

  return translation;
}

export async function fetchConjugations(verb) {
  const verbosData = verbos();
  const currentVerb = verbosData.filter(obj => {return obj.infinitivo === verb})

  const allConjugations = {
    participles: {
      present: currentVerb[0]["gerundio"].slice(-2) === "se" ? currentVerb[0]["gerundio"].slice(0, -2) : currentVerb[0]["gerundio"],
      past: currentVerb[0]["participioPasado"]
    },
    indicative: {
      present: currentVerb[0]["indicativo"]["presente"],
      preterite: currentVerb[0]["indicativo"]["preterito"],
      imperfect: currentVerb[0]["indicativo"]["imperfecto"],
      conditional: currentVerb[0]["indicativo"]["condicional"],
      future: currentVerb[0]["indicativo"]["futuro"],
    },
    subjunctive: {
      present: currentVerb[0]["subjuntivo"]["presente"],
      imperfect: currentVerb[0]["subjuntivo"]["imperfecto"],
      imperfectAlt: currentVerb[0]["subjuntivo"]["imperfectoAlt"],
      future: currentVerb[0]["subjuntivo"]["futuro"],
    },
    "perfect subjunctive": {
      present: currentVerb[0]["subjuntivo"]["presentePerfecto"],
      past: currentVerb[0]["subjuntivo"]["pluscuamperfecto"],
      pastAlt: currentVerb[0]["subjuntivo"]["pluscuamperfectoAlt"],
      future: currentVerb[0]["subjuntivo"]["futuroPerfecto"],
    },
    imperative: {
      affirmative: currentVerb[0]["afirmativo"],
      negative: currentVerb[0]["negativo"]
    },
    perfect: {
      present: currentVerb[0]["indicativo"]["presentePerfecto"],
      preterite: currentVerb[0]["indicativo"]["preteritoAnterior"],
      pluperfect: currentVerb[0]["indicativo"]["pluscuamperfecto"],
      conditional: currentVerb[0]["indicativo"]["condicionalPerfecto"],
      future: currentVerb[0]["indicativo"]["futuroPerfecto"],
    },
    progressive: {},
  }

  if (currentVerb[0]["infinitivo"].slice(-2) !== "se") {
    allConjugations.progressive = {
      present: {
        yo: `estoy ${currentVerb[0]["gerundio"]}`,
        tu: `estás ${currentVerb[0]["gerundio"]}`,
        ud: `está ${currentVerb[0]["gerundio"]}`,
        nosotros: `estamos ${currentVerb[0]["gerundio"]}`,
        vosotros: `estáis ${currentVerb[0]["gerundio"]}`,
        uds: `están ${currentVerb[0]["gerundio"]}`,
      },
      preterite: {
        yo: `estuve ${currentVerb[0]["gerundio"]}`,
        tu: `estuviste ${currentVerb[0]["gerundio"]}`,
        ud: `estuvo ${currentVerb[0]["gerundio"]}`,
        nosotros: `estuvimos ${currentVerb[0]["gerundio"]}`,
        vosotros: `estuvisteis ${currentVerb[0]["gerundio"]}`,
        uds: `estuvieron ${currentVerb[0]["gerundio"]}`,
      },
      imperfect: {
        yo: `estaba ${currentVerb[0]["gerundio"]}`,
        tu: `estabas ${currentVerb[0]["gerundio"]}`,
        ud: `estaba ${currentVerb[0]["gerundio"]}`,
        nosotros: `estábamos ${currentVerb[0]["gerundio"]}`,
        vosotros: `estabais ${currentVerb[0]["gerundio"]}`,
        uds: `estaban ${currentVerb[0]["gerundio"]}`,
      },
      conditional: {
        yo: `estaría ${currentVerb[0]["gerundio"]}`,
        tu: `estarías ${currentVerb[0]["gerundio"]}`,
        ud: `estaría ${currentVerb[0]["gerundio"]}`,
        nosotros: `estaríamos ${currentVerb[0]["gerundio"]}`,
        vosotros: `estaríais ${currentVerb[0]["gerundio"]}`,
        uds: `estarían ${currentVerb[0]["gerundio"]}`,
      },
      future: {
        yo: `estaré ${currentVerb[0]["gerundio"]}`,
        tu: `estarás ${currentVerb[0]["gerundio"]}`,
        ud: `estará ${currentVerb[0]["gerundio"]}`,
        nosotros: `estaremos ${currentVerb[0]["gerundio"]}`,
        vosotros: `estaréis ${currentVerb[0]["gerundio"]}`,
        uds: `estarán ${currentVerb[0]["gerundio"]}`,
      },
    }
  }

  if (currentVerb[0]["infinitivo"].slice(-2) === "se") {
    const amendedParticiple = currentVerb[0]["gerundio"].slice(0, -2);

    allConjugations.progressive = {
      present: {
        yo: `me estoy ${amendedParticiple}`,
        tu: `te estás ${amendedParticiple}`,
        ud: `se está ${amendedParticiple}`,
        nosotros: `nos estamos ${amendedParticiple}`,
        vosotros: `os estáis ${amendedParticiple}`,
        uds: `se están ${amendedParticiple}`,
      },
      preterite: {
        yo: `me estuve ${amendedParticiple}`,
        tu: `te estuviste ${amendedParticiple}`,
        ud: `se estuvo ${amendedParticiple}`,
        nosotros: `nos estuvimos ${amendedParticiple}`,
        vosotros: `os estuvisteis ${amendedParticiple}`,
        uds: `se estuvieron ${amendedParticiple}`,
      },
      imperfect: {
        yo: `me estaba ${amendedParticiple}`,
        tu: `te estabas ${amendedParticiple}`,
        ud: `se estaba ${amendedParticiple}`,
        nosotros: `nos estábamos ${amendedParticiple}`,
        vosotros: `os estabais ${amendedParticiple}`,
        uds: `se estaban ${amendedParticiple}`,
      },
      conditional: {
        yo: `me estaría ${amendedParticiple}`,
        tu: `te estarías ${amendedParticiple}`,
        ud: `se estaría ${amendedParticiple}`,
        nosotros: `nos estaríamos ${amendedParticiple}`,
        vosotros: `os estaríais ${amendedParticiple}`,
        uds: `se estarían ${amendedParticiple}`,
      },
      future: {
        yo: `me estaré ${amendedParticiple}`,
        tu: `te estarás ${amendedParticiple}`,
        ud: `se estará ${amendedParticiple}`,
        nosotros: `nos estaremos ${amendedParticiple}`,
        vosotros: `os estaréis ${amendedParticiple}`,
        uds: `se estarán ${amendedParticiple}`,
      },
    }
  }

  return allConjugations;
}

export async function fetchRandomVerb(filter) {
  const verbosData = verbos();
  verbosData.splice(verbosData.findIndex(function(verb){
    return verb.id === "haber_verboaux";
  }), 1);
  let selectedVerb;

  const filteredRegularVerbos = verbosData.filter(obj => {return obj.regular === true})
  const filteredIrregularVerbos = verbosData.filter(obj => {return obj.regular === false})

  if (filter === "regular") {
    selectedVerb = filteredRegularVerbos[Math.floor(Math.random() * filteredRegularVerbos.length)];
  }

  if (filter === "irregular") {
    selectedVerb = filteredIrregularVerbos[Math.floor(Math.random() * filteredIrregularVerbos.length)];
  }

  if (filter === "all") {
    selectedVerb = verbosData[Math.floor(Math.random() * verbosData.length)];
  }

  return selectedVerb;
}


// using json

// export async function fetchVerbs() {

  // const response = await fetch("https://raw.githubusercontent.com/ghidinelli/fred-jehle-spanish-verbs/master/jehle_verb_lookup.json");
  // const data = await response.json();

  // if (!response.ok) {
  //   throw new Error("Failed to fetch verbs");
  // }

  // const infinitives = [];
  // for (const verb in data) {
  //   if (
  //     data[verb].length > 0 &&
  //     data[verb][0].performer === "yo" &&
  //     data[verb][0].mood === "Indicative" &&
  //     data[verb][0].tense === "Present"
  //   ) {
  //     const translation = (data[verb][0].translation).split(';', 1)[0]

  //     infinitives.push({
  //       infinitive: data[verb][0].infinitive,
  //       translation
  //     });
  //   }
  // }

//   return infinitives;
// }

// export async function fetchTranslations(verb) {
//   const response = await fetch("https://raw.githubusercontent.com/ghidinelli/fred-jehle-spanish-verbs/master/jehle_verb_lookup.json");
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error("Failed to fetch verbs");
//   }

//   const translation = data[verb][0].translation;

//   return translation;
// }

// export async function fetchConjugations(verb) {
//   const response = await fetch("https://raw.githubusercontent.com/ghidinelli/fred-jehle-spanish-verbs/master/jehle_verb_lookup.json");
//   const data = await response.json();

//   const allConjugations = {
//     participle: {
//       present: "",
//       past: ""
//     },
//     indicative: {
//       present: {},
//       preterite: {},
//       imperfect: {},
//       conditional: {},
//       future: {},
//       present_perfect: {},
//       past_perfect: {},
//       conditional_perfect: {},
//       future_perfect: {}
//     },
//     imperative: {
//       positive: {},
//       negative: {}
//     },
//     subjunctive: {
//       present: {},
//       imperfect: {},
//       future: {}
//     },
//     "perfect-subjunctive": {
//       present: {},
//       past: {},
//       future: {}
//     },
//     progressive: {
//       present: {},
//       preterite: {},
//       imperfect: {},
//       conditional: {},
//       future: {}
//     },
//     perfect: {
//       present: {},
//       preterite: {},
//       // pluperfect: {},
//       conditional: {},
//       future: {}
//     }
//   }


//   if (!response.ok) {
//     throw new Error("Failed to fetch verbs");
//   }

//   const moods = ["Indicative", "Subjunctive"]
//   const tenses = ["Present", "Preterite", "Imperfect", "Conditional", "Future", "Present Perfect", "Past Perfect", "Conditional Perfect", "Future Perfect"]
//   const performers = ["yo", "t\u00fa", "\u00e9l/ella/usted", "nosotros/nosotras", "vosotros/vosotras", "ellos/ellas/ustedes"]

  // console.log(allConjugations[moods[0].toLowerCase()][tenses[8].toLowerCase().replace(/\s+/g, "_")]);

  // for (const mood of moods) {
  //   for (const tense of tenses) {
  //     for (const performer of performers) {
  //       const allConjugationsKey = tense.toLowerCase().replace(/\s+/g, "_");
  //       // console.log(allConjugationsKey);

  //       const key = Object.keys(data).find(key =>
  //         data[key][0].infinitive === verb &&
  //         data[key][0].performer === performer &&
  //         data[key][0].mood === mood &&
  //         data[key][0].tense === tense
  //       );
  //       if (key) {
  //         allConjugations[mood.toLowerCase()][allConjugationsKey][performer] = key;
  //       }
  //     }
  //   }
  // }

  // for (const performer of performers) {
  //   const key = Object.keys(data).find(key =>
  //     data[key][0].infinitive === verb &&
  //     data[key][0].performer === performer &&
  //     data[key][0].mood === "Indicative" &&
  //     data[key][0].tense === "Present"
  //   );
  //   if (key) {
  //     allConjugations["indicative"]["conditional_perfect"][performer] = key;
  //   }
  // }

  // const conjugations = data[verb][0].filter((entry) =>
  //   entry.mood === "Indicative" && entry.tense === "Present"
  // );




//   return allConjugations;
// }

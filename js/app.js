const palavrasReservadas = [
  "fimalgoritmo",
  "algoritmo",
  "inicio",
  "var",
  "inteiro",
  "real",
  "logico",
  "caractere",
  "cadeia",
  "de",
  "ate",
  "fimpara",
  "para",
  "facaenquanto",
  "faca",
  "fimenquanto",
  "enquanto",
  "entao",
  "senao",
  "fimse",
  "se",
  "fimescolha",
  "escolha",
  "outro caso",
  "caso",
  "fim",
  "interrompa",
  "retorne",
  "leia",
  "escreval",
  "escreva",
];

/**
 * Clear all string inside visualg algorithm
 * @param {{item: String, times: Number}[]} occurrences
 * */
const mountTable = (occurrences) => {
  const table = document.getElementById("table");
  table.innerHTML = `${occurrences
    .map(
      (occurrence) =>
        `<tr><td>${occurrence.item}</td><td>${occurrence.times}</td></tr>`
    )
    .join("")}`;
};

/**
 * Clear all string inside visualg algorithm
 * @param {String} code
 * @returns {String}
 * */
const clearCode = (code) => {
  const lowered = code.toLowerCase();
  const withoutStrings = lowered.replaceAll(/"(.*?)"/g, "");
  const withoutCommentaries1 = withoutStrings.replaceAll(/\/\/(.*?)\n/g, "");
  const withoutCommentaries2 = withoutCommentaries1.replaceAll(/\/\*(.*?)\*\//g, "");
  return withoutCommentaries2;
};

const analizeCode = () => {
  const code = document.getElementById("codigo").value;
  const occurrences = [];

  let clearedCode = clearCode(code);

  palavrasReservadas.forEach((palavra) => {
    const occ = (clearedCode.match(new RegExp(palavra, "gi")) || []).length;
    clearedCode = clearedCode.replaceAll(new RegExp(palavra, "gi"), "");
    if (occ > 0) occurrences.push({ item: palavra, times: occ });
  });

  mountTable(occurrences);
};

document.getElementById("analize").addEventListener("click", analizeCode);

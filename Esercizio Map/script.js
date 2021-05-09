

let words = ["Franco", "giovanni", "Simone", "michele", "Igor"];
console.log("Parole ", words);


let wordsOn = words.map((word) => {
  return formatting(word);
});

console.log("Parole con Map: ", wordsOn);

// FUNCTIONS

function formatting(text) {

  if (typeof text === "string") {

    let str = text[0].toUpperCase();
     
    for (let i = 1; i < text.length; i++) {

      str += text[i].toLowerCase(); 

    }
    return str;

  } else {

    alert("Parola non valida");
  }
}

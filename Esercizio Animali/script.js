let animals = [
   {
     name: "gatto",
     famiglia: "felidi",
     classe: "mammiferi",
   },
   {
     name: "topo",
     famiglia: "muridi",
     classe: "mammiferi",
   },
   {
     name: "cane",
     famiglia: "canidi",
     classe: "mammiferi",
   },
   {
      name: "serpente",
      famiglia: "colubridae",
      classe: "rettili",
    }
 ];
 console.log("Animali: ", animals);
 
 let mammiferi = animals.filter((animal) => animal.classe === "mammiferi");
 console.log("Mammiferi: ", mammiferi);
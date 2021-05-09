let people = [
   {
     name: "Giovanna",
     surname: "Borghi",
     age: 42,
   },
   {
     name: "Simone ",
     surname: "Bianchi",
     age: 24,
   },
   {
     name: "Giovanni",
     surname: "Verdi",
     age: 38,
   },
   {
     name: "Virginio",
     surname: "Basilico",
     age: 3,
   },
   {
     name: "Susanna",
     surname: "Bella",
     age: 48,
   },
   {
     name: "Tamara",
     surname: "Bassani",
     age: 12,
   },
 ];
 
 console.log("Array di persone: ", people);
 
 let drivers = people.map((person) => {
   if (person.age >= 18) {
     return `${person.name} ${person.surname} ha ${person.age} anni,  PUO' guidare`;
   } else {
     return `${person.name} ${person.surname} ha ${person.age} anni,  NON PUO' guidare`;
   }
 });
 
 console.log("Distinzione tra guidatori e non: ", drivers);
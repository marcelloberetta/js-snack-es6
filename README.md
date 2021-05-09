# js-snack-es6


*** 1 ***

Creare una squadra di basket e per ogni giocatore generare casualmente le statistiche di gioco, secondo queste regole: il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali la media punti fatti per partita deve essere compresa tra 0 e 50 la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100

*** 2 ***

Scrivi una funzione che accetti tre argomenti: un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”

*** 3 ***

Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.



*** ESERCIZIO MAP ***

Esercizio (map) -> si potrebbe ottimizzare con una funzione separata per il capitalize
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]


*** ESERCIZIO ANIMALI ***

Esercizio (array, oggetti, filter)
Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe. Es: 
[
    { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
    { nome: ‘cane’, ’famiglia: ‘canidi’, classe: ‘mammiferi’ },
    { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
]
Crea un nuovo array con la lista dei mammiferi.


*** ESERCIZIO PERSONE ***

Esercizio (array, oggetti, map, interpolazione delle stringhe)
Crea un array di oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un’età.
Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
Es:
[
    { nome: ‘Mario’, cognome: ‘Rossi’, eta: 60 },
    { nome: ‘Luigi’, cognome: ‘Verdi’, eta: 12 },
    { nome: ‘Silvia’, cognome: ‘Neri’, eta: 25 },
]
[
    ‘Mario Rossi può guidare’,
    ‘Luigi Verdi non può guidare’,
    ‘Silvia Neri può guidare’,
]

*** ESERCIZIO BROWSER ***

Esercizio (oggetti, array, forEach con splice oppure filter)
Un oggetto rappresenta una finestra di un browser e contiene due campi: 
 un array di tab aperte
 un numero che indica l’indice della tab aperta nell’array:
{
    “tab”: [“Facebook”, “GitHub”, “Gmail”],
    “activeTab”: 0
}
Il software deve guardare se c’è un social aperto ed eliminarlo dalle tab.
Nel caso la tab fosse attiva, deve attivare la successiva.

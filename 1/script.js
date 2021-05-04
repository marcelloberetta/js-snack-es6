$(function(){

   var players = []
 
   const playersNum = 5
 
   //creazione giocatori
   for(var i=0; i<playersNum; i++){
     let giocatore = {
       codice: generateCode(),
       punti: generateRandomNumber50(),
       percentuale: generateRandomNumber100()
     }
     players.push(giocatore)
   }
 
   console.log(players)
 
   

//FUNCTIONS

   function generateCode() {
     let temp = ''
     for(var i=0; i<3; i++){
       temp += generateRandomLetter() 
     }
     for(var i=0; i<3; i++){
       temp += generateRandomNumber10() 
     }
     return temp
   }
 
   function generateRandomNumber10() {
     return Math.floor((Math.random() * 10))
   }
 
   function generateRandomNumber50() {
     return Math.floor((Math.random() * 51))
   }
 
   function generateRandomNumber100() {
     return Math.floor((Math.random() * 101))
   }
 
   function generateRandomLetter() {
     let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   
     return letters[Math.floor(Math.random() * letters.length)]
   }
 })
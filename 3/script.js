
$(function(){
   let arr1 = [7, 11, 14, 8, 4, 5]
   let arr2 = [1, 25, 34, 2, 74, 63, 99, 3, 55]
 
   while(arr1.length != arr2.length){
 
     if(arr1.length < arr2.length){
       arr1.push(generateRandomNumber10())
     }else{
       arr2.push(generateRandomNumber10())
     }
   }
 
   console.log(arr1.length, arr2.length)
 
   function generateRandomNumber10() {
     return Math.floor((Math.random() * 10))
   }
 })
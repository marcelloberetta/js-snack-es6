$(function(){

   let array = [7, 11, 3, 4]
 
   console.log(special(array, 2, 4))
 
   function special(arr, a, b){
     if((a<b) && (b<= arr.length)){
       let newArr = arr.slice(a, b)
       return newArr
     }else{
       return 0
     }
   }
 })
define(function(dataService) {
   let msg = 'hello xianzao';

   function getMsg() {
    return msg.toLocaleUpperCase();
   }
    
   return { getMsg }
});
define([
    'dataService',
], function(dataService) {
   let name = 'xianzao';

   function showMsg() {
    alert(dataService.getMsg() + ',' + name);
   }
    
   return { showMsg }
});
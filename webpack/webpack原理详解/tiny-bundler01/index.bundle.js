(function() {
   var moduleList = [
    function(require, module, exports) {
      // index.js
      const moduleA = require('./moduleA');
      console.log('moduleA', moduleA)
      },
    function(require, module, exports) {
      // moduleA.js
      module.exports = new Date().getTime();
      }
   ]
   
   var moduleDepIdList = [
      {'./moduleA': 1},
      {}
   ]

   function require(id, parentId) {
     var currentModuleId = parentId !== undefined ? moduleDepIdList[parentId][id] : id;
     var module = {exports: {}};
     var moduleFunc = moduleList[currentModuleId];
     moduleFunc((id) => require(id, currentModuleId), module, module.exports);
     return module.exports
   }

   // moduleList[0](require, module);
   require(0);
})()
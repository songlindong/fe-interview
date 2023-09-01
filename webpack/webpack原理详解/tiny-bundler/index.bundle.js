(function() {
   var moduleList = [
    function(require, module, exports) {
        console.log('hello bundler');
        module.exports = 'hello world';
      }
   ]

   var module = {exports: {}};
   moduleList[0](null, module);
})()
(function() {
   var moduleList = [
     function(require, module, exports) {
      require.ensure('1')
      .then(res => {
        console.log(res);
      })  
    }
   ]
   
   var moduleDepIdList = [
   ]
   
   var cache = {};
   function require(id, parentId) {
     var currentModuleId = parentId !== undefined ? moduleDepIdList[parentId][id] : id;
     var module = {exports: {}};
     var moduleFunc = moduleList[currentModuleId];
     moduleFunc((id) => require(id, currentModuleId), module, module.exports);
     return module.exports
   }

   windos.__JSONP = function(chunkId, moduleFunc) {
    var currentChunkStatus = cache[chunkId];
    var resolve = currentChunkStatus[0];
    var module = {exports: {}};
    moduleFunc(require, module, module.exports);
    resolve(module.exports);
   }
   
   require.ensure = function(chunkId, parentId) {
    var currentModuleId = parentId !== undefined ? moduleDepIdList[parentId][chunkId] : chunkId;
    var currentChunkStatus = cache[currentModuleId];

    if (currentChunkStatus === undefined) {
      var $script = document.createElement('script');
      $script.src = '/chunk_' + chunkId  + '.js';
      document.body.appendChild($script);

      var promise = new Promise(function(resolve) {
        var chunkCache = [resolve];
        chunkCache.status = true;
        cache[currentModuleId] = chunkCache;
      });
      cache[currentModuleId].push(promise);
      return promise;
    }

    if (currentChunkStatus.status) {
      return currentChunkStatus[1];
    }
    return chunkCache;
   }
   // moduleList[0](require, module);
   moduleList[0](require, null, null)
})()
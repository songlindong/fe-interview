(function (window) {
    let msg = 'xianzao';
    function getMsg() {
        return msg.toUpperCase();
    }
  window.dataService = { getMsg };
})(window)
(function (window, dataService) {
    let name = 'xianzao';
    function showMsg() {
        alert(dataService.getMsg() + ',' + name);
    }
  window.alerter = { showMsg };
})(window, dataService)
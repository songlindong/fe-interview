(function () {
  require.config({
    baseUrl: 'js/',
    paths: {
        alerter: './modules/alerter',
        dataService: './modules/dataService',
    },
  });

  require(['alerter'], function (alerter) {
    alerter.showMsg();
  });
})();
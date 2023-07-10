define(function (require, exports, module) {
    // 内部变量数据
    var data = 'xianzao.com';

    function show() {
        console.log('module1 show() ' + data);
    }

    exports.show = show;
})
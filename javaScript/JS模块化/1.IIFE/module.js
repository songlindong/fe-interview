(function (window) {
    let _data = 'www.xianzao.com';

    function foo() {
        console.log('foo()', _data)
    }

    function bar() {
        console.log('bar()', _data);
        _otherFunc()
    }

    function _otherFunc() {
        console.log('otherFunc()')
    }
    

    window.myModule = { foo, bar }
})(window)
(function (window, $) {
    let _data = 'xianzao.com';
    function foo() {
        console.log('foo', _data);

        $(document).ready(function () {
            $('body').on({
                mouseenter: function () {
                    $(this).css('background-color', 'gray');
                },

                mouseleave: function () {
                    $(this).css('background-color', 'red');
                },
            });
        });
    };

    function bar() {
        console.log('bar', _data);
    }

    window.myModule = { foo, bar };
})(window, $);
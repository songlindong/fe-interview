function discount(ctx, next) {
    console.log('starting discount ...')
    next(ctx * 0.8);
    console.log('ending discount ...')
}

function num(ctx, next) {
    console.log('starting num ...')
    next(ctx * 10);
    console.log('ending num ...')
}

function express(ctx, next) {
    console.log('starting express ...')
    next(ctx + 12);
    console.log('ending express')
}


function compose(args) {
    let result;
    return function(ctx) {
        let i = 0;
        let dispatch = function (i, ctx) {
            let fn;
            if (i < args.length) fn = args[i]; // fn 就是每一个函数
            if (i === args.length) {
                result = ctx;
                return;
            }
            return fn(ctx, dispatch.bind(null, ++i))
        }

        dispatch(i, ctx);
        return result;
    }
}

const sell = compose([num, discount, express])

console.log(sell(150))

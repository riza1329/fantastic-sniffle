function foo (x = 10) {
    return x + 1;
};

console.log(foo(1));

(function (x = 10) {
 console.log (x * 10);
}) (12);



const foo = (x = 0) => {
    return x + 1;
};

console.log (foo());

function addSquares (a,b) {
    function square (x) {
        return x * x
    };
    return square (a) + square (b)
};

console.log(addSquares(1,2)); // 5

function loop (x) {
    if (x >= 10) return;
    console.log (x);
    loop(x +1);
};

loop(1);
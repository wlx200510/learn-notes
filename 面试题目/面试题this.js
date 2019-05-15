/**
 * 题目一
 */

var number = 5;
var obj = {
    number: 7,
    fn1: (function () {
        var number;
        this.number *= 2;
        number = number * 2;
        number = 7;
        return function () {
            var num = this.number;
            this.number *= 2;
            console.log(num);
            number *= 3;
            console.log(number);
        }
    })()
}

console.log(number)
var fn1 = obj.fn1;
fn1.call(null);
obj.fn1();
console.log(number);

// 以上代码在浏览器运行请输出打印的六个数字

var a = 10;
var b = 30;
var c = a;
a = b;
b = c;
console.log(a + ',' + b);

var d = 10;
var e = 20;
e = e + d;
d = e - d;
e = e - d;
console.log(d + ',' + e);

var g = 10;
var h = 20;
[g,h] = [h,g];
console.log(g + ',' + h);
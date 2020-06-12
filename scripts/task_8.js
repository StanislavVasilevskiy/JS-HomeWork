	// Задание № 8
console.log("	Задание № 8");

let a = 8,
	b = 3,
	x1 = ((16 - a) / 2) + b,	//a+2(x-b)=16
	x2 = ( a - (15 * b)) / ( b - 6),	//b(x+15)=a+6x
	x3 = 23780 / (3 + a + b);	//x+2x+ax+bx=23780

console.log(x1);
console.log(x2);
console.log(x3);
console.log("	");

/*
a+2(x-b)=16
2(x-b)=16-a
x-b=(16-a)/2
x=((16-a)/2)+b

b(x+15)=a+6x
bx+15b=a+6x
bx-6x=a-15b
x(b-6)=a-15b
x=(a-15b)/(b-6)

x+2x+ax+bx=23780
x(1+2+a+b)=23780
x(3+a+b)=23780
x=23780/(3+a+b)
*/
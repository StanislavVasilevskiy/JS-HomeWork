	// Задание № 7
console.log("	Задание № 7");

let S = 2000000,
	p = 10,
	p1 = p / 100,
	years = 5
	month = years * 12,
	day = 365,
	n = ((p1 / 12) * ((1 + (p1 / 12)) ** month))/(((1 + (p1 / 12)) ** month)-1),
	z = S * n,
	Pereplata = (z * month) - S;

console.log(Pereplata);
console.log("	");
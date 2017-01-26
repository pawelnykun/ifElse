var a = prompt('Podaj zmienna a: ');
	b = prompt('Podaj zmienna b: ');
	value = (a * a) + (2 * a * b) - (b * b);

console.log('Zmienna a wynosi: ', a);
console.log('Zmienna b wynosi: ', b);
console.log('Zmienna value wynosi: ', value);
if (value > 0) {
	console.log('Wynik jest dodatni!');
} else if (value == 0) {
	console.log('Wynik jest równy zero!');
} else {
	console.log('Wynik jest ujemny!');
}
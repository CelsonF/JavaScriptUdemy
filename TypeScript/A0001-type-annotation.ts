
//Tipos básicos (aqui ocorre a inferência de tipos)
let nome: string = 'Celson';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
let big: bigint = 10n

//Arrays
let arrayDeNumerosGenerico: Array<number> = [1,2,3];
let arrayDeNumerosNaoGenerico: number[] = [1,2,3];
let arrayDeStringGenerico: Array<String> = [`a`,`b`,`c`];
let arrayDeStringNaoGenerico: string[] = [`a`,`b`,`c`];

//Objects
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
	nome:'Celson',
	idade: 25,
	adulto: true
}

//Functions
function sum(x: number, y: number): number{
	return x + y;
}

const sumWithArraowFunction: (x: number, y: number) => number = (x, y) => x + y;

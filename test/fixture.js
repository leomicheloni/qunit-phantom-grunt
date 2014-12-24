module("calculadora");

var calculadora = new Calculadora();

test("suma", function(assert){
	var resultado = calculadora.sumar(4,3);
	equal(resultado, 7);
});
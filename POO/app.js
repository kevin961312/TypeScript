"use strict";
class Rectangulo {
    constructor(baseRectangulo, alturaRectangulo, color) {
        this.baseRectangulo = baseRectangulo;
        this.alturaRectangulo = alturaRectangulo;
        this.color = color;
    }
    calcularArea() {
        const A = this.alturaRectangulo * this.baseRectangulo;
        this.printResult(A);
        return A;
    }
    calcularPerimetro() {
        return 2 * this.alturaRectangulo + 2 * this.baseRectangulo;
    }
    printResult(result) {
        if (result < 10) {
            console.log(result);
        }
        else {
            console.log("Valores muy altos");
        }
    }
    static calcularPrimtroRectangulo(alturaRectangulo, baseRectangulo) {
        return 2 * alturaRectangulo + 2 * baseRectangulo;
    }
}
class Circulo {
    constructor(radio) {
        this.radio = radio;
        Circulo.numeroDeCirculos++;
    }
    CalcularArea() {
        return Math.PI * this.radio * this.radio;
    }
}
Circulo.numeroDeCirculos = 0;
let variable = 0;
let rectangulo = new Rectangulo(4, 6, 'Red');
let rectangulo2 = new Rectangulo(7, 9, 'white');
console.log("El resultado es: " + Rectangulo.calcularPrimtroRectangulo(2, 2));
rectangulo.calcularArea();
const Circulo1 = new Circulo(10);
const Circulo2 = new Circulo(20);
const Circulo3 = new Circulo(50);
console.log("# de circulos " + Circulo.numeroDeCirculos);

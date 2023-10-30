class Rectangulo {

  constructor( public baseRectangulo:number, public alturaRectangulo:number, public  color:string)
  {
  }

  calcularArea(): number {
    const A = this.alturaRectangulo * this.baseRectangulo;
    this.printResult(A);
    return A;
  }

  calcularPerimetro(): number {
    return 2 * this.alturaRectangulo + 2 * this.baseRectangulo;
  }

  public printResult(result: number): void {
    if (result < 10) {
      console.log(result);
    } else {
      console.log("Valores muy altos");
    }
  }
  static calcularPrimtroRectangulo(
    alturaRectangulo: number,
    baseRectangulo: number
  ) {
    return 2 * alturaRectangulo + 2 * baseRectangulo;
  }
}



class Circulo{
  static numeroDeCirculos:number = 0;
  static readonly PI:number = 3.14;
  constructor(private radio:number) {
    Circulo.numeroDeCirculos++;
  }

  CalcularArea():number{
    return Math.PI * this.radio * this.radio;
  }
}
let variable:number = 0;

let rectangulo:Rectangulo = new Rectangulo(4,6,'Red');
let rectangulo2:Rectangulo = new Rectangulo(7,9,'white');

console.log("El resultado es: " + Rectangulo.calcularPrimtroRectangulo(2,2));
rectangulo.calcularArea();

const Circulo1:Circulo = new Circulo(10);
const Circulo2:Circulo = new Circulo(20);
const Circulo3:Circulo = new Circulo(50);

console.log("# de circulos " + Circulo.numeroDeCirculos);
// 1) Crie uma classe chamada “Círculo” que possua um atributo para armazenar o raio e métodos para calcular a área e o perímetro do círculo.
class Circulo{
    constructor(raio){
        this.raio = raio;
    }
    
    area(){
        return 3.14 * (this.raio**2);

    }

    perimetro(){
        return 2* 3.14 * this.raio;
    }
}

const circulo1 = new Circulo(3);
console.log("Área do Círculo 1: " + circulo1.area());
console.log("Perímetro do Círculo 1: " + circulo1.perimetro())

const circulo2 = new Circulo(10);
console.log("Área do Círculo 2: " + circulo2.area());
console.log("Perímetro do Círculo 2: " + circulo2.perimetro())

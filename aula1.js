/*
Exercício 1

1 - Crie uma classe para representar carros:
Os carros possuem:
    - Marca
    - Ano 
    - Gasto médio de Combustível por KM

2 - Crie um método que dado a quantidade de KMs e o preço do combustível noe dê o valor gasto em reais para realizar o percurso

*/

class Cars{
    brand;
    name;
    color;
    average;

    constructor(brand, name, color, average) {
        this.brand = brand;
        this.name = name;
        this.color = color;
        this.average = average;
    }
    calculateCost(distance,fuelPrice){
        return ((distance / this.average) * fuelPrice).toFixed(2)
    }

}

const civic = new Cars('Honda', 'Civic', 'Vermelho', 8); // preferi informar o valor de média inteiro e optei por dividir no calculo do método ao invés de multiplicar.
const clio = new Cars('Renault', 'Clio', 'Azul', 15); // preferi informar o valor de média inteiro e optei por dividir no calculo do método ao invés de multiplicar.
const gol = new Cars('VW', 'Gol', 'Prata', 10); // preferi informar o valor de média inteiro e optei por dividir no calculo do método ao invés de multiplicar.

//console.log(civic.calculateCost(70, 5.50)); - - - usado para imprimir o método anteriormente
//console.log(clio.calculateCost(70, 5.50)); - - - usado para imprimir o método anteriormente
//console.log(gol.calculateCost(70, 4.89)); - - - usado para imprimir o método anteriormente

//console.log(`O carro ${gol.name} fez o percurso gastando R$ ${gol.calculateCost(70, 4.89)}`);


/*
Execício 2

1 - Crie uma classe para representar pessoas:
    - nome;
    - peso;
    - altura.

2 - Instancie uma pessoa chamada José, 70Kg e 1,75m de altura e peça ao José para dizer o seu IMC (IMC = peso/ (altura * altura));
*/

class Person{
    name;
    weight;
    height;

    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    bmiCalculate(){
        return (this.weight / Math.pow(this.height, 2)).toFixed(2)
    }

    bmiCondition(){ 
       const bmi = this.bmiCalculate();
       if (bmi  < 18.5) {
        return "Abaixo do peso"
    }else if ( bmi >= 18.5 && bmi <= 25 ){
        return "com Peso Normal"
    }else if (bmi > 25 && bmi <= 30){
        return "Acima do peso"
    }else if (bmi > 30 && bmi <= 40){
        return "Obeso"
    } else {
        return "Obesidade grave"
    }
    }
}

const jose = new Person('José', 80, 1.75);
console.log(jose.bmiCondition())
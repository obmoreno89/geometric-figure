//Codigo del cuadrado

console.group("cuadrado");
// const ladoCuadrado = 5;
// console.log("los lados del cuadro miden: " +ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
};
perimetroCuadrado();

// console.log("el perimetro de mi cuadrado es:  " +perimetroCuadrado + " cm");

function areaCuadrado(lado){
return lado * lado;

};
areaCuadrado();
console.groupEnd();

//Codigo del triangulo

// console.group("triangulo")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("los lados de mi triangulo son: " +ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " +baseTriangulo +" cm");

// const alturaTriangulo = 5.5;
// console.log("la altura del triangulo es de: " +alturaTriangulo +"cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
};
perimetroTriangulo();


function areaTriangulo(base,altura){
    return (base * altura) /2;
};
areaTriangulo();

console.groupEnd();

//Codigo del circulo
console.group("circulo");

// //radio
// const radioCirculo = 4;
// console.log("el radio del circulo es " +radioCirculo+ "cm");

//Diametro
function diametroCirculo(radio){
    return radio * 2;
};
diametroCirculo();


// pi
const PI = Math.PI;
console.log("el pi del circulo es: " +PI);

//circunferencia se llama una funcion en este caso diametroCirculo.
function perimetroCirculo(radio){
   const diametro = diametroCirculo(radio);
    return diametro * PI
};


//Area
function areaCirculo(radio){
    return (radio * radio) *PI;
};


console.groupEnd();

//interactuamos mediante los botones en el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
};
// operacion con triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTrianguloLado1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTrianguloLado2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputTrianguloBase");
    const value3 = Number(input3.value);
    const perimetroT = perimetroTriangulo(value1,value2,value3);
    alert(perimetroT);
};

function calcularAreaTriangulo(){
    const altura = document.getElementById("InputTrianguloAltura");
    const valueAltura = altura.value;
    const base = document.getElementById("InputTrianguloBaseArea");
    const valueBase = base.value;
    const perimetroArea = areaTriangulo(valueAltura,valueBase);
    alert(perimetroArea);
};

// operacion con circulo
function calcularDiametroCirculo(){
    const diametro = document.getElementById("InputCirculoRadio");
    const valueDiametro = diametro.value;
    const circuloDiametro = diametroCirculo(valueDiametro);
    alert(circuloDiametro);
};

function calcularAreaCirculo(){
    const circuloArea = document.getElementById("InputCirculoRadio");
    const valueArea = circuloArea.value;
    const circuloAreas = areaCirculo(valueArea);
    alert (circuloAreas);
}

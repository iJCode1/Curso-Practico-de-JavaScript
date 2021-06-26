//Cuadrado
function cuadrado(ladoCuadrado){
    let perimetroC = ladoCuadrado + ladoCuadrado + ladoCuadrado + ladoCuadrado;
    let areaC = ladoCuadrado * ladoCuadrado;
    console.group("Cuadrado");
    console.log(`El perímetro del cuadrado es: ${perimetroC}cm`);
    console.log(`El área del cuadrado es: ${areaC}cm^2`);
    console.groupEnd();
}

function cuadrado2(){
    let elemento = document.getElementById("cLado");
    let ladoCuadrado = parseFloat(elemento.value);
    let perimetroC = ladoCuadrado + ladoCuadrado + ladoCuadrado + ladoCuadrado;
    let areaC = ladoCuadrado * ladoCuadrado;

    alert(`El perímetro del cuadrado es: ${perimetroC}cm y el área es: ${areaC}cm^2`);
}

cuadrado(156);


//Triangulo
function trinagulo(lado1, lado2, base, altura){
    let perimetroT = lado1 + lado2 + base;
    let areaT = (base * altura) / 2;

    console.group("Triangulo");
    console.log(`El perímetro del triangulo es: ${perimetroT}cm`)
    console.log(`El área del triangulo es: ${areaT}cm^2`)
    console.groupEnd();
}

function triangulo2(){
    let lado1 = document.getElementById("tLado1");
    let tLado1 = parseFloat(lado1.value);

    let lado2 = document.getElementById("tLado2");
    let tLado2 = parseFloat(lado2.value);

    let base = document.getElementById("tBase");
    let tBase = parseFloat(base.value);

    let altura = document.getElementById("tAltura");
    let tAltura = parseFloat(altura.value);
    
    let tPerimetro = tLado1 + tLado2 + tBase;
    let tArea = (tBase*tAltura)/2;

    alert(`El perímetro del triangulo es: ${tPerimetro}cm y el área es de ${tArea}cm^2`);

}

trinagulo(6, 6, 4, 5.5);


//Circulo
function circulo(radio){
    let diametroCi = radio*2;
    const PI = Math.PI;
    let perimetroCi = diametroCi * PI;
    let areaCi = PI * Math.pow(radio,2);

    console.group("Circulo");
    console.log(`El perímetro del circulo es: ${perimetroCi}cm`);
    console.log(`El área del circulo es: ${areaCi}cm^2`);
    console.groupEnd();
}

circulo(4);

function circulo2(){
    let radio = document.getElementById("cRadio");
    let cRadio = parseFloat(radio.value);
    const PI = Math.PI;

    let diametroCi = 2 * cRadio;
    let perimetroCi = diametroCi * PI;
    let areaCi = PI * (cRadio**2);

    alert(`El perímetro del circulo es: ${perimetroCi}cm y el área es: ${areaCi}cm^2`);
}
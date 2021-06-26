//Cuadrado
function cuadrado(ladoCuadrado){
    let perimetroC = ladoCuadrado + ladoCuadrado + ladoCuadrado + ladoCuadrado;
    let areaC = ladoCuadrado * ladoCuadrado;
    console.group("Cuadrado");
    console.log(`El perímetro del cuadrado es: ${perimetroC}cm`);
    console.log(`El área del cuadrado es: ${areaC}cm^2`);
    console.groupEnd();
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
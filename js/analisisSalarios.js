/*
    Analizando los salarios de México
*/

//Obteniendo los salarios unicamente.
const obtenerSalarios = arreglo =>{
    return arreglo.map( ele =>{
        return ele.salary;
    })
};
//console.log(obtenerSalarios(salariosMexico));
// (24) [37000, 28434, 34274, 18364, 18700, 12400, 16560, 18373, 19373, 17823, 19734, 27473, 19372, 10834, 16723, 18947, 36427, 19374, 36821, 36482, 26483, 18492, 46283, 25372]

//Ordenando los salarios
const ordenarSalarios = obtenerSalarios(salariosMexico).sort((elementoA, elementoB) =>{
    return elementoA - elementoB;
});
// console.log(ordenarSalarios);
// (24) [10834, 12400, 16560, 16723, 17823, 18364, 18373, 18492, 18700, 18947, 19372, 19373, 19374, 19734, 25372, 26483, 27473, 28434, 34274, 36427, 36482, 36821, 37000, 46283]

/* 
    Calculando la Mediana 
*/
const esPar = arreglo =>{
    if(arreglo.length % 2 === 0){
        return true
    }else{
        return false
    }
}

const obtenerMedio = array => {
    return parseInt((array.length) / 2);
}

let $mediana = 0;

const mediana = array => {
    if(esPar(array)){
        let valorActual = array[obtenerMedio(array)];
        let valorAnterior = array[obtenerMedio(array) - 1];
        // console.log(`Valor actual: ${valorActual}, valorAnterior: ${valorAnterior}`);
        $mediana = ( valorActual + valorAnterior ) / 2;
    }else{
        $mediana = array[obtenerMedio(array)];
    }
    return $mediana;
}

console.log(`La mediana es: ${mediana(ordenarSalarios)}`);
//La mediana es: 19373.5

/*
    Obteniendo el 10% superior de salarios en mexico
*/

const salariosTop = ordenarSalarios.slice((ordenarSalarios.length * (100 - 10)) / 100, ordenarSalarios.length);
const salariosTopMediana = mediana(salariosTop);

console.log(`La mediana de los salarios top es: ${salariosTopMediana}`);
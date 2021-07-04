const valores = [1, 4, 7, 3, 12, 23, 12, 3, 20, 16, 6, 8, 5, 8, 4]; //54

//Calculo de la Media
const calcularMedia = arreglo =>{
    return (arreglo.reduce((suma, elemento)=>{
        return suma+=elemento
    })) / arreglo.length;
};

console.log(calcularMedia(valores));

//Saber si el tamaño de un arreglo es par
const esPar = arreglo =>{
    if(arreglo.length % 2 === 0){
        return true;
    }else{
        return false;
    }
}

//Ordenando un Arreglo
const ordenarArreglo = arreglo =>{
    return arreglo.sort((a,b)=>{
        return a - b;
    });
};

//Calculo de la Mediana
const calcularMediana = arreglo =>{
    let mitad = parseInt(arreglo.length/2);
    if(esPar(arreglo)){
        let actual = arreglo[mitad];
        let anterior = arreglo[mitad-1];
        //console.log(`El actual es: ${actual}, anterior es: ${anterior}`);
        console.log(`La mediana es: ${calcularMedia([actual,anterior])}`);

    }else{
        let mitad = parseInt(arreglo.length / 2);
        //console.log(`La mitad es: ${mitad}`);
        console.log(`La mediana es: ${arreglo[mitad]}`);
    }
}


console.log(`El arreglo ordenado es: ${ordenarArreglo(valores)}`);

//console.log(`Es par: ${esPar(valores)}, tiene ${valores.length}`)

calcularMediana(valores);
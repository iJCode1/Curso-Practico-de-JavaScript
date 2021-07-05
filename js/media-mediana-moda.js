const valores = [1, 3, 4, 7, 4, 3, 12, 23, 12, 3, 4, 20, 3, 16, 6, 4, 3, 8, 5, 8, 3, 4];
//const valores = [1, 2, 5, 3, 2]; //54

//Calculo de la Media
const calcularMedia = arreglo =>{
    return (arreglo.reduce((suma, elemento)=>{
        return suma+=elemento
    })) / arreglo.length;
};

console.log(`La media es: ${calcularMedia(valores)}`);

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


//console.log(`El arreglo ordenado es: ${ordenarArreglo(valores)}`);

//console.log(`Es par: ${esPar(valores)}, tiene ${valores.length}`)

calcularMediana(valores);

//Calculo de la moda

/*
    Se crea un objeto donde posteriormente se creara la llave del numero y las veces
    que aparece en el arreglo.
*/
const objetoValores = {};

/*
    Se comienza a crear la llave o identificador del objeto del numero que aparece.
    Si es la primera vez, se crea su llave. Si ya es la segunda vez que aparece un numero, se
    le suma en 1 a la veces que ha aparecido.
*/
const creacionObjeto = arreglo =>{
    arreglo.map( ele => {
        //console.log(`El elemento es: ${ele}, el index es: ${index}, y el array es: ${array}`);
        if(objetoValores[ele]){
            objetoValores[ele] +=1;
        }else{
            objetoValores[ele] = 1;
        }
    })
    return objetoValores;
}

/*
    Se convierte el objeto en un arreglo de arreglos y se ordena a partir
    de las veces que ha aprecido un numero en el arreglo, de forma Ascendente.
*/
const ordenObjeto = objeto =>{
    return Object.entries(objeto).sort((a, b)=>{
        return a[1] - b[1];
    })
}

const ultimoElemento = arreglo => {
    return arreglo[arreglo.length - 1];
}

// console.log(`La moda es: ${valores}`);
// console.log(creacionObjeto(valores))
// console.log(`La moda es: ${ultimoElemento(ordenObjeto(objetoValores))}`);

const calcularModa3 = () =>{
   return ultimoElemento(ordenObjeto(creacionObjeto(valores)));
}

console.log(`La moda es: ${calcularModa3()}`);

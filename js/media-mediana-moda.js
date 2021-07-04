const valores = [1, 4, 7, 3, 12, 6, 8, 4]; //45

const calcularMedia = arreglo =>{
    return (arreglo.reduce((suma, elemento)=>{
        return suma+=elemento
    })) / arreglo.length;
};

console.log(calcularMedia(valores));
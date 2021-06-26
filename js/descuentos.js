function aplicarDescuento(){
    let precioInput = document.getElementById("price");
    let precio = parseFloat(precioInput.value);

    let descuentoInput = document.getElementById("discount");
    let descuento = parseFloat(descuentoInput.value);

    let precioFinal = (precio * (100-descuento))/100;

    const p = document.getElementById("priceWithDiscount");
    p.innerText=`El precio final es: $${precioFinal}`;
}
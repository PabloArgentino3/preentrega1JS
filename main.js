let nombreUsuario = prompt('Ingresa tu nombre');

while ((nombreUsuario == '') || (nombreUsuario == ' ')) {
    alert('Nombre invalido');
    nombreUsuario = prompt('Ingresa tu nombre');
}
let edad = prompt("Ingresa tu edad");

if (edad < 18) {
    alert("Prohibida la venta de alcohol a menores");
}

else {
    alert("Podes continuar con tu compra");
}

alert('Bienvenido a Chupi ' + nombreUsuario);

let mensaje = prompt('Queres comprar tus bebidas? (s-si)');

let total = 0;


while (mensaje.toLowerCase() == 's') {
    let producto = prompt('1 - Vodka Absolut Mango $8500\n2 - Gin bombay $9000\n3 - Fernet Branca $2100\n4 - Coca Cola 2.25L $ 800');

    switch (producto) {
        case '1':
            alert('Agregaste Vodka Absolut Mango $8500 a tu pedido');
            incrementarTotal(8500);
            break;
        case '2':
            alert('Agregaste Gin bombay $9000 a tu pedido');
            incrementarTotal(9000);
            break;
        case '3':
            alert('Agregaste Fernet Branca $2100 a tu pedido');
            incrementarTotal(2100);
            break;
        case '4':
            alert('Agregaste Coca Cola 2.25L $800 a tu pedido');
            incrementarTotal(800);
            break;
        default:
            alert('Producto inexistente');
            break;
    }

    mensaje = prompt('Deseas comprar otro producto ? (s-si)');
}

alert('Monto total de tu pedido $' + total);


function incrementarTotal(precio) {
    total = total + precio;
    alert('Tu pedido suma hasta el momento $' + total);
}


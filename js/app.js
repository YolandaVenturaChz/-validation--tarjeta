function isValidCard() {
    var cardNumber = prompt('Ingresa el número de la tarjeta');
    if (!isNaN(cardNumber)) {
        if (cardNumber.length >= 10 && cardNumber.length <= 16) {

            cardNumber = cardNumber + "";
            cardNumber = cardNumber.split("").reverse().join("");

            var validacion;
            var suma = 0;
            var digitos = cardNumber.length;
            var pares = digitos % 2;
            /**recorre cada digito */
            for (var i = 0; i < digitos; i++) {
                var digito = parseInt(cardNumber.charAt(i));
                if (i % 2 == pares) {
                    digito *= 2;
                }

                if (digito > 9) {
                    digito -= 9;
                }
                /*Sumatoria de digitos*/
                suma += digito;
            } /*Si el módulo 10 de la suma es igual a cero*/
            if (suma % 10 == 0) {
                valid = true;
                document.write('La tarjeta es valida');
            }
            /**Si el módulo 10 de la suma es diferente a cero */
            if (suma % 10 !== 0) {
                validacion = false;
                document.write('La tarjeta no es valida: Ingrese de nuevo');
            }

        } else {
            alert('Verifique el número de su tarjeta\nIngrese mínimo 10 y máximo 16 dígitos')
        }
    } else {
        alert('Solo se puede ingresar números');
    }
    return validacion;


}
isValidCard();
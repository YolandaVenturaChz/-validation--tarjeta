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
            }
        }
    }
}
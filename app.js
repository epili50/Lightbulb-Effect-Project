// Buena suerte ! Espero que se te encianda la "bombilla"!

let isLightOn = false;

const bulb = document.querySelector('#bulb');

bulb.ondblclick = function () {
    // 1. Averiguar que ha hecho el usuario (hacer doble click. Lo sabemos porque se está ejecutando esta función)

    // 2. En función de las variables de estado, actualizar el DOM y las variables de estado

    // 2.1 Si la bombilla está apagada, hay que encendarla. Esto significa: quitar la clase bulb-off de la bombilla y añadir la clase bulb-on. Y actualizar la variable de estado isLightOn = true
    if (!isLightOn) {
        bulb.classList.remove('bulb-off');
        bulb.classList.add('bulb-on');
        isLightOn = true;
    }

    // 2.2 Si la bombilla está encendida, hay que apagarla. Esto significa: añadir la clase bulb-off y quitar la clase bulb-on. Actualizar la variable de estadi isLightOn = false
    else {
        bulb.classList.remove('bulb-on');
        bulb.classList.add('bulb-off');
        isLightOn = false;
    }

    // Actualizar el mensaje en función de la variable de estado 
    if (isLightOn) {
        document.querySelector('#message').textContent = "The Light is on";
    } else {
        document.querySelector('#message').textContent = "The Light is off";
    }
}

//Selecciona un numero al azar
let numeroAlAzar = Math.floor(Math.random()*10)+1;

let numeroEntrada = document.getElementById(`numeroEntrada`);
let mensaje = document.getElementById(`mensaje`);



//se ejecuta al tocar el boton comprobar
function chequearResultado(){
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 10 || isNaN(numeroIngresado)){
        mensaje.textContent = "Por favor, introduce un numero válido"
        mensaje.style.color = 'violet';
        return
    };

    if(numeroIngresado === numeroAlAzar){
        mensaje.textContent = "felicitaciones! has adivinado";
        mensaje.style.color = 'violet';
        numeroEntrada.disabled = true;
    }else if(numeroIngresado < numeroAlAzar){
        mensaje.textContent = "no, es mas alto!";
        mensaje.style.color = 'violet';
    }else {
        mensaje.textContent = "no, es mas bajo!";
        mensaje.style.color = 'violet';
    }
};

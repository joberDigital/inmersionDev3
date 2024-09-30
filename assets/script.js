var cantidad = document.getElementById("cantidad");
var boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");
let cadenaCaracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // sum new characters
  cadenaCaracteres=cadenaCaracteres.concat("!@#$%^&*()")
  console.log(cadenaCaracteres);
  const elegirPassword = () => {
  let numeroDigitado = parseInt(cantidad.value);
  console.log(numeroDigitado);
  if (numeroDigitado < 8) {
  alert("La cantidad de caracteres tienen que ser mayor a 8");
}    
else{
    generar(numeroDigitado);
  }    
cantidad.value=""
}
  function generar(numeroDigitado) {
    let password = "";
    for (let i = 0; i < numeroDigitado; i++) {
    let caracterAleatorio =
    cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
    password += caracterAleatorio;
    console.log(caracterAleatorio);
  }
   contrasena.value = password;
tipoPassword(password)
  }
function tipoPassword(numeroDigitado) {
//       /\w+/g      numeros y letras
//      /\b\d{2}\b/g     2 signos
// mayuscula/minuscula/numero/simbolo
let alta =   /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,} $/g.test(numeroDigitado) ;
let media =  /[^A-Za-z0-9]/g.test(numeroDigitado) ;
let baja =   /\d/.test(numeroDigitado) ;
switch (alta,media,baja) {
  case alta:
  mensajeSeguridad.textContent  = "Seguridad Fuerte";
  mensajeSeguridad.style.color = "#00ff00";
  mensajeSeguridad.style.textShadow = "0 0 5px rgba( 0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.5)";
media=false 
baja=false 
  break;
case media:
  mensajeSeguridad.textContent = "Seguridad Media";
  mensajeSeguridad.style.color = "#ffd700";
  mensajeSeguridad.style.textShadow = "0 0 5px rgba(255, 215, 0, 0.7 ), 0 0 10px rgba(255, 215, 0, 0.5)";
  alta=false 
  baja=false 
break;
case baja:
  mensajeSeguridad.textContent = "seguridad Debil";
  mensajeSeguridad.style.color = "#fAA700";
  mensajeSeguridad.style.textShadow = "0 0 5px rgba(255, 150, 150, 0.7), 0 0 10px rgba(255, 150, 150, 0.5)";
  media=false 
  alta=false 
break;
default:
  mensajeSeguridad.textContent = "";
break;
}
}
function copiar() {
    // contrasena.setSelectionRange(0, 99999);
  // navigator.clipboard.writeText(contrasena.value);
  if (contrasena.value!='') {
      contrasena.select();
      document.execCommand("copy");//ejecuta el comando de copiar lo que esta en el campo de contrasena
      alert("Contraseña copiada al portapapeles");
  }
}
function borrar() {
  mensajeSeguridad.textContent = "";
  contrasena.value=""
  cantidad.value=""
 
}
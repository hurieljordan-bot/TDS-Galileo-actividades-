let nun = Math.floor(Math.random() * 9 ) + 1;
let seguir = true 
while(seguir){
    let nun_us = Number(prompt("ingrese un numero entre 3 y 6 "))
    while (true){
      if (nun_us >= 1 && nun_us <= 9){
        break
        }
      else {
        nun_us = Number(prompt("ingrese un numero entre 3 y 6 "))
        }
    }

    let adivina = prompt("adivine, ¿su numero es mayor, menor o igual ?")
    switch (adivina){
  case "mayor":
    if (nun_us > nun){
        alert("La computadora eligió "+ nun + " usted eligió " + nun_us + " Su elección es mayor ¡Ha adivinado!")
        break}
    else {
        alert("La computadora eligió "+ nun + " usted eligió " + nun_us + " Su elección es mayor ¡Ha perdido :(!")
        break}
  case "menor":
    if (nun_us < nun){
        alert("La computadora eligió " + nun + " usted eligió " + nun_us + " Su elección es menor ¡Ha adivinado!")
        break} 
    else {
       alert("La computadora eligió " + nun + " usted eligió " + nun_us + " Su elección es menor ¡Ha perdido :( )")
       break}
   case "igual":
    if (nun_us === nun){
        alert("La computadora eligió " + nun + " usted eligió " + nun_us + " Su elección es igual ¡Ha adivinado!")
           break} 
        else {
        alert("La computadora eligió " + nun + " usted eligió " + nun_us + " Su elección es igual ¡Ha perdido :( ")
        break}
   default: {
        alert("escriba en minisculas y la palabra correcta")
        break
      }
    }
let op = prompt("decea seghuir si/no? ")
   if (op !== "si"){
      seguir = false
alert("jelvin huriel loyo jordan.26005985")}    
}        
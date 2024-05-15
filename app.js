/* Configuración para el carrusel */
const imgsCarrusel = document.querySelector('.contenedor-carrusel');
const punto = document.querySelectorAll('.punto');

// Se averigua la posición del punto al hacer click
// Se recorren todas las class "punto"
punto.forEach((cadaPunto,i)=>{
  punto[i].addEventListener('click',()=>{
    let posicion = i;

    // Se aplica un transformX a "imgsCarrusel" (posicion 0 --> 0%, posicion 1 --> -50%)
    let operacion = posicion * -33.33;
    imgsCarrusel.style.transform = `translateX(${operacion}%)`;

    // Se recorren los puntos para  actualizar la clase "activo"
    punto.forEach((cadaPunto, i)=>{
      punto[i].classList.remove('activo');
    })
    punto[i].classList.add('activo');
  })
})

let infoDatos = [{}]

function obtenerDatos(){
    let name= document.getElementById("nombres")
    let correo= document.getElementById("email")
    let comentario= document.getElementById("producto")
    infoDatos.push({nombre: name.value, correo:correo.value, comentario: comentario.value})
    console.log(infoDatos);
}
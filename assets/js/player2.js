
var x2 = 40;
var y2 = 40;
var xP2 = x2;
var yP2 = y2;
var id_bloqueP2 = xP2 + "," + yP2;
var color_bloqueP2 = document.getElementById(id_bloqueP2);
color_bloqueP2.style.background = "blue";
// Función para manejar el evento de tecla presionada
const manejarTeclaPresionada = (event) => {
    // Verificar si la tecla presionada es la flecha derecha
    if (event.key === "d") {
        if (x <= x2-1) {
            var id_bloque_rightP2 = xP2 + 1 + "," + yP2;
        }else{
            var id_bloque_rightP2 = 1 + "," + yP2;
        }

            var color_bloqueP2 = document.getElementById(id_bloque_rightP2)
            var color_rightP2 = color_bloqueP2.style.background;
            if (color_rightP2 == "purple"){ 
                // No hagas nada si el color es negro  
            }else {
                var color_bloqueP2 = document.getElementById(id_bloqueP2);
                color_bloqueP2.style.background = "black";
                if (xP2 <=40) {
                    //Incrementar x en 1
                    xP2 = xP2 + 1;
                        //Reducir el x cuando sea mayor a 40
                        if (xP2 >=41){
                            xP2 =1
                        }            
                    //Actualizar el id del bloque
                    id_bloque = xP2 + "," + yP2;
                    //Obtener el elemento del DOM utilizando el id dinámico
                    var color_bloqueP2 = document.getElementById(id_bloqueP2);
                    //Cambiar color de fondo
                    color_bloqueP2.style.background = "blue";
                }
            }
    }   
    if (event.key === "a") {
        if (x > 1) {
            var id_bloque_left = (x - 1) + "," + y;
        } else {
            var id_bloque_left = "40," + y;
        }
        var color_bloque = document.getElementById(id_bloque_left);
        var color_left = color_bloque.style.background;
        if (color_left === "black") { 
            // No hagas nada si el color es negro  
        } else {
            var color_bloque_actual = document.getElementById(id_bloque);
            color_bloque_actual.style.background = "black";
            if (x > 1) {
                // Decrementar x en 1
                x = x - 1;
            } else {
                x = 40;
            }
            // Actualizar el id del bloque
            id_bloque = x + "," + y;
            // Obtener el elemento del DOM utilizando el id dinámico
            var nuevo_bloque = document.getElementById(id_bloque);
            // Cambiar color de fondo a rojo
            nuevo_bloque.style.background = "red";
        }
    }
    if (event.key === "s") {
        if (y < y2) {
            var id_bloque_down = x + "," + (y + 1);
        } else {
            var id_bloque_down = x + ",1";
        }
        var color_bloque = document.getElementById(id_bloque_down);
        var color_down = color_bloque.style.background;
        if (color_down === "black") { 
            // No hagas nada si el color es negro  
        } else {
            var color_bloque_actual = document.getElementById(id_bloque);
            color_bloque_actual.style.background = "black";
            if (y < y2) {
                // Incrementar y en 1
                y = y + 1;
            } else {
                y = 1;
            }
            // Actualizar el id del bloque
            id_bloque = x + "," + y;
            // Obtener el elemento del DOM utilizando el id dinámico
            var nuevo_bloque = document.getElementById(id_bloque);
            // Cambiar color de fondo a rojo
            nuevo_bloque.style.background = "red";
        }
    }
    if (event.key === "w") {
        if (y > 1) {
            var id_bloque_up = x + "," + (y - 1);
        } else {
            var id_bloque_up = x + ",40";
        }
        var color_bloque = document.getElementById(id_bloque_up);
        var color_up = color_bloque.style.background;
        if (color_up === "black") { 
            // No hagas nada si el color es negro  
        } else {
            var color_bloque_actual = document.getElementById(id_bloque);
            color_bloque_actual.style.background = "black";
            if (y > 1) {
                // Decrementar y en 1
                y = y - 1;
            } else {
                y = y2;
            }
            // Actualizar el id del bloque
            id_bloque = x + "," + y;
            // Obtener el elemento del DOM utilizando el id dinámico
            var nuevo_bloque = document.getElementById(id_bloque);
            // Cambiar color de fondo a rojo
            nuevo_bloque.style.background = "red";
        }
    }
};







// Agregar un evento de escucha para la tecla presionada
document.addEventListener("keydown", manejarTeclaPresionada);
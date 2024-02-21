
// Coordenadas Primer player
var x = 1;
var y = 1;
//Recuperar variables (tamaño del tablero)
var x2 = localStorage.getItem('x2');
var y2 = localStorage.getItem('y2')

// Coordenadas Segundo player
var xP2 = (x2);
var yP2 = (y2);

// Player 1
var id_bloque = x + "," + y;
var color_bloque = document.getElementById(id_bloque);
color_bloque.style.background = "red";

// Player 2
var id_bloqueP2 = xP2 + "," + yP2;
var color_bloqueP2 = document.getElementById(id_bloqueP2);
color_bloqueP2.style.background = "blue";





// Función para manejar el evento de tecla presionada
const manejarTeclaPresionada = (event) => {



    // ---------------------------- Player 1 -----------------------//
    // Movimiento Player 1 Derecha
    if (event.key === "ArrowRight") {
        if (x <= x2-1) {
            var id_bloque_right = x + 1 + "," + y;
        }else{
            var id_bloque_right = 1 + "," + y;
        }

            var color_bloque = document.getElementById(id_bloque_right)
            var color_right = color_bloque.style.background;
            if (color_right === "orange" || color_right === "purple" || color_right === "blue"){ 
                // No hagas nada si el color es orange o purple   
            }else {
                var color_bloque = document.getElementById(id_bloque);
                color_bloque.style.background = "orange";
                if (x <=x2) {
                    //Incrementar x en 1
                    x = x + 1;
                        //Reducir el x cuando sea mayor a 40
                        if (x > x2){
                            x =1
                        }            
                    //Actualizar el id del bloque
                    id_bloque = x + "," + y;
                    //Obtener el elemento del DOM utilizando el id dinámico
                    var color_bloque = document.getElementById(id_bloque);
                    //Cambiar color de fondo
                    color_bloque.style.background = "red";
                }
            }
    }   
    // Movimiento Player 1 Izquierda
    if (event.key === "ArrowLeft") {
        if (x > 1) {
            var id_bloque_left = (x - 1) + "," + y;
        } else {
            var id_bloque_left = x2+ "," + y;
        }
        var color_bloque = document.getElementById(id_bloque_left);
        var color_left = color_bloque.style.background;
        if (color_left === "orange" || color_left === "purple" || color_left === "blue"){ 
            // No hagas nada si el color es orange o purple   
            } else {
                var color_bloque_actual = document.getElementById(id_bloque);
                color_bloque_actual.style.background = "orange";
                if (x > 1) {
                    // Decrementar x en 1
                    x = x - 1;
                } else {
                    x = x2;
                }
                // Actualizar el id del bloque
                id_bloque = x + "," + y;
                // Obtener el elemento del DOM utilizando el id dinámico
                var nuevo_bloque = document.getElementById(id_bloque);
                // Cambiar color de fondo a rojo
                nuevo_bloque.style.background = "red";
            }
        }
    // Movimiendo Player 1 Abajo
    if (event.key === "ArrowDown") {
        if (y < y2) {
            var id_bloque_down = x + "," + (y + 1);
        } else {
            var id_bloque_down = x + ",1";
        }
        var color_bloque = document.getElementById(id_bloque_down);
        var color_down = color_bloque.style.background;
        if (color_down === "orange" || color_down === "purple" || color_down === "blue") { 
            // No hagas nada si el color es orange o purple  
        } else {
            var color_bloque_actual = document.getElementById(id_bloque);
            color_bloque_actual.style.background = "orange";
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
    // Movimiento Player 1 Arriba
    if (event.key === "ArrowUp") {
        if (y > 1) {
            var id_bloque_up = x + "," + (y - 1);
        } else {
            var id_bloque_up = x + "," + y2;
        }
        var color_bloque = document.getElementById(id_bloque_up);
        var color_up = color_bloque.style.background;
        if (color_up === "orange" || color_up === "purple" || color_up === "blue") { 
            // No hagas nada si el color es orange o purple  
        } else {
            var color_bloque_actual = document.getElementById(id_bloque);
            color_bloque_actual.style.background = "orange";
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



    // ---------------------------- Player 2 -----------------------//


    // Movimiento Player 2 Derecha
    if (event.key === "d") {
        if (xP2 < x2) {
            var id_bloque_rightP2 = (xP2 + 1) + "," + yP2;
        } else {
            var id_bloque_rightP2 = "1," + yP2;
        }
    
            var color_bloqueP2 = document.getElementById(id_bloque_rightP2);
            var color_rightP2 = color_bloqueP2.style.background;
            if (color_rightP2 === "orange" || color_rightP2 === "purple" || color_rightP2 === "red"){ 
                // No hagas nada si el color es orange o purple 
            } else {
                var color_bloque_actualP2 = document.getElementById(id_bloqueP2);
                color_bloque_actualP2.style.background = "purple";
                    if (xP2 < x2) {
                        // Incrementar x en 1
                        xP2 = xP2 + 1;
                    } else {
                        // Restablecer x a 1
                        xP2 = 1;
                    }
                // Actualizar el id del bloque del segundo jugador
                id_bloqueP2 = xP2 + "," + yP2;
                // Obtener el elemento del DOM utilizando el id dinámico para el segundo jugador
                var nuevo_bloqueP2 = document.getElementById(id_bloqueP2);
                // Cambiar color de fondo a azul para el segundo jugador
                nuevo_bloqueP2.style.background = "blue";
            }
        }

        // Movimiento Player 2 Arriba
    if (event.key === "w") {
        if (yP2 > 1) {
            var id_bloque_upP2 = xP2 + "," + (yP2 - 1);
        } else {
            var id_bloque_upP2 = xP2 +","+ y2;
        }
    
            var color_bloqueP2 = document.getElementById(id_bloque_upP2);
            var color_upP2 = color_bloqueP2.style.background;
            if (color_upP2 === "orange" || color_upP2 === "purple" || color_upP2 === "red"){ 
                // No hagas nada si el color es orange o purple 
            } else {
                var color_bloque_actualP2 = document.getElementById(id_bloqueP2);
                color_bloque_actualP2.style.background = "purple";
                    if (yP2 > 1) {

                        yP2 = yP2 - 1;
                    } else {
                        // Restablecer x a y2
                        yP2 = y2;
                    }
                // Actualizar el id del bloque del segundo jugador
                id_bloqueP2 = xP2 + "," + yP2;
                // Obtener el elemento del DOM utilizando el id dinámico para el segundo jugador
                var nuevo_bloqueP2 = document.getElementById(id_bloqueP2);
                // Cambiar color de fondo a azul para el segundo jugador
                nuevo_bloqueP2.style.background = "blue";
            }
        }
        if (event.key === "s") {
            if (yP2 < y2) {
                var id_bloque_downP2 = xP2 + "," + (yP2 + 1);
            } else {
                var id_bloque_downP2 = xP2 + "," + "1";
            }
        
            var color_bloqueP2 = document.getElementById(id_bloque_downP2);
            var color_downP2 = color_bloqueP2.style.background;
            if (color_downP2 === "orange" || color_downP2 === "purple" || color_downP2 === "red"){ 
                // No hagas nada si el color es orange o purple 
            } else {
                var color_bloque_actualP2 = document.getElementById(id_bloqueP2);
                color_bloque_actualP2.style.background = "purple";
                if (yP2 < y2) {
                    // Incrementar yP2 en 1
                    yP2 = yP2 + 1;
                } else {
                    // Restablecer yP2 a 1
                    yP2 = 1;
                }
                // Actualizar el id del bloque del segundo jugador
                id_bloqueP2 = xP2 + "," + yP2;
                // Obtener el elemento del DOM utilizando el id dinámico para el segundo jugador
                var nuevo_bloqueP2 = document.getElementById(id_bloqueP2);
                // Cambiar color de fondo a púrpura para el segundo jugador
                nuevo_bloqueP2.style.background = "blue";
            }
        }
        if (event.key === "a") {
            if (xP2 > 1) {
                var id_bloque_leftP2 = (xP2 - 1) + "," + yP2;
            } else {
                var id_bloque_leftP2 = x2 + "," + yP2;
            }
        
            var color_bloqueP2 = document.getElementById(id_bloque_leftP2);
            var color_leftP2 = color_bloqueP2.style.background;
            if (color_leftP2 === "orange" || color_leftP2 === "purple" || color_leftP2 === "red"){ 
                // No hagas nada si el color es orange o purple 
            } else {
                var color_bloque_actualP2 = document.getElementById(id_bloqueP2);
                color_bloque_actualP2.style.background = "purple";
                if (xP2 > 1) {
                    // Decrementar xP2 en 1
                    xP2 = xP2 - 1;
                } else {
                    // Restablecer xP2 a x2
                    xP2 = x2;
                }
                // Actualizar el id del bloque del segundo jugador
                id_bloqueP2 = xP2 + "," + yP2;
                // Obtener el elemento del DOM utilizando el id dinámico para el segundo jugador
                var nuevo_bloqueP2 = document.getElementById(id_bloqueP2);
                // Cambiar color de fondo a púrpura para el segundo jugador
                nuevo_bloqueP2.style.background = "blue";
            }
        }

};



// Agregar un evento de escucha para la tecla presionada
document.addEventListener("keydown", manejarTeclaPresionada);
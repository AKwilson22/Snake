
//Generador de grilla

var grilla = document.querySelectorAll(".grid");

var grid_gens = []; // Arreglo para almacenar el contenido generado

grilla.forEach(function(grilla) {
    var x = 1;
    var x2 = 40;
    var y = 1;
    var y2 = 40;
    var grid_gen = '';

    while (y <= y2) {
        while (x <= x2) {
            grid_gen += "<span id='" + x + "," + y + "' class='grid-block'></span>";
            x = x + 1;
        }
        var grid_gen_name = 'grid_gen' + y; // Nombre de la variable
        window[grid_gen_name] = '<div class="filas d-flex">' + grid_gen + "</div>";
        grid_gens.push(window[grid_gen_name]);
        y = y + 1;
        x = 1;
        grid_gen = '';
    }
});

// Agregar el contenido generado al contenedor
var container = document.getElementById("container-grid");
grid_gens.forEach(function(grid) {
    container.innerHTML += grid; // Agregar contenido HTML al contenedor
});




function conversion(){

    var dato1 = prompt('Digite la cantidad de Metros que desea convertir: ', '');

    var operaciones = document.getElementById('operaciones');
    var resultado = document.getElementById('resultado');
    
    var contenido = "<header>\n";
    contenido += "\t<h1>ELIJA A LA MEDIDA QUE QUIERE CONVERTIR</h1>\n";
    contenido += "</header>\n";
    contenido += "<nav class='menu'>\n";
    contenido += "<ul>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Yardas</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascrpt:void(0)\"><span>Pies</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Pulgadas</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Ingresar otra medida</span></a>\n";
    contenido += "</li>\n";
    contenido+= "</ul>\n";
    contenido +="</nav>\n";

    //Colocar el contenido dentro del elemento div
    operaciones.innerHTML = contenido;
    //Preparando el manejo del evento clcik sobre los enlaces del menu
    var opciones = document.getElementsByTagName('a');

    for(var i=0; i<opciones.length;i++){

        switch(i){

            case 0:
             //Funcion Yardas
             opciones[i].onclick = function(){

                resultado.innerHTML = "<br><p class\"letterpress\">" + "La cantidad de Yardas de "+ dato1 +" Metros son"  + " : " + (dato1 * 1.09361) + " Yardas</p>\n";
             }
            
            break;

            case 1:
                opciones[i].onclick = function(){

                    resultado.innerHTML = "<br><p class\"letterpress\">" + "La cantidad de Pies de "+ dato1 +" Metros son"  + " : " + (dato1 * 3.28084) + " Pulgadas</p>\n";
                }
            
            
            break;

            case 2:
                opciones[i].onclick = function(){

                    resultado.innerHTML = "<br><p class\"letterpress\">" + "La cantidad de Pulgadas de "+ dato1 +" Metros son"  + " : " + (dato1 * 39.3701) + " Pies</p>\n";
                }
                
            break;

            case 3:

                opciones[i].onclick = function(){

                    location.reload();

                }

               

            break;

        }

        
    }


}
window.onload = conversion;
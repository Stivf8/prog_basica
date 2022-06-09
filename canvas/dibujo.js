var texto = document.getElementById("texto_lineas");
var botonD = document.getElementById("botonDarle");
botonD.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

//Linea de la izquierda
lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(0,0);
lienzo.lineTo(0.,300);
lienzo.stroke();
lienzo.closePath();
//Linea de abajo
lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(0,300);
lienzo.lineTo(300,300);
lienzo.stroke();
lienzo.closePath();
//linea derecha
lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(300,300);
lienzo.lineTo(300,0);
lienzo.stroke();
lienzo.closePath();
//linea de arriba 300 en x 0 en y, hasta 0 en x y 0 en y
lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(300,0);
lienzo.lineTo(0,0);
lienzo.stroke();
lienzo.closePath();



function dibujarLinea(colorLinea,xinicial,yinicial,xfinal,yfinal)
{
  var d = document.getElementById("dibujito");
  var lienzo = d.getContext("2d");
  //parametros de linea
  lienzo.beginPath();
  lienzo.strokeStyle = colorLinea;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
}

function dibujoPorClick()
{
  var x = parseInt(texto.value);
  var lineas = x;
  var l = 0;
  var yi, xf;
  var colorcito = "#AAF";
  var espacio = ancho / lineas;
  for(l=0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito,0,yi,xf,300);
    dibujarLinea(colorcito,300,yi,xf,0);

    console.log("Linea " + l);


  }

  console.log(x);
}

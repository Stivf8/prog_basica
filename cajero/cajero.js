class Billete
{
  constructor(v,c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero()
{

  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

  for (var bi of caja)
  {

    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);

      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }

      else
      {
        papeles = div;
      }

      entregado.push(new Billete(bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);

    }
  }

  if(dinero > 0)
  {

    resultado.innerHTML = "Dinero insuficiente";
  }
  else
  {
    for (var e of entregado)
    {
      if(e.cantidad > 0)
      {
        resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $ " + e.valor + "<br/>";
      }

    }
  }



}

var resultado = document.getElementById('resultadoParrafo');

var entregado = [];

var caja =[];
caja.push( new Billete(100, 10) );
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 30) );
caja.push( new Billete(10, 10) );
caja.push( new Billete(1, 1000) );

var dinero = 0;
var div = 0;
var papeles = 0;

var b = document.getElementById('extraer');
b.addEventListener("click", entregarDinero);

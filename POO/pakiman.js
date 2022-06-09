var imagenes = [];
//existen dos maneras de definir un arreglo
var imagenes =
{
  PikachuUltraMamado: "IMAGEN DE PICKACHUUUUU"
}
class Pakiman
{
  //El constructor es lo que me define el objeto, en este caso son pakimanes xd
  constructor(n, v, a)
  {
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    //esto funcionaria si tuvieramos las rutas de imagenes definidas arriba en el array
    //this.imagen = new image();
    //this.imagen.src = imagenes[this.nombre];
    this.imagen = imagenes[this.nombre];
  }
//los metodos o funciones que tienen los pakimanes xd

  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.write(this.imagen);
  }

}

// aqui definimos o "creamos o damos a luz" a nuestros pakimanes

var pikachu = new Pakiman("PikachuUltraMamado", 100, 20);
console.log(pikachu);

pikachu.hablar();

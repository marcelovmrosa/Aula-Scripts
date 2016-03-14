function Animal(){

Animal.prototype = {
  fazerBarulho: function(){
    return this.som;
  }
}

}

function Cachorro(){
  this.som = 'Au'
  Animal.call(this);

}

function Gato(){
  this.som = 'Miau'
  Animal.call(this);
}

function ManadaVirgula(){
  manadavirgula = {}
  manadavirgula.animal = [];
  manadavirgula.som = [];
  manadavirgula.adicionar = function(x){
    manadavirgula.animal.push(x);
  }
   manadavirgula.barulhos = function(){
    for (var i = 0; i < manadavirgula.animal.length; i++) {
      manadavirgula.som.push(manadavirgula.animal[i].som);
    }

    return manadavirgula.som.join(', ');
  }
  return manadavirgula;
}

function ManadaSustenido(){
  manadasustenido = {}
  manadasustenido.animal = [];
  manadasustenido.som = [];
  manadasustenido.adicionar = function(x){
    manadasustenido.animal.push(x);
  }
   manadasustenido.barulhos = function(){
    for (var i = 0; i < manadasustenido.animal.length; i++) {
      for (var j = 0; j < 2; j++) {
        manadasustenido.som.push(manadasustenido.animal[i].som);
      }

    }
    return manadasustenido.som.join('# ');
  }
  return manadasustenido;
}

var manadaVirgula = new ManadaVirgula();
var manadaSustenidaDupla = new ManadaSustenido();
var animais = [new Cachorro(), new Gato()];

animais.forEach(function (animal) {
  manadaVirgula.adicionar(animal);
  manadaSustenidaDupla.adicionar(animal);
});

// Print Esperado: Au, Miau
console.log(manadaVirgula.barulhos());

// Print Esperado: Au# Au# Miau# Miau
console.log(manadaSustenidaDupla.barulhos());

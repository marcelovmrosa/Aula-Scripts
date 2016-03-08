function GeraListener(){

  var obj = {};

  obj.listener = [];
  obj.contador = 0;

  obj.adicionarListener = function(func){ obj.listener.push(func); };

  obj.executar = function() { obj.contador = obj.contador +1; obj.update(); };

  obj.update = function (){
    if (obj.listener[0] != undefined){
      for (var i = 0; i < obj.listener.length; i++) {
        obj.listener[i](obj);
      }
    }
  };

  return obj;
}

var contObj = GeraListener();

var listen = function(evento){
  console.log("Listener 1: contador =  ",evento.contador);
  };

var listen2 = function(evento){
  console.log("Listener 2: contador =  ",evento.contador);
  };

var listen3 = function(evento){
  console.log("Listener 3: contador =  ",evento.contador);
  };



contObj.adicionarListener(listen);
contObj.executar();
console.log("");
contObj.adicionarListener(listen2);
contObj.executar();
console.log("");
contObj.adicionarListener(listen3);
contObj.executar();

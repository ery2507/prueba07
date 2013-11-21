// JavaScript Document
$(document).ready(function(e) {
	 document.addEventListener("deviceready",function(){		 

//se crea la base de datos Test es el nombre de la bd, 1.0 la version y 65535 el		 tamaño em bytes
var db = openDatabase ("Test", "1.0", "Base de Prueba", 65535);

$("#Crear").bind ("click", function (event)
{

				
  db.transaction (function (ejecutar) 
  {
    var sql = "CREATE TABLE Clientes (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(100) NOT NULL, apellido VARCHAR(100) NOT NULL)";
    ejecutar.executeSql (sql, undefined, function ()
    { 
      alert ("Tabla creada");
    }, error);
  });
});

$("#Eliminar").bind ("click", function (event)
{
  if (!confirm ("Borrar tabla?", "")) return;
  db.transaction (function (transaction) 
  {
    var sql = "DROP TABLE Clientes";
    transaction.executeSql (sql, undefined,function ()
    { 
      alert ("Tabla Borrada");
    } , error);
  });
});




function error (transaction, err) 
{
  alert ("Error de Base de Datos : " + err.message);
  return false;
}    
	 }, false);
});


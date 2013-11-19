// JavaScript Document

$(document).ready(function(e){// e de evento
	//se crea la base de datos Test es el nombre de la bd, 1.0 la version y 65535 el		 tamaño em bytes
	var db=OpenDataBase("Test","1.0","Test", 65535);
	document.addEventListener("deviceready",function(){
		$('#Crear').bind("Click", function(event){
			db.transaction(function(ejecutar){
				var SQL="CREATE TABLE Clientes id INTEGER NOT NULL PRIMARY KEYGEN, nombre VARCHAR(64) NOT NULL, apellido VARCHAR(100)"
				ejecutar.executeSQL(SQL,undefined, function(){
					navigator.notification.alert("Tabla Creada");
				}, error);
					});//Ejecutar
			});//Crear
		}, false);//add
});// ready
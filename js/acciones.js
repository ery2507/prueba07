// JavaScript Document

$(document).ready(function(e){// e de evento
	//se crea la base de datos Test es el nombre de la bd, 1.0 la version y 65535 el		 tamaño em bytes
	var db=OpenDataBase("Test","1.0","Test", 65535);
	document.addEventListener("deviceready",function(){
		$('#Crear').bind("Click", function(event){
			db.transaction(function(ejecutar){
				var SQL="CREATE TABLE Clientes id INTEGER NOT NULL PRIMARY KEYGEN, nombre VARCHAR(64) NOT NULL, apellido VARCHAR(100)";
				ejecutar.executeSql(SQL,undefined, function(){
					navigator.notification.alert("Tabla Creada");
				}, error);
					});//Ejecutar
			});//Crear
		$('Eliminar').bind("Click", function (event){
			if(!Navigator.Notification.Confirm("Borrar Tabla?",""))
			 	return;
				db.transaction(function(ejecutar){
					var SQL="DROP TABLE Clientes";
					navigator.notification.alert("Tabla Borrada");
				},error);
			});//Eliminar
		}, false);//add
		
});// ready
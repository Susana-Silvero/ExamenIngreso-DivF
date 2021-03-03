/*Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer soltera con pami
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/
function mostrar()
{
	let nombre;
	let obraSocial;
	let edad;
	let temperatura;
	let sexo;
	let cantidadConOsde = 0;
	let flagMasJoven = 0;
	let flagOsde = 0;
	let promedioMayores;
	let respuesta;
	let nombreMasJoven;
	let temperaturaMasJoven;
	let edadMasJoven = 100;
	let contadorMayores = 0;
	let contadorPasajeros = 0;
	let precioConDescuento;
	let precioSinDescuento;
	
	do
	{
		nombre = prompt("Ingrese nombre").toLowerCase();
		
		obraSocial = prompt("Ingrese obra social").toLowerCase();
		while (obraSocial != "pami" && obraSocial !="osde" && obraSocial != "otras" )
		{
			obraSocial = prompt("Error. Reingrese obra social").toLowerCase();
		}
			
		edad = parseInt(prompt("Ingrese edad"));
		while (edad < 18 )
		{
			edad = parseInt(prompt("Error. Reingrese edad"));
		}
		
		temperatura = parseFloat(prompt("Ingrese temperatura"));
		while (temperatura < 30 || temperatura > 55)
		{
			temperatura = parseFloat(prompt("Error. Reingrese temperatura"));
		}
		
		sexo = prompt("Ingrese sexo ( femenino , masculino , no binario)").toLowerCase();
		while (sexo != "femenino" && sexo !="masculino" && sexo !="no binario")
		{
			sexo = prompt("Error. Reingrese sexo ( femenino , masculino , no binario)").toLowerCase();
		}
		
		if (obraSocial == "osde" && edad > 60)
		{
			cantidadConOsde++;
			flagOsde = 1;
		}
		if (sexo == "femenino" && obraSocial == "pami" && edad < edadMasJoven)
		{ 
			edadMasJoven = edad;
			nombreMasJoven = nombre;
			temperaturaMasJoven = temperatura;
			flagMasJoven = 1;
		}
		if (edad > 60)
		{
			contadorMayores++;
		}
		contadorPasajeros++;
	
		respuesta = prompt("Desea seguir ingresando? si/no").toLowerCase();
		while (respuesta != "si" && respuesta !="no")
		{
			respuesta = prompt("Error. Reingrese respuesta (si/no)").toLowerCase();
		}
	
	} while(respuesta == "si");
	
	promedioMayores = (contadorMayores * 100) / contadorPasajeros;
	precioSinDescuento = (contadorPasajeros * 600).toFixed(2);
	
	if ( flagOsde == 1)
	{
		alert("A) La cantidad de personas con osde mayores de 60 es de : " + cantidadConOsde);
	}

	if (flagMasJoven == 1)
	{
		alert("B) El nombre de la mujer mas joven con pami es " + nombreMasJoven + " con la edad de " + edadMasJoven);
	}
	
	alert("C) El precio total sin descuento es de $" + precioSinDescuento);
	
	if (promedioMayores > 50)
	{
		precioConDescuento = (precioSinDescuento - (( 25 * precioSinDescuento ) / 100)).toFixed(2);
		alert("D) El precio con descuento es de $" + precioConDescuento);
	}
}

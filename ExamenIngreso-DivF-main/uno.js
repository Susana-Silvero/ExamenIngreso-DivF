/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos*/
function mostrar()
{   
	let nombreproducto;
	let precio;
	let tipo;
	let categoria;
	let fabricante;
	let contadorDeAlcohol = 0;
	let contadorDeIAC = 0;
	let contadorDeQUAT = 0;
	let sumadorBactericida = 0;
	let sumadorDesinfectante = 0;
	let sumadorDetergente = 0;
	let acumuladorDetergente = 0;
	let fabricanteMasCaro;
	let categoriaMasCara;
	let precioMasCaro = 0;
	let cantidadTotal = 0;
	let cantidadDeAlcohol = 0;
	let cantidadDeIAC = 0;
	let cantidadDeQUAT = 0;
	let promedioAlcohol;
	let promedioIAC;
	let promedioQUAT;
	
	
	for (let i = 0; i < 5; i++) 
	{
		nombreproducto = prompt("Ingrese nombre").toLowerCase();

		tipo = prompt("Ingrese tipo de producto").toUpperCase();
		while (tipo != "ALCOHOL" && tipo !="IAC" && tipo != "QUAT")
		{
			tipo = prompt("Error. Reingrese tipo de producto").toUpperCase();
		}

		precio = parseFloat(prompt("Ingrese precio")).toFixed(2);
		while (precio < 100 || precio > 300)
		{
			precio = parseFloat(prompt("Error, reingrese precio")).toFixed(2);
		}
		
		cantidad = parseInt(prompt("Ingrese cantidad"));
		while (cantidad <= 0 || cantidad > 1000)
		{
			cantidad = parseInt(prompt("Error, reingrese cantidad"));
		}
		
		categoria = prompt("Ingrese categoria de producto").toLowerCase();
		while (categoria != "desinfectante" && categoria !="bactericida" && categoria != "detergente")
		{
			categoria = prompt("Error. Reingrese categoria de producto").toLowerCase();
		}

		fabricante = prompt("Ingrese fabricante");
		
		switch(tipo)
		{
			case "ALCOHOL":
				contadorDeAlcohol++;
				cantidadDeAlcohol=cantidadDeAlcohol+cantidad;
				break;
			case "IAC":
				contadorDeIAC++;
				cantidadDeIAC=cantidadDeIAC+cantidad;
				break;
			case "QUAT":
				contadorDeQUAT++;
				cantidadDeQUAT=cantidadDeQUAT+cantidad;
				break;
		}
		switch(categoria)
		{
			case "desinfectante":
				sumadorDesinfectante=sumadorDesinfectante+cantidad;
				break;
			case "bactericida":
				sumadorBactericida=sumadorBactericida+cantidad;
				break;
			case "detergente":
				sumadorDetergente=sumadorDetergente+cantidad;
				if (precio <= 200)
				{
					acumuladorDetergente= acumuladorDetergente + cantidad;
				}
				break;
		}
		
		cantidadTotal= cantidadTotal + cantidad;
		
		if ( precio > precioMasCaro)
		{
			fabricanteMasCaro = fabricante;
			categoriaMasCara = categoria;
		}
	
	}
	
	promedioAlcohol = ((cantidadDeAlcohol * 100 ) / cantidadTotal).toFixed(2);
	promedioIAC = ((cantidadDeIAC * 100 ) / cantidadTotal).toFixed(2);
	promedioQUAT = ((cantidadDeQUAT * 100 ) / cantidadTotal).toFixed(2);

	alert("A) El promedio de Alcohol es: " + promedioAlcohol );
	alert("A) El promedio de IAC es: " + promedioIAC );
	alert("A) El promedio de QUAT es: " + promedioQUAT );

	if (sumadorDesinfectante > sumadorBactericida && sumadorDesinfectante > sumadorDetergente)
	{
		alert("B) Hay mas cantidad de desinfectante con " + sumadorDesinfectante);
	}
	else if (sumadorBactericida > sumadorDesinfectante && sumadorBactericida > sumadorDetergente)
	{
		alert("B) Hay mas cantidad de bactericida con " + sumadorBactericida);
	}
	else 
	{
		alert("B) Hay mas cantidad de detergente con " + sumadorDetergente + " unidades");
	}
	
	alert("C) Se compraron " + acumuladorDetergente + " unidades de detergente a menos de $200");
	alert("D) El producto mas caro es del fabricante " + fabricanteMasCaro + " de la categoria " + categoriaMasCara);
}


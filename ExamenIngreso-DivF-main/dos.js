/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no de los que tarbajan o estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo*/

function mostrar()
{
  let maximoPromedio = 0;
	let situacionLaboral;
	let nombre;
	let cantidad;
	let sexo;
	let notaPromedio;
	let edad;
	let flagMejorPromedio = 0;
	let nombreMejorPromedio;
	let masViejo = 0;
	let nombreMasViejo;
	let flagMasViejo = 0;
	let flagMenosMaterias = 0;
	let contadorBuscando = 0;
	let contadorSoloEstudiante = 0;
	let contadorTrabajando = 0;
	let contadorTotal = 0;
	let acumuladorBuscando = 0;
	let acumuladorSoloEstudiante = 0;
	let acumuladorTrabajando = 0;
	let promedioBuscando;
	let promedioSoloEstudiante;
	let promedioTrabajando;
	let pocasMaterias = 8;
	let alumnoMenosMaterias;

	do
	{
		nombrealumno = prompt("Ingrese nombre").toLowerCase();
		
		situacionLaboral = prompt("Ingrese situacion laboral").toLowerCase();
		while (situacionLaboral != "buscando" && situacionLaboral !="trabajando" && situacionLaboral !="solo estudiante")
		{
			situacionLaboral = prompt("Error. Reingrese situacion laboral").toLowerCase();
		}
		
		cantidad = parseInt(prompt("Ingrese cantidad de materias"));
		while (cantidad <= 0 || cantidad >= 8)
		{
			cantidad = parseInt(prompt("Error. Reingrese cantidad de unidades"));
		}
			
		sexo = prompt("Ingrese sexo ( femenino , masculino , no binario)").toLowerCase();
		while (sexo != "femenino" && sexo !="masculino" && sexo !="no binario")
		{
			sexo = prompt("Error. Reingrese sexo ( femenino , masculino , no binario)").toLowerCase();
		}
		
		notaPromedio = parseFloat(prompt("Ingrese promedio de notas"));
		while (notaPromedio < 0 || notaPromedio > 10)
		{
			notaPromedio = parseFloat(prompt("Error. Reingrese promedio de notas"));
		}
		
		edad = parseInt(prompt("Ingrese edad"));
		while (edad < 0 || edad > 100) // edad maxima????
		{
			edad = parseInt(prompt("Error. Reingrese edad"));
		}
		
		if (notaPromedio > maximoPromedio && situacionLaboral != "solo estudiante" )
		{
			alert("entra al promedio");
			maximoPromedio = notaPromedio;
			nombreMejorPromedio = nombre;
			banderaMejorPromedio = 1;
			alert("termina promedio");
		}
			
		if (situacionLaboral == "solo estudiante" && edad > masViejo)
		{
			alert("entra al mas viejo");
			masViejo = edad;
			nombreMasViejo = nombre;
			banderaMasViejo = 1;
		}
		
		switch(situacionLaboral)
		{
			case "buscando":
				acumuladorBuscando = acumuladorBuscando + notaPromedio;
				contadorBuscando++;
				break;
			case "trabajando":
				acumuladorTrabajando = acumuladorTrabajando + notaPromedio;
				contadorTrabajando++;
				break;
			case "solo estudiante":
				acumuladorSoloEstudiante = acumuladorSoloEstudiante + notaPromedio;
				contadorSoloEstudiante++;
				break;
		}
		if (situacionLaboral == "buscando" && cantidad < pocasMaterias)/////////////////
		{
			alert("entro a pocas materias");
			pocasMaterias = cantidad;
			alumnoMenosMaterias = nombre;
			banderaMenosMaterias = 1;
			alert("termino pocas materias");
		}
		
		contadorTotal++;

	respuesta = prompt("Desea seguir ingresando? si/no").toLowerCase();
	while (respuesta != "si" && respuesta !="no")
	{
		respuesta = prompt("Error. Reingrese respuesta (si/no)").toLowerCase();
	}
	
	} while(respuesta == "si");

	promedioBuscando = acumuladorBuscando / contadorTotal
	promedioTrabajando = acumuladorTrabajando / contadorTotal
	promedioSoloEstudiante = acumuladorSoloEstudiante / contadorTotal
	
	if (flagMejorPromedio == 1)
	{
		alert("A) El mejor promedio de los que trabajan o estan estudiando es de " + nombreMejorPromedio );
	}
	
	if (flagMasViejo == 1)
	{
		alert("B) El alumno mas viejo que solo estudia es de " + nombreMasViejo );
	}
	
	alert("C) Promedio de nota de buscando es " + promedioBuscando );
	alert("C) Promedio de nota de trabajando es " + promedioTrabajando );
	alert("C) Promedio de nota de solo estudiantes es " + promedioSoloEstudiante );
	
	if (flagMenosMaterias == 1)
	{
		alert("D) El alumno con mas materias es " + alumnoMasMaterias + " con " + muchasMaterias + " anotadas ");
	}
}


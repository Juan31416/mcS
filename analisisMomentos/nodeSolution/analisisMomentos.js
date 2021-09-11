// ARREGLOS DE DATOS
let xData = [1,1,2,1,3,4,2,1,3,2];
let yData = [4,2,2,2,1,2,1,2,4,3,3,3,1,3,3,4,3,3,1,4,5,5,2,1,5,1,4,2,5,3,
            2,5,3,1,5,3,2,3,2,4,3,3,2,3,1,3,1,3,5,2,1,1,5,5,5,2,5,2,1,4,
            5,3,3,1,1,3,2,1,4,1,4,3,3,3,5,4,1,5,4,1,2,2,4,1,3,1,2,3,1,3,
            4,2,3,5,4,1,3,1,3,4];

// OBTENER LA DIMESIÓN DE LOS ARREGLOS
let xLength = xData.length;
let yLength = yData.length;  

// CONTAR LA CANTIDAD DE REPETICIONES
let xDataDic = {};
let yDataDic = {};
for (let x in xData){
    xDataDic[xData[x]] = (xData[x] in xDataDic) ? xDataDic[xData[x]]+1 : 1;
}
for (let y in yData){
    yDataDic[yData[y]] = (yData[y] in yDataDic) ? yDataDic[yData[y]]+1 : 1;
}

// OBTENER LA PROBABILIDAD DE CADA UNA DE LAS VARIABLES DEL ESPACIO MUESTRAL.
let xDataProb = {};
let yDataProb = {};
for(let x in xDataDic){ xDataProb[x] = xDataDic[x] / xLength; }
for(let y in yDataDic){ yDataProb[y] = yDataDic[y] / yLength; }

//LINEA DIVISORIA 
console.log("\n----------------------------------------------\n");

//EJEMPLO X: IMPRIMIR PROBABILIDAD POR OBSERVACIÓN 
console.log("Eje. x: Probabilidad por observación. ");
console.table(xDataProb);

//EJEMPLO X: OBTENER EL MOMENTO ESTADISTICO 1 
let xMomentoEstadistico1;
for(let x in xDataProb){ xMomentoEstadistico1 = x * xDataProb[x]; }
console.log("Eje. x: Momento Estadistico 1 / Media = ", xMomentoEstadistico1);

//EJEMPLO X: OBTENER EL MOMENTO ESTADISTICO 2 
let xMomentoEstadistico2;
for(let x in xDataProb){ xMomentoEstadistico2 = Math.pow(x,2) * xDataProb[x]; }
console.log("Eje. x: Momento Estadistico 2 = ", xMomentoEstadistico2);

//EJEMPLO X: OBTENER EL VARIAZA EJEMPLO X
let xVarianza = xMomentoEstadistico2 - Math.pow(xMomentoEstadistico1,2);
console.log("Eje. x: Varianza = ", xVarianza);

//EJEMPLO X: OBTENER EL MOMENTO ESTADISTICO 3 
let xMomentoEstadistico3;
for(let x in xDataProb){ xMomentoEstadistico3 = Math.pow(x,3) * xDataProb[x]; }
console.log("Eje. x: Momento Estadistico 3 = ", xMomentoEstadistico3);

//EJEMPLO X: OBTENER EL MOMENTO ESTADISTICO 4 
let xMomentoEstadistico4;
for(let x in xDataProb){ xMomentoEstadistico4 = Math.pow(x,4) * xDataProb[x]; }
console.log("Eje. x: Momento Estadistico 3 = ", xMomentoEstadistico4);

//LINEA DIVISORIA 
console.log("\n----------------------------------------------\n");


//EJEMPLO Y: IMPRIMIR PROBABILIDAD POR OBSERVACIÓN EJEMPLO Y
console.log("Eje. y: Probabilidad por observación. ");
console.table(yDataProb);

//EJEMPLO Y: OBTENER EL MOMENTO ESTADISTICO 1 
let yMomentoEstadistico1;
for(let y in yDataProb){ yMomentoEstadistico1 = y * yDataProb[y]; }
console.log("Eje. y: Momento Estadistico 1 / Media = ", yMomentoEstadistico1);

//EJEMPLO Y: OBTENER EL MOMENTO ESTADISTICO 2 
let yMomentoEstadistico2;
for(let y in yDataProb){ yMomentoEstadistico2 = Math.pow(y,2) * yDataProb[y]; }
console.log("Eje. y: Momento Estadistico 2 = ", yMomentoEstadistico2);

//EJEMPLO Y: OBTENER EL VARIAZA EJEMPLO X
let yVarianza = yMomentoEstadistico2 - Math.pow(yMomentoEstadistico1,2);
console.log("Eje. y: Varianza = ", yVarianza);

//EJEMPLO Y: OBTENER EL MOMENTO ESTADISTICO 3 
let yMomentoEstadistico3;
for(let y in xDataProb){ yMomentoEstadistico3 = Math.pow(y,3) * yDataProb[y]; }
console.log("Eje. y: Momento Estadistico 3 = ", yMomentoEstadistico3);

//EJEMPLO Y: OBTENER EL MOMENTO ESTADISTICO 4 
let yMomentoEstadistico4;
for(let y in yDataProb){ yMomentoEstadistico4 = Math.pow(y,4) * yDataProb[y]; }
console.log("Eje. y: Momento Estadistico 3 = ", yMomentoEstadistico4);

//LINEA DIVISORIA 
console.log("\n----------------------------------------------\n");

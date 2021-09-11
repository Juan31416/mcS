// IMPORTAR LIBRERIAS
const dataframe = require("danfojs-node");
const bmt = require("./randomGeneratedNum.js");

// VARIABLE CON 500 DATOS CON DISTRIBUCIÓN NORMAL
const vectorQuinientos_01 = []
// MEDIA = 0 VARIANZA = 1
const media   = 0;
const varianza = 1;

for (let i = 0; i < 500; i += 1) {
    vectorQuinientos_01.push(bmt.getNormallyDistributedRandomNumber(media, Math.sqrt(varianza)));
}
df = new dataframe.Series(vectorQuinientos_01);
df.plot("plot_div").line()
//s.plot("plot_div").line()
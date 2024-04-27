var Reader = require("./Reader");

var leitor = new Reader();

//retornar valores do file no arquivo principal
async function main(){
    var returnData = await leitor.Read("./curso.csv");
     console.log(returnData)

 }

 main();
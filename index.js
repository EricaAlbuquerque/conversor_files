//ler arquivos
const fs= require("fs");
 //caminho do arquivo e callback
fs.readFile("./arquivo.txt",{encoding:'utf-8'},(erro,dados)=>{
    //tratar erro do aquivo
    if(erro){
      console.log("ERRO falha de leitura")
    }else{
        console.log(dados)
    }
  }

//escrever em aquivos
fs.writeFile("./arquivo.txt",(err)=>{
  //tratar erro do aquivo
  if(err){
    console.log("ERRO falha ao salvar")
  }

});
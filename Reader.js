const { resolveObjectURL } = require("buffer");
const fs = require("fs")
const util= require("util")
//retornar os valores


class Reader{

   //retornar os valores com promise 
   constructor(){
    this.reader = util.promisify(fs.readFile);
   }

  
   async Read(filePath){
        //caminho do arquivo
        try {
            return  await this.reader(filePath,"utf-8")   
            
        } catch (error) {
            return undefined;
            
        }
           
     }
     
   }
module.exports=Reader;





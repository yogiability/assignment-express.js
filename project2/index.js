import express from 'express';
import fs from 'fs';
 



const app = express();
const port =  '3000';
 
app.get('/student/getDetails',(req,res) =>{
    fs.readFile('./APIS/userapi.json',"utf-8",(err,data) =>{
        
        if(err){
             console.log(err);
        }

        res.end(data);
  });
});


 


app.listen(port, () =>{
    console.log("Server Running")
})
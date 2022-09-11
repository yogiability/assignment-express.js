import express from 'express';
import fs from 'fs';
 



const app = express();
const port = '3000';
 
app.get('/student/getdetails',(req,res) =>{
    fs.readFile('./APIS/userapi.json',"utf-8",(err,data) =>{
        
        if(err){
             
            console.log(err);
        }

        res.end(data);
  });
});



app.get('/student/add',(req,res) =>{
  
    const newObject = {
        studentFirstName:req.query.studentFirstName,
        collegeName:req.query.collegeName,
        location:req.query.location
    } 
    
        const JSON_Data = JSON.stringify(newObject,null,2);
 
    
        fs.appendFileSync('./APIS/userapi.json',"\n" + JSON_Data,(err) =>{
        
        if(err){
            return err;
        } 

  });

        const resultdata = {
            "result":"Success"
        } 
        const JSON_response = JSON.stringify(resultdata); 
        res.end(JSON_response);

});
app.listen(port, () =>{
    console.log("Port Working")
})
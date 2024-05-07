const mysql=require("mysql2");
const fs=require('fs');
var list = [];
var faker = require('faker');

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"mppdb",
});  


const getToken = (req, res) => {
    const query="SELECT token FROM User WHERE username=? AND password=?";
    const user = req.body;
    db.query(query,[user.username,user.password],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            if(result.length>0){
                res.json(result);
            }
            else{
                res.json("Invalid credentials");
            }
            }});
}

const addUser = (req, res) => {
    
    const newUser = req.body;
    const token= faker.datatype.uuid();
    const timestamp= new Date();
    timestamp.setHours(timestamp.getHours() + 1);
    const query="Insert into User values(?,?,?,?)";
    db.query(query,[newUser.username,newUser.password,token,timestamp],(err,result)=>{
        if(err){
            res.json("Username already exists");
            console.log(err);
        }
        else{
            res.json("Registration successful");
        }
        });
}

const getUserAndPass= (req,res) =>{

    const query="SELECT username,password FROM User where token=?";
    const token=req.body;
    db.query(query,[token],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(result);
        }
    });
}

module.exports={getToken,addUser,getUserAndPass};
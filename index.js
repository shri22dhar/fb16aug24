const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const port = process.env.PORT||9000;

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"abc123",	
	database:"fb16aug24"
	});
app.post("/save",(req,res)=>{
	let data =[req.body.name,req.body.feedback];
	let sql ="insert into student values(?,?)";
	con.query(sql,data,(err,result)=>{
		if(err)		res.send(err);
		else			res.send(result);
	});
});
app.listen(port,()=>{console.log("ready@"+port);});
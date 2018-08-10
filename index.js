const express = require('express');
const app = express();
const Scratch = require('scratch-api');
const port = process.env.PORT || 3000;

var id = 192728047;

app.get('/', function(req, res) {
	/*
	Scratch.getProject(id,function(err,project) {
  		if(err) throw err;
  		res.send(JSON.stringify(project));
  	});
  	*/
  	res.send("hey");
});

app.listen(port, function() {console.log(`Example app listening on port http://localhost:${port}/`)});
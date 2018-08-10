const express = require('express');
const app = express();
//const Scratch = require('./scratchapi.js');
const port = 3000;

var id = 192728047;

app.get('/', function(req, res) {
	/*
	Scratch.getProject(id,function(err,project) {
  		if(err) throw err;
  		res.send(JSON.stringify(project));
  	});
  	*/
  	res.send("hi");
 });

app.listen(port, function() {console.log(`Example app listening on port http://localhost:${port}/`)});

/*
Scratch.getProject(id,function(err,project) {
      if(err) throw err;
      console.log(JSON.stringify(project));
});
*/
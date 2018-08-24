const express = require('express');
var cors = require('cors');
const app = express();
const Scratch = require('./scratchapi.js');
const port = process.env.PORT || 3000;
var id = 192728047;

app.use(cors());

app.get('/:id', function(req, res, next) {
    var id = req.params.id;
	    Scratch.getProject(id,function(err,project) {
	      if(err) {
	      	//console.log(err);
	      	res.status(404).send("404 - cannot find.")
	      	//res.send("Fetch error.");
	      }
	      else {
	      	res.send(JSON.stringify(project));
	      }
    	});
 });


app.listen(port, function() {console.log(`Example app listening on port http://localhost:${port}/`)});

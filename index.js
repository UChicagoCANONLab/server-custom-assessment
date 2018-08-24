const express = require('express');
var cors = require('cors');
const app = express();
const Scratch = require('./scratchapi.js');
const port = process.env.PORT || 3000;
var id = 192728047;

/* Prevents same-origin policy errors. */
app.use(cors());

/* Recives url/[project id]. */
app.get('/:id', function(req, res, next) {
    var id = req.params.id;
	    Scratch.getProject(id,function(err,project) {
	      if(err) {
	      	res.status(404).send("404 - cannot find.")
	      }
	      else {
	   		/* Return project JSON if everything goes well. */
	      	res.send(JSON.stringify(project));
	      }
    	});
 });

/* For local testing. */
app.listen(port, function() {console.log(`Example app listening on port http://localhost:${port}/`)});

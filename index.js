const express = require('express');
var cors = require('cors');
const app = express();
const Scratch = require('./scratchapi.js');
const port = process.env.PORT || 3000;
var id = 192728047;

app.use(cors());

app.get('/:id', function(req, res) {
    var id = req.params.id;
    Scratch.getProject(id,function(err,project) {
      if(err) console.log(err);
      res.send(JSON.stringify(project));
    });
 });


app.listen(port, function() {console.log(`Example app listening on port http://localhost:${port}/`)});
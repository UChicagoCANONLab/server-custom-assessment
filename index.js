
const express = require('express');
var cors = require('cors');
const multer = require('multer');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'repdfgeneratorcode/');
  },
  filename: function (req, file, cb) {
    cb(null, 'students.csv');
  }
})
 
var upload = multer({ storage: storage });

//var upload = multer({ dest: 'uploads/' })

const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const { execFile } = require('child_process');

fileName = '/Users/Work/Documents/Javascript/CANON Projects/server-pdf-gen/finaltopics.pdf';

let {PythonShell} = require('python-shell')
var options = {
  pythonPath: '/usr/bin/python', 
};

app.use(cors());

app.get('/', function(req, res, next) {
	res.sendFile(__dirname + '/index.html');
  
  //res.send('rip');
});

app.post('/', upload.single('file-to-upload'), function(req, res, next) {
	//res.redirect('/');
	//res.sendFile(path.join(__dirname, '../server-pdf-gen/repdfgeneratorcode', 'students.csv'));

  const child = execFile('./run_generator.sh', ['students.csv'], (error, stdout, stderr) => {
	  if (error) {
	    throw error;
	  }
	  console.log(stdout);
	  res.sendFile(path.join(__dirname, '../server-pdf-gen/repdfgeneratorcode', 'all_tests.pdf'));
  });
  
  
});



app.listen(port, function() {console.log(`Example app listening on port http://localhost:${port}/`)});
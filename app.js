const express = require('express');
const Requests = require('./Requests');
const app = express()
let {PythonShell} = require('python-shell')
const port = process.env.PORT || 5000

app.get("/", async(req,res)=>{
    PythonShell.run('api.py', null, function (err,results) {
        if (err) throw err;
       res.send(results[0]) 
      });

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
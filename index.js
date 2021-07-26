const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const employeesRoute = require('./employee.js');



// server port created 
const PORT = process.env.PORT || 3000;


//defining the type of data we are going to use in our api
app.use(bodyParser.json());

// calling the route
app.use('/employees', employeesRoute);


// homepage route
app.get('/',(req, res)=>res.send('Hello from homepage!!'));



// basic server on localhost using nodejs, expressjs 
app.listen(PORT, ()=> console.log(`server runnging on port: http://localhost:${PORT}`));

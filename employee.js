const express = require('express');

// route variable
const router = require('express').Router();

// array of local database
let emp = [];

//getting all the users at /employees
//@GET
router.get('/employees',(req, res)=>{
    res.send(emp);
});


//@POST
//send user data to /employees
router.post('/employees',(req, res)=>{
    const employee = req.body;
    emp.push({employee});
    res.send(`${employee.username} added to the database`);
});


//@GET
//getting user with its id /employee/id
router.get('/employees/:id',(req, res)=>{
    const {id} = req.params;

    const foundEmployee = emp.find((employee)=> employee.id === id);

    res.send(foundEmployee);
})


module.exports = router;
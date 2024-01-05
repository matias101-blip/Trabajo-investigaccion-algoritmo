const express = require('express');
const app = express();

//main//
app.get('/', (req,res)=>{
    res.send('pnwibdwjd')
})

//ruta hola//
app.get('/hola',(req,res)=>{
    res.send('hola')
})

//error//
app.use((req,res)=>{
    res.send('no hay nada')
})

//config//
app.listen(3000)
console.log(`server on port ${3000}`)
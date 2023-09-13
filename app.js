const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')

// Base API Routing with Express JS
// app.post('/', (req, res) => {
//   res.send('Hello World!')
// })

// Routing With Template engine - PUG//

// app.get('/', (req, res) =>{
//     res.render('index', {title : 'My Rest API', message : 'Welcome To My Firs API Based Web Application try', phone : '+2348106427759'})
// })

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname})
  }) 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
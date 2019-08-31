//requires modules
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

const hbs =  exphbs.create({})

app.engine('hbs',exphbs({
  layoutsDir: path.join(__dirname,'../views/layouts'),
  defaultLayout: "dashboard",
  partialsDir: path.join(__dirname,'../views/partials'),
  extname: 'hbs'
}))
app.set('view engine','hbs')
app.set('views','views')

app.get('/categoria', (req, res, next ) => {
  res.render('category')
})
app.get('/producto', (req, res, next ) => {
  res.render('producto',{layout:'auth-layout'})
})



module.exports = app;
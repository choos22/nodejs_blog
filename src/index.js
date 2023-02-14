import configViewEngine from './configs/viewEngine';
import initWeb from './route/web'
import path from 'path';
const express = require('express')
const expressLayout = require('express-ejs-layouts');


// var bodyPaser = require('body-parser')
const app = express();
const morgan = require('morgan')
const port = 8080

// const path = require('path')
require('dotenv').config();

configViewEngine(app)
initWeb(app)

app.use(expressLayout);
app.use(morgan('combined'))


// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
import express from "express";
import expressLayout from "express-ejs-layouts"
import path from "path"
const configViewEngine = (app) => {
    app.use(expressLayout)
    // app.use('/image', express.static(path.join(__dirname, 'public/image')))
    // app.use('/public/', express.static('./public'));
    app.use(express.static('./src/public'))
    app.use(express.static('./src/public/image'))
    app.set("view engine", "ejs");
    app.set("views", "./src/resoures/views/layout")
    app.set("layout", "./home")
    app.set("layout", "./sidebar")
    
    // app.set('home', './layout/home.ejs')
}

export default configViewEngine;
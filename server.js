const express = require('express');
const app = express();


app.set("view engine", "ejs");

app.get("/", function(req, res){
    const items = [
        {
            title: "D",
            message: "esenvolvedor",
        },
        {
            title: "E",
            message: "JS",
        },
        {
            title: "M",
            message: "ais legal",
        },
        {
            title: "A",
            message: "moroso",
        },
        {
            title: "I",
            message: "nstall ejs",
        },
        {
            title:"S",
            message: "intaxe simples"
        },
    ]
    const subtitle = "Uma linguage de modelagem para criação de paginas html para criação de javascript"
    res.render("pages/index", {
        qualidades: items,
        subtitle: subtitle
    });
})

app.get("/sobre", function(req, res){
    res.render("pages/about")
})

app.listen(8080);
console.log("Servidor funcionando")
const express = require('express')

function create(req, res, next) {
    const multiplicacion = parseInt(req.body.n1) * parseInt(req.body.n2);
    res.send(`Multiplicacion: ${multiplicacion}`);
}

function index(req, res, next) {
    const n1 = parseInt(req.params.n1);
    const n2 = parseInt(req.params.n2);
    const suma = n1 + n2;
    res.send(`Suma: ${suma}`);
}

function replace(req, res, next) {
    const division = parseInt(req.body.n1) / parseInt(req.body.n2);
    res.send(`Division: ${division}`);
}

function update(req, res, next) {
    const potencia = parseInt(req.body.n1) ** parseInt(req.body.n2);
    res.send(`Potencia: ${potencia}`);
}

function destroy(req, res, next) {
    const n1 = parseInt(req.params.n1);
    const n2 = parseInt(req.params.n2);
    const resta = n1 - n2;
    res.send(`Resta: ${resta}`);
}

module.exports = {create, index, replace, update, destroy}
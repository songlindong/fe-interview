const path = require('path');
const fs = require('fs');

const boiler = fs.readFileSync(path.resolve(__dirname, 'index.bundle.boilerplate'), 'utf-8');
const target= fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8');

const content = boiler.replace('/* template */', target);

fs.writeFileSync(path.resolve(__dirname, 'dist/index.bundle.js'), content, 'utf-8');
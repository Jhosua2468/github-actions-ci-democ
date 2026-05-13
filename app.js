const express = require('express');
const app = express();
const unusedVariable = 'esto causara un error de linting';
app.use(express.json());

// app.get('/health', (req, res) => {
//   res.status(200).json({ status: 'ok', version: '2.0.0' });
// });

app.get('/users', (req, res) => {
  res.status(200).json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);
});

module.exports = app;


// {
//   "name": "github-actions-ci-democ",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "repository": {
//     "type": "git",
//     "url": "git+https://github.com/Jhosua2468/github-actions-ci-democ.git"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "type": "commonjs",
//   "bugs": {
//     "url": "https://github.com/Jhosua2468/github-actions-ci-democ/issues"
//   },
//   "homepage": "https://github.com/Jhosua2468/github-actions-ci-democ#readme",
//   "dependencies": {
//     "express": "^5.2.1"
//   },
//   "devDependencies": {
//     "jest": "^30.4.2",
//     "supertest": "^7.2.2"
//   }
// }
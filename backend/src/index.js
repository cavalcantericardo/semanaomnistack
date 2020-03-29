const express = require('express');
count cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //antes de todas as requisições e converter a requisição em json em javascript
app.use(routes);

app.listen(3333);

const express = require('express');
const fs = require('fs');
const port = process.env.PORT || 80;
const app = express();
const CssToJs = require('./lib/csstojs');

app.use((req, res, next) => {
  const ip = req.ip;
  const data = [
    ...new Set(fs.readFileSync(__dirname + '/entered_ip.txt', 'utf-8').split('\n')),
  ].join('\n');
  fs.writeFileSync(__dirname + '/entered_ip.txt', data + '\n' + ip);
  next();
});

app.use('/', express.static(__dirname + '/public'));

app.get('/convert', (req, res) => {
  const { css } = req.query;
  const conjs = CssToJs(css);
  res.json({ done: 'OK', code: conjs });
});

app.listen(port, () => console.info(`server running at port ${port}`));

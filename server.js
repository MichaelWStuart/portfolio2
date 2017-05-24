const express = require('express');
const app = express();
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 8080;
require('dotenv').load();

const proxyGitHub = (req, res) => {
  (requestProxy({
    url: `https://api.github.com/${req.params[0]}`,
    headers: {Authorization: `token ${process.env.TOKEN}`}
  }))(req, res);
}

app.get('/github/*', proxyGitHub);

app.use(express.static('./public'));

app.get('/', (req, res) => res.sendFile('index.html', { root: './public' }))

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

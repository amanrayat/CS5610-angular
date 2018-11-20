const express = require('express');
const path = require('path');
const app = express();
// Serve only the static files form the dist directory
app.use(express.static('./dist/CS5610-angular'));

app.get('/*', function (req, res) {
  res.sendFile(path.join('./dist/CS5610-angular/index.html'));
});
app.listen(process.env.PORT || 8080);

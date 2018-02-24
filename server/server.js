const path = require('path');
var express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));

app.get(publicPath, (req, res) => {

});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
// console.log(__dirname + '/../public');
// console.log(publicPath);

const express = require('express');
const app = express();
app.get('/', function(req, res){
res.send('Hello, Home page');
});
app.get('/api/forcast', function(req, res){
res.send('Weather Forecast result');
});
app.get('/api/coordinate', function(req, res){
res.send('Weather Forecast from coordinate');
});
app.get('/api/city', function(req, res){
res.send('WeatherForcast from city');
});
const port = process.env.port || 3000;
app.listen(port, function(){
console.log('Listioning on port', port);
});
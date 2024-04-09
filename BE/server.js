const app = require('./app.js');
const port = 3000;

app.listen(port, ()=>{
    console.log(`Running server at port ${port}...`);
})
const express = require('express');
const app = express();
const port = 3000;

//app.use(express.static('views')) // to include common public files
app.set('views', __dirname + '');
app.set('view engine', 'ejs');
app.get('/',(req,res) => {
    //res.send('Hiiiiiis');
    const today = new Date();
    let day = today.getDay();
console.log(day);
    let dayType = 'a weekday';
    let advice = 'its a week day';
    if(day === 0 || day === 6){
      dayType = 'a weekend';
      advice = 'its a weekend';
    }

    res.render("index.ejs",
    {dayType:dayType,msg:advice})
})
app.listen(port,() => {
    console.log('embedded js learning');
})
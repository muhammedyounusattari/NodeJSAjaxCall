var express = require('express');
var reques = require('request');
var app = express();

var data;
app.get('/getCity',function(request,response){

    var url ='https://www.voonik.com/shopping_cart/check_city_state.json?pincode='+request.query.pincode;
    reques(url,function(error,res,body){

        data = JSON.parse(body);
        response.send('<h1>State..'+data.state+'..City..'+data.city+'....');
    })
});
app.get('/',function(request,response){
    response.sendFile(__dirname+'/pincode.html');
})

app.listen(1111);

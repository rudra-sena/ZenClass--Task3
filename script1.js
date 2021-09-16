//Generate an API key with given link below https://openweathermap.org/guide
//Print the current weather data in console- By lat lang 
var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all' , true);

request.send();

request.onload = function() {
    
    var data=JSON.parse(this.response);
    var dataCopy=data.slice(0,5);
    
    for(i in dataCopy){
        
         var cord=dataCopy[i].latlng;
         var lat=cord[0];
         var lon=cord[1];
        
        weatherAPI(lat,lon);
    }
}
function weatherAPI(x,y){

    
    var req1=new XMLHttpRequest();
    var link='https://api.openweathermap.org/data/2.5/weather?lat='+x+'&lon='+y+'&appid=f20c5c7f86d65afadc78d934d21bf8de'
    req1.open('GET', link, true);
    
    req1.send();
    req1.onload= function() {
        var weather=JSON.parse(this.response);
        
        console.log("Temperature: ", weather.main.temp);
            
        }
    }


    
    


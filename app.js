const searchButton = document.getElementById('searchButton');
const typeCity = document.getElementById('typeCity');
const cityName = document.getElementById('cityName');
const temp = document.getElementById("temp");
const desc = document.getElementById("desc");

searchButton.addEventListener('click',function(){
   fetch("https://api.openweathermap.org/data/2.5/weather?q="+typeCity.value+"&appid=6d963d295e1e24e833485b1d23681934")
   .then(res => res.json())
   .then(data =>{
    const nameValue  =  data['name'];
    const tempValue = data['main']['temp'];
    const descValue = data['weather'][0]['description'];

    cityName.innerHTML = nameValue;
    temp.innerHTML = Math.floor(tempValue - 273);
    desc.innerHTML = descValue;
   })

   .catch(err => alert("Please check your spelling !"))
 


})


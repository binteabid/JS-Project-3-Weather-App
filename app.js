
document.write('<nav class="navbar" >     <div class="container-fluid">         <a class="navbar-brand" href="#" >            <img src="./assets/images/logo.png" alt="Logo" width="200" height="120"                 class="d-inline-block align-text-top"></a>  </div></nav>')

let userName = prompt("Enter your name");
let cityName = prompt("Enter your city name");

let weatherInCelsius = +prompt("Enter the current weather of your city in °C");




if (weatherInCelsius > 45) {
    document.write("<div  style='height:400px; width:400px; margin: auto; box-shadow:10px 10px 5px #9c898b;'>" +
        "<img src='./assets/images/above-45.jpeg' alt='above-45';  style='height:400px; width:400px; '>" + "<h2 style='color:rgb(232, 31, 128); font-family: 'Georgia', 'Times New Roman', 'Times, serif'; '> We are sorry " + userName + " the current weather in " + cityName + " is incomprehensible." + "</h2>" + "</div>");
} else if (weatherInCelsius >= 35 && weatherInCelsius <= 45) {
    document.write("<div  style='height:400px; width:400px; margin: auto; box-shadow:10px 10px 5px #9c898b;'>" +
        "<img src='./assets/images/heatwave.jpeg' alt='heatwave.jpeg';  style='height:400px; width:400px; '>" + "<h2 style='color:rgb(232, 31, 128); font-family: 'Georgia', 'Times New Roman', 'Times, serif'; '> " + userName + " currently there is Heatwave in  " + cityName + " with the teamperature " + weatherInCelsius + "°C." + "</h2>" + "</div>");
} else if (weatherInCelsius >= 30 && weatherInCelsius < 35) {
    document.write("<div  style='height:400px; width:400px; margin: auto; box-shadow:10px 10px 5px #9c898b;'>" +
        "<img src='./assets/images/sunny.jpeg' alt='sunny.jpeg';  style='height:400px; width:400px; '>" + "<h2 style='color:rgb(232, 31, 128); font-family: 'Georgia', 'Times New Roman', 'Times, serif'; '> " + userName + " the current weather in  " + cityName + " is Sunny with the teamperature " + weatherInCelsius + "°C." + "</h2>" + "</div>");
} else if (weatherInCelsius >= 25 && weatherInCelsius < 30) {
    document.write("<div  style='height:400px; width:400px; margin: auto; box-shadow:10px 10px 5px #9c898b;'>" +
        "<img src='./assets/images/fair.jpeg' alt='fair.jpeg' ;  style='height:400px; width:400px; '>" + "<h2 style='color:rgb(232, 31, 128); font-family: 'Georgia', 'Times New Roman', 'Times, serif'; '> " + userName + " the current weather in  " + cityName + " is Fair with the teamperature " + weatherInCelsius + "°C." + "</h2>" + "</div>");
} else if (weatherInCelsius >= 18 && weatherInCelsius < 25) {
    document.write("<div  style='height:400px; width:400px; margin: auto; box-shadow:10px 10px 5px #9c898b;'>" +
        "<img src='./assets/images/windy.jpeg' alt='windy.jpeg';  style='height:400px; width:400px; '>" + "<h2 style='color:rgb(232, 31, 128); font-family: 'Georgia', 'Times New Roman', 'Times, serif'; '> " + userName + " the current weather in  " + cityName + " is Windy with the teamperature " + weatherInCelsius + "°C." + "</h2>" + "</div>");
} else if (weatherInCelsius >= 15 && weatherInCelsius < 20) {
    document.write("<div  style='height:400px; width:400px; margin: auto; box-shadow:10px 10px 5px #9c898b;'>" +
        "<img src='./assets/images/cloudy.jpeg' alt='cloudy.jpeg';  style='height:400px; width:400px; '>" + "<h2 style='color:rgb(232, 31, 128); font-family: 'Georgia', 'Times New Roman', 'Times, serif'; '> " + userName + " the current weather in  " + cityName + " is Cloudy with the teamperature " + weatherInCelsius + "°C." + "</h2>" + "</div>");
} else if (weatherInCelsius >= 10 && weatherInCelsius < 15) {
    document.write("<div  style='height:400px; width:400px; margin: auto; box-shadow:10px 10px 5px #9c898b;'>" +
        "<img src='./assets/images/rainy.jpeg' alt='rainy.jpeg';  style='height:400px; width:400px; '>" + "<h2 style='color:rgb(232, 31, 128); font-family: 'Georgia', 'Times New Roman', 'Times, serif'; '> " + userName + " the current weather in  " + cityName + " is Rainy with the teamperature " + weatherInCelsius + "°C." + "</h2>" + "</div>");
} else if (weatherInCelsius >= 6 && weatherInCelsius < 10) {
    document.write("<div  style='height:400px; width:400px; margin: auto; box-shadow:10px 10px 5px #9c898b;'>" +
        "<img src='./assets/images/foggy.jpeg' alt='foggy.jpeg';  style='height:400px; width:400px; '>" + "<h2 style='color:rgb(232, 31, 128); font-family: 'Georgia', 'Times New Roman', 'Times, serif'; '> " + userName + " the current weather in  " + cityName + " is Foggy with the teamperature " + weatherInCelsius + "°C." + "</h2>" + "</div>");
} else if (weatherInCelsius >= -5 && weatherInCelsius <= 5) {
    document.write("<div  style='height:400px; width:400px; margin: auto; box-shadow:10px 10px 5px #9c898b;'>" +
        "<img src='./assets/images/snowy.jpeg' alt='snowy.jpeg';  style='height:400px; width:400px; '>" + "<h2 style='color:rgb(232, 31, 128); font-family: 'Georgia', 'Times New Roman', 'Times, serif'; '> " + userName + " the current weather in  " + cityName + " is Snowy with the teamperature " + weatherInCelsius + "°C." + "</h2>" + "</div>");
} else {
    document.write("<div  style='height:400px; width:400px; margin: auto; box-shadow:10px 10px 5px #9c898b;'>" +
        "<img src='./assets/images/below5.jpeg' alt='below5.jpeg';  style='height:400px; width:400px; '>" + "<h2 style='color:rgb(232, 31, 128); font-family: 'Georgia', 'Times New Roman', 'Times, serif'; '> We are sorry " + userName + " the current weather in " + cityName + " is incomprehensible." + "</h2>" + "</div>");
}





let fahrenheitTemperatures = [32, 68, 104, 212];

let celsiusTemperatures = fahrenheitTemperatures.map(function(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
});

console.log("Fahrenheit Temperatures:", fahrenheitTemperatures);
console.log("Celsius Temperatures:", celsiusTemperatures);

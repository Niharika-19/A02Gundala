function temperatureConverterOfF(valNum) {
    if(typeof valNum === 'string')
        return 0;
    else{
        valNum = parseFloat(valNum);
        return (valNum-32)/1.8;
    }
  }
function result(){
    let x = parseInt(document.getElementById('inputFahrenheit').value);
    document.getElementById("outputCelcius").innerHTML = temperatureConverterOfF(x);
    
}

function result1(){
    let y = parseInt(document.getElementById('inputCelsius').value);
    document.getElementById("outputFahrenheit").innerHTML= temperatureConverterOfC(y);
}
  function temperatureConverterOfC(valNum) {
    if(typeof valNum === 'string')
        return 0;
    else{
    valNum = parseFloat(valNum);
    return (valNum*1.8)+32;
    }
  }
 
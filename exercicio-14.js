var temperaturaSegunda = 10, temperaturaTerca = 14, temperaturaQuarta = 25, temperaturaQuinta = 30, temperaturaSexta = 3, temperaturaSabado = 9, temperaturaDomingo = 40;

console.log ("A média de temperatura dessa semana é de",mediaTemperaturas(temperaturaDomingo, temperaturaQuarta, temperaturaQuinta,temperaturaSabado, temperaturaSegunda, temperaturaSexta, temperaturaTerca),"°C!");

function mediaTemperaturas(temperaturaDomingo, temperaturaQuarta, temperaturaQuinta,temperaturaSabado, temperaturaSegunda, temperaturaSexta, temperaturaTerca)
{
    mediaTemperaturas = (temperaturaDomingo + temperaturaQuarta + temperaturaQuinta + temperaturaSabado + temperaturaSegunda + temperaturaSexta + temperaturaTerca) / 7
    return mediaTemperaturas.toFixed(2)
}
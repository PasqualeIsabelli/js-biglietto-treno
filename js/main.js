//KM
const km = parseInt(prompt("Inserisci i kilometri che vuoi percorrere"));

//ETA'
const age = parseInt(prompt("Inserisci la tua età"));

//PREZZO
const price = (0.21 * km);
const finalPrice = price.toFixed(2);

//PREZZO MINORENNI
const underAgePrice = price - (price * 0.2);

//PREZZO OVER 65
const overAgePrice = price - (price * 0.4);


if (age < 18) {
  document.getElementById("your-price").innerHTML= underAgePrice;
} else if (age > 65) {
  document.getElementById("your-price").innerHTML= overAgePrice;
} else {
  document.getElementById("your-price").innerHTML= finalPrice;
}

document.getElementById("km").innerHTML = km;

document.getElementById("age").innerHTML = age;
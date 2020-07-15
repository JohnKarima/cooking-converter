function gallonConv() {
  var gallons = parseInt(prompt("Gallons?"))
  return alert("Corresponding volume in litres is " + gallons * 3.785 + " litres");
}

//gallonConv();

function weightConv() {
  var pounds = parseInt(prompt("Pounds?"))
  return alert("Corresponding weight in kilograms is " + pounds / 2.205 + " kgs");
}

//weightConv();

function farhToCels() {
  var farh = parseInt(prompt("What's the temperature in degrees Farenheiit?"))
  return alert("The corresponding temp in celcius is " + ((farh - 32) * 5 / 9));
}

  //farhToCels();
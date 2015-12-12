var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
console.log('Planets Array = ', Planets);

function sortedPlanets(planets) {
  var sortedPlanets = planets.sort();
  return sortedPlanets;
}

function reversedPlanets(planets) {
  var revPlanets = planets.reverse();
  return revPlanets;
}

function longPlanets(planets) {
  var temp = planets.map(function() {
    if (this.lenght > 6) {
      temp.push(this);
    };
  });
    return temp;
  };


result = sortedPlanets(Planets);
console.log('Result of ordered is ', result);
result = reversedPlanets(Planets);
console.log('Result of reverse is ', result);
result = longPlanets(Planets);
console.log('Result of longPlanets is ', result);




vanilla_output.innerHTML="This content generated with vanilla javascript";

$("#jquery_output").append("This content generated with jquery");

function modulus(num1, num2) {
  var remainder = num1 % num2;
  return remainder;
}

var num1 = 25;
var num2 = 15;

function doMath(int1, int2, callback) {
  console.log('doMath',num1, num2);
  var result = callback(num1, num2);
  console.log('Result = ', result);
  return result;
}

var addFun = function(num1, num2) {
  console.log('addFun',num1, num2);
  var result = num1 + num2;
  console.log('addFun Result',result);
  return result;
};

var subFun = function(num1, num2) {
  console.log('subFun',num1, num2);
  var result = num1 - num2;
  console.log('subFun Result',result);
  return result;
};

var addResult = doMath(num1, num2, addFun);
console.log('addResult = ',addResult)
var subResult = doMath(num1, num2, subFun);
console.log('subResult = ',subResult)

function getAnimals(callback, error) {
  $.ajax({
    url: "data/animals.json"
  }).done(function(data) {
    // When you tell jQuery to read a file via the ajax method
    // it reads the contents, and then executes whatever function
    // that you specify here in the done() method, and passes in
    // the contents of the file as the first argument.
    console.log('Amimals = ',data);
  });
};


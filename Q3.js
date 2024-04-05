// Name cases: store a person name in a variable print it in lowercase, uppercase and titlecase
var personname = "sAbA ArIf";
console.log("Name in uppercase: ".concat(personname.toUpperCase()));
console.log("Name in lowercase: ".concat(personname.toLowerCase()));
var step1 = personname.split(' ');
var step2 = step1.map(function (word) { return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); });
var step3 = step2.join(' ');
console.log("Name in titlecase: ".concat(step3));

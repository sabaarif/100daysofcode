// Name cases: store a person name in a variable print it in lowercase, uppercase and titlecase

let personname = "sAbA ArIf"
console.log(`Name in uppercase: ${personname.toUpperCase()}`)
console.log(`Name in lowercase: ${personname.toLowerCase()}`)

let step1 = personname.split(' ');
let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
let step3 = step2.join(' ');
console.log(`Name in titlecase: ${step3}`);
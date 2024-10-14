// JS Length

// console.log("javascript".length)
 const stc = "Yusuf";
console.log(stc.toLocaleUpperCase())//YUSUF
console.log(stc.toLowerCase())//yusuf

console.log("JavaScript".slice(4))// Script

// Sub-string method

console.log("JavaScript".substring(2, 6))// Script
console.log("YusufShaikh".substring(2, 6))// sufS
console.log("StrinfMethod".substring(2, 6))// rinf
console.log("SubSting".substring(2, 6))// bSti

// concer method

console.log("yusuf".concat(" shaikh ").concat("Hanif ").concat("Shaikh"))

// split method

const progLungName  = "JavaScript_Python_Java_Ruby";
const splitYou = progLungName.split("_")

console.log(splitYou[1])

// Replace Method

const replaceName = "Yusuf";
console.log(replaceName.replace(replaceName, "Hanif"))

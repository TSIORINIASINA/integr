// function Dog(name, color, age)
// {
//     this.name= name;
//     this.age= age;
//     this.color= color;
// }
// var rdog= new Dog("Booby","yellow",30);
// console.log(rdog.color);

// // object avec un methode//
// function Dog(name, color, age)
// {
//     this.name= name;
//     this.age= age;
//     this.color= color;
//     this.alika= function()
//     {
//         console.log("Your dog's name " + this.name)
//     }
// }
// var rdog= new Dog("Booby","yellow",30);
// rdog.alika();
// // return//
// function boby(number1, number2){
//     var resultmultiplay=number1 * number2;
//     return resultmultiplay*9;
// }
// var a=3;
// var b= 90;
// var result= boby(a,b);
// console.log(result);

// //tableaux//
// var jours=[
//     ["lundi"],
//     ["Mardi"],
//     ["Mercredi"],
//     ["jeudi"],
//     ["vendredi"]
// ];
// var heures=[
//     [8,11],
//     [2,17],
// ];
// console.log( "Le "+jours[0] +" On sera ouvert de "+heures[0][1]+"h à "+ heures[0][1]+"h");
// console.log(
//     jours
// );


const str = prompt('Enter a word');
const tr = 4;

let palindrom = true;

for (var i=0; i < (Math.floor(tr.length / 2) + 1); i++) {  

  const opposed = tr.length - 1 - i;
  if (tr[i] != tr[opposed]) {      
    palindrom = false
    break
  }
};

if (palindrom) {

  console.log('Palindrom');

} else {

  console.log('Not a palindrom');

}
console.log(str.length);
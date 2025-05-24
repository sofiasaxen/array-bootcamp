//1.Gör en array som innehåller 5 st olika frukter av datatypen string.

let fruits = ["apple", "pear", "banana", "kiwi", "mango"]
console.log(fruits);

let moreFruits1 = "apple";
let moreFruits2 = "pear";
let moreFruits3 = "banana";


//2.gör en array som innehåller 3 olika datatyper, ex. string, number, array.

let animals = ["cat", 22, "hamster", "parrot", "funky chihuahua"]

//3.hur många objekt arrayen ovan innehåller

console.log(animals.length);

//4.I arrayen ovan, hämta cat.

console.log(animals[0])

//5. I arrayen ovan, hämta funky chihuahua.
console.log(animals[4])

//6. I arrayen ovan, byt ut hamster mot tiger.

animals.splice(2, 1, "tiger");
console.log(animals);


//7. Lägg ihop nedanstående arrayer

let a = [1,2,3]
let b = [4,5,6]

console.log(a.concat(b));

//8. Klona nedanstående array

let arr = ["a", "b", "c"]

/* arr = "knarr"
console.log("knarr"); */

let moreFruits = ['kiwi', 'apple', 'pear'];

//9. Lägg till en frukt i slutet av arrayen ovan

moreFruits.push("ananas");
console.log(moreFruits);

//10. Lägg till en frukt i början av arrayen ovan

moreFruits.unshift("papaya");
console.log(moreFruits);

//11. I arrayen ovan, ta bort sista frukten i arrayen

moreFruits.pop();
console.log(moreFruits);

//12. I arrayen ovan, ta bort första frukten i arrayen

moreFruits.shift();
console.log(moreFruits);

//13. sätt in en frukt i arrayen ovan på index 1

moreFruits.splice(1, 0, "apelsin");
console.log(moreFruits);

//14. Sätt in tre frukter i arrayen ovan på index 2

moreFruits.splice(1, 0, "grapes", "clementine");
console.log(moreFruits);

//15. I arrayen nedan, ta bort Christoffer och Johan
let names = ["David", "Christoffer", "Johan", "Maja"]

names.splice(1, 2);
console.log(names);

//16. Spegelvänd arrayen nedan
let nums = [1,2,3,4,5,6,7,8,9];
nums.sort((a, b) => b - a);
console.log(nums);

//17. Kika om strängen nedan innehåller bokstaven n.
let str = 'Supercalifragilisticexpialidocious';
console.log(str.includes("n"));

//18. Kika om strängen ovan innehåller bokstaven x.
console.log(str.includes("x"));

//19. I ovanstående array, hitta vilket position första förekomsten av p har.
console.log(str.indexOf("p"));

//20. I strängen nedan, plocka fram de 5 första tecknena.
let fiveFirst = str.slice(0,5);
console.log(fiveFirst);

//21. I strängen ovan, plocka fram de 7 sista tecknena.
let sevenLast = str.slice(-7);
console.log(sevenLast);
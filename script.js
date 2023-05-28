for (let i = 0; i < 100; i++) {
    console.log(i);
}
let i = 0; 
while( i < 50 ) {
    i++;
    console.log(i);
}

const myMassive = ["lasha","dimitri", "giorgi", " shota", "gela"  ];
console.log(myMassive);
myMassive.push("giji");
console.log(myMassive);
myMassive.unshift("dmssnnn");
console.log(myMassive);
myMassive.shift();
console.log(myMassive);
myMassive.pop();
console.log(myMassive);


let emptyMassive = [];
for( emptyMassive = 0; emptyMassive < 10000 ; emptyMassive++) {
    console.log(emptyMassive * emptyMassive);
}

// let newNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 60, 20, 40];
// for ( a = 0; a < newNumbersArray.length; a++) {
//     console.log(newNumbersArray[a] ++);
// }


let newwArray = [2 ,3 ,4 ,5 ,8 , 10 ,11];
for( let b = 0 ; b < newwArray.length; b++) {
    if( newwArray[b] % 2 === 0) {
        console.log(false);
    }else {
        console.log(true);
    }
}


let string = " chemi saxelia dimitri";
let result = string.toUpperCase(string);
console.log(result);

result = string.toLowerCase(string);
console.log(result);
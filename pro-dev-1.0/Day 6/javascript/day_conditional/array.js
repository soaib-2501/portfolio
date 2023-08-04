// let arr = [1,2,43,45,23.5,78.9,"soaib"]
// arr[8] = 100;
// console.log(arr);

// let arr1 = new Array();
// arr1[0]=10;
// arr1[1]=20;
// console.log(arr1);

// let a1 = [12,23,34];
// let a2 = [23,56];
// let a3 = a1.concat(a2);
// console.log(a3);

//sort
// const points = [40, 100, 1, 5, 25, 10];
// // points.sort(function(a, b){return a - b}); // ascending 
// points.sort(function(a, b){return b - a}); // descending
// console.log(points);

//slice
// let a1 = [12,23,9,34];
// let a3 = a1.slice(0,2);
// console.log(a3);

// let a1 = [2,4,56,42]
// let x = function(n){
//     return n%2==0;
// };
// console.log(a1.every(x));

// let a2 = [2];
// a2[6] = 123;
// a2.fill(0,1,6);
// console.log(a2);

let a1 = [1,23,42,34,56,15,67,88];
let a2 = a1.filter((x) => {
        if ( x % 2 == 0) return true;
        else return false;
    }
);
console.log(a2);





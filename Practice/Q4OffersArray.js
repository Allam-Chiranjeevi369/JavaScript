let arr = [250,645,300,900,50];
let offer = 0.10;

for (let i in arr) // for-of in array is used for values, for-in is used for accessing index
     arr[i] -= arr[i]*offer;

console.log(`New prices are : ${arr}`)
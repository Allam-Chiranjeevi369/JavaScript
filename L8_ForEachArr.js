let arr = [1,2,5,1,3];
let ar = ["Hyderabad", "Pune", "Mumbai", "Banglore"];

ar.forEach((val,index,arr) => {
    console.log(`value : ${val.toUpperCase()}, at index : ${index}, of array : ${arr} `)
});
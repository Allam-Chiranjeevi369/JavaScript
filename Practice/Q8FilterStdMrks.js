let marks = [63,90,99,73,92,56,64,72,91];
let toppers = marks.filter((val)=>{

    return (val >= 90);

});

console.log(toppers.sort());
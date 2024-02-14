let arr = [1,2,7,10,6,5,3,4];
let sum = arr.reduce((pre,cur,index)=>{

    return pre + cur ;

});

let greatest = arr.reduce((pre,cur)=>{

    return pre > cur ? pre:cur;

});

console.log(sum,greatest);
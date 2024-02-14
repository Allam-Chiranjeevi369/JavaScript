let p = new Promise((resolve, reject)=>{

    console.log("into promise")
    // resolve("successfull");
    reject("err");

});

console.log(p);
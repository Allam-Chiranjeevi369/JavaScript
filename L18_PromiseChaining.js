function getDataAPI(data,getNextData){

    return( new Promise((resolve,reject)=>{

        setTimeout(()=>{

            if(getNextData) getNextData();
            console.log(`Your data : ${data}`);
            resolve("successful");
            // console.log(result);

        }, 2000 );

    } ));

}

// let result = getDataAPI(2);
// console.log(result);

// let promise = getDataAPI(1);
// promise.then((res)=>{ // then(result); or catch(error);
//     console.log(res); 
// });

// PROMISE CHAINING :

getDataAPI(1).then((res)=>{

    return getDataAPI(2);

}).then((res)=>{

    return getDataAPI(3);

}).then((res)=>{

    console.log(res)

});
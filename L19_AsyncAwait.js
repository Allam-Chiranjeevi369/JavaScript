function getDataAPI(data){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log(`Your data : ${data}`);
            resolve(200); // '200' means successful

        },2000);

    });

}

async function getNextData(){

    console.log(`Fetching data 1`);
    await getDataAPI(1);
    console.log(`Fetching data 2`);
    await getDataAPI(2);
    console.log(`Fetching data 3`);
    await getDataAPI(3);
    console.log(`Fetching data 4`);
    await getDataAPI(4);

}

getNextData();
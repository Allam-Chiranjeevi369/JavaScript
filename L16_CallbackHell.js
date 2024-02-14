function getData(data,getNextData){

    setTimeout(()=>{

        if(getNextData){
            getNextData();
        }
        console.log(`Your data :  ${data}`);
        
    }, 2000);
    
}

// callback Hell(pyramid Doom).
getData(1,()=>{

    getData(2,()=>{

        getData(3,()=>{

            getData(4,()=>{

                getData(5);

            } );

        } );

    } );

} );
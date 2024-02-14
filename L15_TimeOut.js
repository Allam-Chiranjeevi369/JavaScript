setTimeout(()=>{
    console.log("Hello")
}, 500); //prints "Hello" after 2 secs delay.

function printArgs(data, printData){

    setTimeout(()=>{ 
        
        console.log(`Data : ${data}`);
        if(printData) printData();
        

    }, 1000 );

}

printArgs(22,()=>{printArgs(20)});
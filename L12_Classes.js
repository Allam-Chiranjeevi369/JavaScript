class Example{

    constructor(){

        console.log("Example class constructor");

    }
    printAbc(){

        console.log("abc");

    }

    printThisNumber(num){

        this.num = num; // automatically creates variable num

    }

}

let objRef = new Example();
objRef.printAbc();
objRef.printThisNumber(90);
console.log(objRef.num);
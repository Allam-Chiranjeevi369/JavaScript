class Parent{

    constructor(){

        console.log("hello this is parent constructor");

    }
    parentFun(){

        console.log("parent function");

    }

}


class Child extends Parent{

    // constructor(){

    //     console.log("This is Child's constructor");
    //     super();

    // }

    childFun(){

        console.log("Child fun");

    }

}

let objRef = new Child();
// objRef.childFun();
objRef.parentFun();
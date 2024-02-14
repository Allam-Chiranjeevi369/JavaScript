let returnVowels = (str) => {

    let count = 0;
    for(let i of str) 'a' == i || 'a' == i || 'e' == i || 'i' == i || 'o' == i || 'u' == i ? count++ :-1;
    console.log(count)

};

returnVowels("hello")

// Using function keyword

function funVowels(str){

    let count = 0;
    for(let i of str) 'a' == i || 'a' == i || 'e' == i || 'i' == i || 'o' == i || 'u' == i ? count++ :-1;
    console.log(count)

}

funVowels("hello");
let box = document.querySelectorAll('.box')

// box[0].innerText = 'change1';
// box[1].innerText = 'change2';
// box[2].innerText = 'change3';

for(let i in box){

    setTimeout( ()=>{box[0].innerText = `change${0}`;}, 1000);
    setTimeout( ()=>{box[1].innerText = `change${1}`;}, 2000);
    setTimeout( ()=>{box[2].innerText = `change${2}`;}, 3000);


}
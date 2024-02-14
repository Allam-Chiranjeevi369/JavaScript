const btn = document.querySelector('#switch');
const bulb = document.querySelector('#bulb');
let flag = 0;

btn.addEventListener('click', ()=>{

    if(flag == 0){

        btn.innerHTML = 'off';
        bulb.style.backgroundColor = "yellow";
        flag = 1;

    }else{

        btn.innerHTML = 'on';
        bulb.style.backgroundColor = "transparent";
        flag = 0;

    }
 
});
const btn=document.querySelector('#btn');
const h3=document.querySelector('#h3');
const on=document.querySelector('#on');
const off=document.querySelector('#off');

btn.addEventListener('click',functuion=>{
    if(btn.innerHTML=='ON')
    {
        btn.innerHTML='OFF';
        off.style.display="none";
        on.style.display="block";
        h3.innerHTML="Click on the below button to switch off the light";
    }
    else
    {
        btn.innerHTML='ON';
        off.style.display="block";
        on.style.display="none";
        h3.innerHTML="Click on the below button to switch on the light";
    }
})
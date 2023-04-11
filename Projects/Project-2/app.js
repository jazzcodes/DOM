const openBtn=document.querySelector('#open-btn');
const closeBtn=document.querySelector('#close-btn');
const modalContainer=document.querySelector('.modal-container');
const html=document.querySelector('html');

openBtn.addEventListener("click",
()=>
{
    modalContainer.style.display='block';
    html.style.opacity='0.9';
});

closeBtn.addEventListener("click",
()=>
{
    modalContainer.style.display='none';
    html.style.opacity='1';
    
});

window.addEventListener("click",
(e)=>
{
    console.log(e.target);
    if(e.target===html)
    {
    modalContainer.style.display='none';
    html.style.opacity='1';
    }
    
});

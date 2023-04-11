// Example 1 -> HTML on Event Method
//<button onclick="alert('I love JS')">Enter</button>

// Example 2
// Using Add Event Listener Method
const buttonTwo=document.querySelector('.btn-2').addEventListener("click", ()=>alert('I like JS too'));

// Exmaple 3 
// Using mouseover

const buttonThree=document.querySelector('.box-3').addEventListener("mouseover",

()=>
{
    const boxThree=document.querySelector('.box-3');
    boxThree.style.backgroundColor='black';
});

// Reveal

const revealButton=document.querySelector('.reveal-btn');
const hiddenContent=document.querySelector('.hidden-content');

revealButton.addEventListener(
    "click", ()=>
    {
        if(hiddenContent.classList.contains('reveal-btn'))
        
        {
            hiddenContent.classList.remove('reveal-btn');
        }

        else{
            hiddenContent.classList.add('reveal-btn');
        }





    }
);
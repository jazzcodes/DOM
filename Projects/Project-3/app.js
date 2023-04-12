const accordian=document.getElementsByClassName('question');

// function toggleAccordian()
// {


for(let i=0;i<accordian.length;i++)
{
    // accordian[i].addEventListener("click",
    // ()=>
    // {
    //     this.classList.toggle('active');
    //     console.log('clicked');
    //     // var answer = this.nextElementSibling;
    //     // if (answer.style.display === "block") {
    //     //   answer.style.display = "none";
    //     // } else {
    //     //   answer.style.display = "block";
    //     // }
    //   });
    accordian[i].addEventListener("click", function()
    {
        this.classList.toggle('active');
        let answer = document.getElementsByClassName('answer');
        console.log(answer);
        // for(let i=0;i<answer.length;i++)
        // {
        //     // if (answer[i].style.maxHeight === '0') {
        //     //     answer[i].style.maxHeight = '100px';
        //     //     answer[i].style.overflow = 'visible';
        //     //   } else {
        //     //     answer[i].style.maxHeight = '0';
        //     //     answer[i].style.overflow = 'hidden';
        //     //   }
        //     // doubt: why did the above method not work?
        //     if(answer[i].style.display==='block')
        //     {
        //         answer[i].style.display='none';
        //     }
        //     else{
        //         answer[i].style.display='block';
        //     }
        // }
        if(answer[i].style.display==='block')
        {
            answer[i].style.display='none';
        }
        else{
            answer[i].style.display='block';
        }
    });
 

    console.log(accordian[i]);


};
// };







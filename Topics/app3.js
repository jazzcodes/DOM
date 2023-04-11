// addEventListener('action', function, true/false)
// true ->Event Capturing (Top to botom)
// false (by default) -> Event Bubbling (bottom to top)
// Target is our element where the action is performed ( whichever element is clicked)

window.addEventListener('click', ()=>{console.log('Window')});

document.addEventListener('click', ()=>{console.log('Document')});

document.querySelector('.box-1').addEventListener('click', ()=>{console.log('Box-1')});

document.querySelector('.box-2').addEventListener('click', ()=>{console.log('Box-2')});

document.querySelector('button').addEventListener('click', ()=>{console.log('Target')});

// by default false, hence event bubbling can be observed in the console

window.addEventListener('click', ()=>{console.log('Window')}, true);

document.addEventListener('click', ()=>{console.log('Document')}, true);

document.querySelector('.box-1').addEventListener('click', ()=>{console.log('Box-1')}, true);

document.querySelector('.box-2').addEventListener('click', ()=>{console.log('Box-2')}, true);

document.querySelector('button').addEventListener('click', ()=>{console.log('Target')}, true);

// if both are displayed, event capturing is displayed first then event bubbling is displayed as above

document.querySelector('button').addEventListener('click', (e)=>{console.log(e)}, true);
// pointer event is displayed (e=event)

document.querySelector('button').addEventListener('click', (e)=>{console.log(e.target)}, true);
// now, if I click button, target property displays button element in HTML


document.querySelector('.box-1').addEventListener('click', (e)=>{console.log(e.target)}, true);
// now, if I click on div - box-1, target property displays div element in HTML 

// document.querySelector('.box-1').addEventListener('click', (e)=>{
//     e.stopPropagation(); //stops propagation
//     console.log('Box-1')}, true);


document.querySelector('.box-1').addEventListener('click', (e)=>{console.log(e.target)}, {once:true});
//{once:true} -> propagated only once throughout the execution of the program


// e.preventDefault() -> prevents default behaviour of an element

document.querySelector('a').addEventListener('click',(e)=>

{   
    e.preventDefault();
    console.log('OK')
    e.target.innerText="okay" }); // to change text
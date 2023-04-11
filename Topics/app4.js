// Event Delegation allows users to append SINGLE event listener to a parent element that adds it to all of its present and future descendants that matches a selector.

document.querySelector('.container').addEventListener(
    'click', (e)=>
    {
      console.log(e.target.getAttribute('id') + ' is clicked');

      if(e.target.matches('button'))

      {
        e.target.style.backgroundColor='purple';
      }
    }
);
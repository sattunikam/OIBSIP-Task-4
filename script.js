let string = "";//create string
let buttons = document.querySelectorAll('.button');//All elements select
//Array.from(buttons)//The Array.from() method returns an array from any iterable object
//Create array from buttons
Array.from(buttons).forEach((button) => {   //create array of buttons on use forEach loop with arrow function
  //()>= Arrow function
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == 'Ans') {
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'Clear') {
      string = "";
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'Back') {
      string = document.querySelector('input').value;
      if(string.length>0){
        string=string.substring(0,string.length-1);
      }
      document.querySelector('input').value = string;
    }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})


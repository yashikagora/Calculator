let display = document.getElementById('display');
buttons = document.querySelectorAll('button');
let displayvalue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText= e.target.innerText;
        console.log('Button text is', buttonText);
        if(buttonText == '*') {
            displayvalue += buttonText;
            display.value = displayvalue;
        }
        else if(buttonText == 'C') {
            displayvalue = ' ';
            display.value = displayvalue;
        }
        else if(buttonText== '=') {
            display.value = eval(displayvalue);
        }
        else if(buttonText ==  '<<') {
            displayvalue= displayvalue.substr(0, displayvalue.length-1);
            display.value= displayvalue;
        }
        else if(buttonText ==  '^') {
            buttonText= '**';
            displayvalue+= buttonText;
            display.value= displayvalue;
        }
        else {
            displayvalue += buttonText;
            display.value = displayvalue; 

        }
    }
    )
}
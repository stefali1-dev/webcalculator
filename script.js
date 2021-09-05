var container = document.querySelector('#container');

let child_nodes = container.childNodes;

var string = '';
var display_string = '';

var display = document.querySelector('#display');
var text_display = display.firstElementChild;

//console.log(calculateOperation("1+2x3-"));

child_nodes.forEach((square) => {
    if(square != display){

        square.addEventListener('click', e => {
            if(square.textContent == 'Clear'){

                string = '';
                display_string = '';
            }
            
            else if(square.textContent == '='){

                string = string + '+';

                string = calculateOperation(string).slice(0, -1);
                
                display_string = calculateFinalSum(string);
                string = '';
            }

            else {

                if(string == ''){

                    display_string = '';
                }

                var content = e.target.textContent;

                display_string = display_string + content;
                string = string + content;

                if(isNaN(square.textContent) && square.textContent != '.') {

                    string = calculateOperation(string);
                }
            }
            
            text_display.textContent = display_string;
        });
    }
});
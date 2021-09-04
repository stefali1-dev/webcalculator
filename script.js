var container = document.querySelector('#container');

let child_nodes = container.childNodes;

var string = "";

var display = document.querySelector('#display');
var text_display = display.firstElementChild;

console.log(calculate("2x3"));

child_nodes.forEach((square) => {
    if(square != display){

        square.addEventListener('click', e => {

            if(square.textContent == 'Clear')
                string = '';
    
            else if(square.textContent == '<--'){
                string = string.slice(0, -1);
            }
            
            else if(square.textContent == '='){
                string = calculate(string);
            }

            else{
                var content = e.target.textContent;
                string = string + content;
            }
            
            text_display.textContent = string;
        });
    }
});
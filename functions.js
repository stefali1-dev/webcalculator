var positive_arr = [];
var negative_arr = [];

function appendOperator(string, operator) {

    for (let i = 0; i < string.length; i++) {

        if(string[i] == operator){

            i++;
            element = '';

            while(string[i] != '+' && string[i] != '-' && i < string.length){
                
                element += string[i];
                i++;
            }

            if(operator == '+'){

                positive_arr.push(element);
            }

            else {

                negative_arr.push(element);
            }
        }
    }

    if(operator == '+'){

        if(string[0] != '-'){

            let i = 0;
            element = '';
    
            if(string[0] == '+'){
    
                i++;
            }
    
            while(string[i] != '+' && string[i] != '-'){
                    
                element += string[i];
                i++;
            }
    
            positive_arr.push(element);
        }
    }

}

function divideString(string, char){

    for (let i = 0; i < string.length; i++) {

        if(string[i] == char)

            return [string.slice(0, i), string.slice(i+1, string.length)];
      }
}

function firstOperator(string){

    for (let i = 0; i < string.length; i++) {

        if(string[i] == 'x' || string[i] == '/' || string[i] == '%'){

            return string[i];
        }

        return null;
    }
}

function operate(a, b, operator){

    switch(operator) {

        case '+':
            return a + b;

        case '-':
            return a - b;

        case 'x':
            return a * b;

        case '/':
            return a / b;

        case '%':
            return a % b;
    }
}

function calculate(string) {

    if(string == Number(string)){

        return Number(string);
    }

    let i=0;

    var left_value ;
    var left_value_str = '';

    var right_value;
    var right_value_str = '';

    var operator = '';

    var finished = false;

    while(string[i] != 'x' && string[i] != '/' &&
         string[i] != '%' && string[i] < string.length) {

            left_value_str += string[i];
            i++;
        }

    left_value = Number(left_value_str);


    operator = string[i];
    i++;

    while(!finished){

        while(string[i] != 'x' && string[i] != '/' &&
         string[i] != '%' && string[i] < string.length) {

            right_value_str += string[i];
            i++;
        }

        right_value = Number(right_value_str);

        left_value = operate(left_value_str, right_value, operator);

        if(i == string.length){

            finished = true;
        }

        else {

            operator = string[i];
        }

        i++;
    }

    return left_value;
}
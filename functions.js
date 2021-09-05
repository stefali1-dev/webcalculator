
function operate(a, b, operator){

    switch(operator) {

        case '+':
            return a + b;

        case '-':
            return a - b;

        case 'x':
            return Math.round(a * b * 100) / 100;

        case '/':
            return Math.round(a / b * 100) / 100;

        case '%':
            return Math.round(a % b * 100) / 100;
    }
}

function calculateFinalSum(string) {

    var i = 0;
    var value = '';
    var sum = 0;

    if(string[0] != '-' && string[0] != '+') {

        string = '+' + string;
    }

    while(i < string.length) {

        value = '';
        var start_index = i + 1;
        var operator = string[i++];

        while(string[i] != '-' && string[i] != '+' && i < string.length) {

            i++;
        }

        value = string.slice(start_index, i);
        
        sum = operate(sum, Number(value), operator);
    }
    return sum;
}

function calculateOperation(string) {

    let i = string.length - 1;
    let j = i -1;

    while(string[j] != 'x' && string[j] != '/' && string[j] != '%' && j >= 0) {

        j--;
    }

    if(j == -1) {

        return string;
    }

    var right_value = string.slice(j+1, i);

    var operation = string[j];
    var operation_index = j;

    j--;

    while(string[j] !='-' && string[j] != '+' && j >= 0) {

        j--;
    }

    j++;

    var left_value = string.slice(j, operation_index);

    result = operate(Number(left_value), Number(right_value), operation);

    var final_sum = string.slice(0, j) + result + string[i];

    return final_sum;
}
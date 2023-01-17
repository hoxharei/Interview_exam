function nestedBraces(expression)
{

    let bracesStack = [];

    for(let i = 0; i < expression.length; i++)
    {
        let element = expression[i];

        if (element === '(' || element === '[' || element === '{')
        {

            bracesStack.push(element);
            continue;
        }

        if (bracesStack.length === 0)
            return false;

        let check;
        switch (element){
            case ')':
                check = bracesStack.pop();
                if (check === '{' || check === '[')
                    return false;
                break;

            case '}':
                check = bracesStack.pop();
                if (check === '(' || check === '[')
                    return false;
                break;

            case ']':
                check = bracesStack.pop();
                if (check === '(' || check === '{')
                    return false;
                break;
        }
    }

    return (bracesStack.length === 0);
}

let expr = "([{test}])";  //example

if (nestedBraces(expr))
    console.log("true ");
else
    console.log("false ");



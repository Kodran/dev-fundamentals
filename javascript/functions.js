// Sums two numbers
function sum(x, y){    
    var result = x + y;
    return result;
}

// Subtracts two numbers 
function subs(x, y){    
    var result = x - y;
    return result;
}

// Multiplication
function mult(w, z){    
    var result = w * z;
    return result;
}

function RunApp(x, y, w, z, v1, v2){
    var resultSum = sum(x, y);
    var resultRest = subs(w, z);
    var resultMult = mult(v1, v2);
    console.log(resultSum); // 3
    console.log(resultRest); // -12
    console.log(resultMult); // 6
}

RunApp(1, 2, 78, 90, 2, 3);
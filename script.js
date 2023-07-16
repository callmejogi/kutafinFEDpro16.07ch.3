// ﻿sum(3) = 3

// sum(5) = 8

// sum(20) = 28 -->

function mainFunction(callback){
    const num1 = +prompt(`Type a num1:`);
    const num2 = +prompt(`Type a num2:`);
    const num3 = +prompt(`Type a num3:`);

    if (typeof (num1) !== "number" || isNaN(num1)) return alert(`wrong num1!`);
    if (typeof (num2) !== "number" || isNaN(num2)) return alert(`wrong num2!`);
    if (typeof (num3) !== "number" || isNaN(num3)) return alert(`wrong num3!`);

    let sum = function(num1,num2,num3){
        const result = num1 + num2 + num3;
        return result;
    };

    alert(sum(+num1,+num2,+num3))
}

mainFunction()

function convertTemprature(){
    let val = document.getElementById("input-value");
    let result = document.getElementById("result");
    let input = document.getElementById("input");
    let output = document.getElementById("output");

    val.addEventListener("keyup",convertTemprature);
    input.addEventListener("change",convertTemprature);
    output.addEventListener("change",convertTemprature);
    
    let inputValue = input.value;
    let outputValue = output.value;

// calculation of celsius
    if(inputValue === "celsius" && outputValue === "fahrenheit"){
        result.value=Number((val.value*9) /5)+32;
    } else if( inputValue === "celsius" && outputValue === "kelvin"){
        result.value=Number(val.value) + 273.15;
    } else if(inputValue === "celsius" && outputValue === "celsius"){
        result.value = val.value;
    }

    // calculation of fahrenheit
    if(inputValue === "fahrenheit" && outputValue === "celsius"){
        result.value=Number((val.value - 32) * 5) / 9;
    } else if( inputValue === "fahrenheit" && outputValue === "kelvin"){
        result.value=Number(((val.value - 32) * 5) / 9) + 273.15;
    } else if(inputValue === "fahrenheit" && outputValue === "fahrenheit"){
        result.value = val.value;
    }

    // Calculation of kelvin
    if(inputValue === "kelvin" && outputValue === "celsius"){
        result.value=Number(val.value) - 273.15;
    } else if( inputValue === "kelvin" && outputValue === "fahrenheit"){
        result.value=Number(((val.value - 273.15)* 9) / 5) + 32;
    } else if(inputValue === "kelvin" && outputValue === "kelvin"){
        result.value = val.value;
    }
}
    function resetForm(){
        document.getElementById("myForm").reset();
    }
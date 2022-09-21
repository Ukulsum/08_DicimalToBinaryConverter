let binary_number = document.querySelector(" #result");
let submit_button = document.querySelector("#submit")

submit_button.addEventListener("click", function(){

    let decimal_number = document.querySelector("#number").value;

    if(decimal_number === ''){
        alert("Please enter a number")
    }
    else if(decimal_number < 0){
        alert("Please enter a positive number")
    }
    else{
        // binary_number.style.visibility = "visible";
    }

    let result = Number(decimal_number).toString(2);
    binary_number.innerHTML = result;

})



// showResult();

let numButton = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".btn");
let resultBox = document.querySelector(".result");
let clearBtn = document.querySelector('.delete-key');
let MC = document.querySelector(".mc-key");

let total = document.querySelector(".total");

let btnSpread = [...numButton];
let allBtnSpread = [...allBtns];

// For Number Inputs
btnSpread.forEach((button, i) => {
button.addEventListener("click", () => {
  
    // Inner Values for calculator

    if (resultBox.innerHTML == "0") {
      resultBox.innerHTML = "";
    }

    let value = numButton[i].innerHTML;
    resultBox.innerHTML += value;
  });
});


// Function to evalute Strings
function evaluate(fn) {
    return new Function('return ' + fn)();
}

// To calculate All Input
total.addEventListener('click', ()=> {
let allInputs = resultBox.innerHTML;

resultBox.innerHTML = evaluate(allInputs);

console.log(evaluate(allInputs));
})

// Delete a number
clearBtn.addEventListener('click', ()=> {
    resultBox.innerHTML = resultBox.innerHTML.slice(0, -1);
})

// Clear all inputs
MC.addEventListener('click', ()=> {
    resultBox.innerHTML = "0";
})
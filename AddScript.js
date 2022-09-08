let resultButton = document.getElementById("resultButton");
resultButton.disabled = "disabled";
resultButton.style.opacity = "0.5";
resultButton.style.cursor = "not-allowed";


function showButton() {
  let firstOperand = +document.getElementById("firstOperand").value;
  let secondOperand = +document.getElementById("secondOperand").value;

  if (firstOperand, secondOperand != 0) {
    resultButton.disabled = false;
    resultButton.style.opacity = "1";
    resultButton.style.cursor = "pointer";
  } else {
    resultButton.disabled = "disabled";
    resultButton.style.opacity = "0.5";
    resultButton.style.cursor = "not-allowed";
  }
}

function getResult() {
  let firstOperand = +document.getElementById("firstOperand").value;
  let secondOperand = +document.getElementById("secondOperand").value;

  let myResult = firstOperand + secondOperand;

  if (myResult == 69) {
    window.location.href = "https://youtu.be/dQw4w9WgXcQ";
  } else {
    alert(`The sum of the two numbers is ${myResult}`);
  }
}


// https://stackoverflow.com/questions/10709884/show-button-if-input-is-not-empty

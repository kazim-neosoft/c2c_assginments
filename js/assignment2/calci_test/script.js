// Initilization of calculator screen value
let box = document.getElementById("display");
box.value = "";

//for history
let history=document.getElementById("calc-history-box")
console.log(history)

// append character to screen
function addToScreen(value) {
  box.value += value;
  if (value == "c") {
    resetScreen();
  }
}

// reset screen
function resetScreen() {
  box.value = '';
}

// evaluate a mathematical expression string
function answer() {
  let s = box.value;
  let result= String(eval(s));
  box.value  = result;

  let fullHistory ="  "+ s + " = " +result
  //appending result in history
  
  history.textContent += fullHistory + " ||";
  
}

function backSpace() {
  let s = box.value;
  let len = s.length;
  if (len > 0) {
    // s = s.slice(0, len-1);
    s = s.slice(0, -1);
  }
  box.value = s;
}

function power(y) {
  let x = box.value;
  box.value = Math.pow(x, y);
}



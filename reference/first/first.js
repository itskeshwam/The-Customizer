window.onerror = function(message) {
    alert(`${message}`);
}

//This function plays the click sound.
function playSound() {
//var sound = document.getElementById("audio");
//sound.play();
//disabling for now cause its too laggy.  
}

//This is the AC option, or zeroize the calculation window.
function forClear(){
document.getElementById('calculation').innerHTML = "0";
playSound();
}

//You have to clear the zero, not append the zero to the calculation.
function clearZero(){
var value = document.getElementById('calculation').innerHTML;
if (value == "0"){
  value = " ";
  document.getElementById('calculation').innerHTML = value;
}
}

//This funtion adds a parentheses and has some checks for the right or left parentheses
function parentheses(){
var value = document.getElementById('calculation').innerHTML;
if((value.match(/\(/g) || []).length > (value.match(/\)/g) || []).length){ //this uses regular expression.
  value = ")";
  document.getElementById('calculation').innerHTML += value;
}
else{
  value = "(";
  document.getElementById('calculation').innerHTML += value;
}
playSound();
}

var buttons = document.getElementsByTagName('button');

Array.prototype.forEach.call(buttons, function(b){
b.addEventListener('click', createRipple);
})

//this is an animation effect. 
function createRipple(e)
{
if(this.getElementsByClassName('ripple').length > 0)
  {
    this.removeChild(this.childNodes[1]);
  }

var circle = document.createElement('div');
this.appendChild(circle);

var d = Math.max(this.clientWidth, this.clientHeight);
circle.style.width = circle.style.height = d + 'px';

circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';

circle.classList.add('ripple');
}

//This function is essentially a backspace in the calculation window.
function deleteChar(){
var value = document.getElementById('calculation').innerHTML;
value = value.slice(0,value.length - 1);
document.getElementById('calculation').innerHTML = value;
playSound();
}

//Just divide the value by 100 and post the value.
function percentage(){
var value = document.getElementById('calculation').innerHTML;
value = value.replace(/,/g,'');  //this is needed because % (divide by 100) does not understand commas.
value = value / 100;
document.getElementById('calculation').innerHTML = value;
playSound();
}

//This function adds the value that you input to the display.
function forDisplay(value){
clearZero();
document.getElementById('calculation').innerHTML += value;
playSound();
}

//This uses the eval function in JavaScript. maybe it would be best to solve this myself?
function solveDisplay(){
clearZero();
var equation = document.getElementById('calculation').innerHTML;
equation = equation.replace(/,/g,'');  //this is needed because eval does not understand commas.
try{
  console.log(equation);
  var solved = eval(equation);
} catch (e){
  console.log(e);
}
//This below adds the commas to the display, sets for English and enables up to 4 decimal digits.
solved = solved.toLocaleString('en-US', { maximumFractionDigits: 4 });
document.getElementById('calculation').innerHTML = solved;
console.log(equation);
playSound();
}
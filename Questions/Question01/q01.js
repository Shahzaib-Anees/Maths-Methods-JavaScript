let userInputNum = +prompt("Enter a decimal number");
let roundNum = Math.round(userInputNum);
let floorNum = Math.floor(userInputNum);
let ceilNum = Math.ceil(userInputNum);

document.write(`<div class="card">
<h4>Rounding off the UserInput Decimal Number</h4>
<span>Number : ${userInputNum}  </span>
<span>  round off Value : ${roundNum} </span>
<span>Floor Value : ${floorNum}</span>
<span>Ceil Value : ${ceilNum}</span>
</div>`);
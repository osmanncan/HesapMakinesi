const resultTxt = document.querySelector('.resultTxt');
const btns = document.querySelectorAll('.btn-num');

const specialChars = ['+', '-', '*', '/', '.'];


function handleclick(){
    resultTxt.innerText += this.innerText;
}


for (const btn of btns){
    btn.addEventListener('click', handleclick);
}


function handlereset(){
    resultTxt.innerText = '';
}

document.querySelector('.btn-reset').addEventListener('click', handlereset);

function handleDelete(){
    resultTxt.innerText = resultTxt.innerText.substring(0, resultTxt.innerText.length -1);
}

document.querySelector('.btn-del').addEventListener('click', handleDelete);

function handleCalculate() {
try {
resultTxt.innerText = eval(resultTxt.innerText);
} catch {
alert('Hesaplamada problem var');
}
}


document.querySelector('.btn-calculate').addEventListener('click', handleCalculate);
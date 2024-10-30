//check empty input
function check(msg)
{
    const i1 = document.getElementById('sub').value;
    const i2 = document.getElementById('gp').value;
    const i3 = document.getElementById('cred').value;
    if(i2=="" || i3==""){
        error.innerHTML = msg;
        error.style.display = 'block';
        exit();
    }
    else
        error.style.display = 'none';
}

function checkNumber()
{
    let input2= document.getElementById('gp').value;
    let input3 = document.getElementById('cred').value;
    if(isNaN(Number(input2))|| isNaN(Number(input3)))
        {
            digitError.innerHTML = "INVALID NUMBER";
            digitError.style.display="block";
            exit();
        }
    else
    {
        digitError.style.display="none";
    }
}
//clear input
function clearInput()
{
    const input =document.querySelectorAll('input');
    input.forEach((i)=>{
        i.value = "";
    })
}

//add new row
function add()
{
    let input1 = document.getElementById('sub').value;
    let input2= document.getElementById('gp').value;
    let input3 = document.getElementById('cred').value;
    check("fill the required fields");
    checkNumber();
    const table = document.querySelector('table');
    const row = document.createElement('tr');
    row.setAttribute("class", "row");
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    td1.innerHTML = input1;
    td2.innerHTML = Number(input2);
    td3.innerHTML = Number(input3);
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    table.appendChild(row);
    clearInput();
}

//calculate gpa
function calc()
{
    let sum =0;
    let totalCredit =0;
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) =>
        {   
            const tr=row.querySelectorAll('td');
            sum+=Number(tr[1].innerHTML)*Number(tr[2].innerHTML);
            totalCredit+=Number(tr[2].innerHTML);
        })
    return (sum/totalCredit).toFixed(2);
}

//print result
function result()
{
    const r= calc();
    resultBox.innerHTML = r;
    resultBox.style.display="block";
}

//reset
function reset()
{
    let rows = document.querySelectorAll('.row');
    rows.forEach((row) =>{
        row.remove();
    })
    resultBox.style.display="none";
    error.style.display="none";
    digitError.style.display="none";
    clearInput();
}

const digitError = document.getElementById('digitError');
const error = document.getElementById('inputError');
const resultBox = document.getElementById('result');
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click",add);
const calcBtn = document.getElementById('calcBtn');
calcBtn.addEventListener("click",result);
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener("click",reset);




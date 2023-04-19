const body = document.body;
const table = document.createElement('table');
let counterRow = 0;

let tr = document.createElement('tr');
table.append(tr);

function foo(){
    let number = Math.floor(Math.random()*100);
    if (counterRow <= 4){
        newCell(number, tr);
        counterRow = counterRow + 1;
        console.log(counterRow);
    } else {
        tr = document.createElement('tr');
        table.append(tr);
        counterRow = 1;
        newCell(number, tr);
    }
}

function newCell(number, tr){
    let td = document.createElement('td');
    tr.append(td);
        if (number >= 50){
            td.classList.add('bgOrange');
        }
        td.append(number);
}

body.prepend(table);
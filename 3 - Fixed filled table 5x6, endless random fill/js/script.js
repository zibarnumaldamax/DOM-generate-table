let array = [];
for (let i = 0; i < 30; i++){
    array[i] = Math.floor(Math.random()*100);
}
const body = document.body;
const table = document.createElement('table');
let counter = 0;
let selector = "";

for (let i = 0; i < 6; i++){
    let tr = document.createElement('tr');
    table.append(tr);
    for (let j = 0; j < 5; j++){
        let td = document.createElement('td');
        td.id = "cell" + counter;
        tr.append(td);
        td.append(array[counter]);
        if (array[counter] >= 50){
            td.classList.add('bgOrange');
        }
        array[counter] = counter;
        counter = counter + 1;
    }
}

function foo(){
        let number = Math.floor(Math.random()*100);
        let random = array[Math.floor(Math.random() * array.length)];
        selector = "#cell" + random;
        table.querySelector(selector).innerHTML = "";
        table.querySelector(selector).append(number);
        table.querySelector(selector).className = "";
        if (number >= 50){
            table.querySelector(selector).classList.add('bgOrange');
        } else {
            table.querySelector(selector).classList.add('bgWhite');
        }
}

body.prepend(table);
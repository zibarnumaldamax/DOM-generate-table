let array = [];
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
        counter = counter + 1;
    }
}

counter = 0;

function foo(){
    if (counter >= 30){
        return alert('Таблица заполнена');
    } else {
        let number = Math.floor(Math.random()*100);
        array[counter] = number;
        selector = "#cell" + counter;
        table.querySelector(selector).append(number);
        if (number >= 50){
            table.querySelector(selector).classList.add('bgOrange');
        }
        counter = counter + 1;
    }
}

body.prepend(table);
let number = 100;

arrayLength = Math.floor(Math.random()*number);
if (arrayLength == 0){
    arrayLength = 1;
}

let array = [];
for (let i = 0; i < arrayLength; i++){
    array[i] = Math.floor(Math.random()*100);
}

let width = Math.round(Math.sqrt(arrayLength));

const body = document.body;
const table = document.createElement('table');
let counter = 0;

for (let i = 0; i < (array.length/width); i++){
    let tr = document.createElement('tr');
    table.append(tr);
    for (let j = 0; j < width; j++){
        let td = document.createElement('td');
        td.id = "cell" + counter;
        tr.append(td);
        if (array[counter] === undefined){
            td.append(Math.floor(Math.random()*100));
            array.length = array.length + 1;
        } else{
            td.append(array[counter]);
        }
        if (array[counter] >= 50){
            td.classList.add('bgOrange');
        }
        counter = counter + 1;
    }
}

function foo(){
        let number = Math.floor(Math.random()*100);
        let random = Math.floor(Math.random() * array.length);
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
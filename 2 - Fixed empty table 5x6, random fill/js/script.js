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
        td.append("");
        array[counter] = counter;
        counter = counter + 1;
    }
}

function foo(){
    if (array.length === 0){
        return alert('Таблица заполнена');
    }
    while(true) {
        let number = Math.floor(Math.random()*100);
        let random = array[Math.floor(Math.random() * array.length)];
        if (array.includes(random)){
            selector = "#cell" + random;
            table.querySelector(selector).append(number);
            array.splice(array.indexOf(random), 1);
            table.querySelector(selector).className = "";
            if (number >= 50){
                table.querySelector(selector).classList.add('bgOrange');
            } else {
                table.querySelector(selector).classList.add('bgWhite');
            }
            break
        } else continue
    }
}

body.prepend(table);
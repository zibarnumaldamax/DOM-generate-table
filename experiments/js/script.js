let number = 100;

arrayLength = Math.floor(Math.random()*number);
let array = [];
for (let i = 0; i < arrayLength; i++){
    array[i] = Math.floor(Math.random()*1000);
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
        tr.append(td);
        if (array[counter] <= 200){
            td.classList.add('bgGray')
        } else if (array[counter] <= 400){
            td.classList.add('bgGreen')
        } else if (array[counter] <= 600){
            td.classList.add('bgCyan')
        } else if (array[counter] <= 800){
            td.classList.add('bgOrange')   
        } else {
            td.classList.add('bgRed')
        }
        if (array[counter] === undefined){
            td.append('NaN');
        } else{
            td.append(array[counter]);
        }
        counter = counter + 1;
    }
}

body.prepend(table);
console.log(array);
console.log(array.length);
console.log(table);
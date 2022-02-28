// Looping
// For Loop
for (let index = 0; index < 10; index++) {
    console.log("perulangan ke-" + index);
}

// While
let index = 0;
while(index < 10){
    console.log("perulangan ke-" + index)
    index++;
}

// Do While
let index = 0;
do{
    console.log("perulangan ke-" + index);
    index++;
}while(index < 10)



// Function
function test(){
    console.log("haha")
}

const hai = test();

console.log(test());

function total(angka1, angka2){
    return angka1 + angka2;
}

console.log(total(1,2));

// tambahan :
// jika variable ditulis langsung 
// tanpa dideklarasikan terlebih dahulu
// maka secara otomatis akan dianggap menggunakan var
// misalnya
coba = "cemil"
// const coba = "cemilick"; akan error
// let coba = "cemilick"; akan error
// var coba = "cemilick"; tidak akan error
console.log(coba)
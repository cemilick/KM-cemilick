// algoritma
// sekumpulan instruksi yang dibuat untuk menyelesaikan suatu permasalahan

// pseudocode
// alur algoritma yang dituliskan untuk mempermudah dalam membuat sebuah program

// flowchart
// alur algoritma dalam tampilan diagram untuk memperjelas cara kerja dari suatu sistem / program

// conditional
// if statement
if(''){
    console.log("true")
} else {
    console.log("false")
}

// switch case
const kasus = "kasus1";
const kasus2 = "kasus2";

switch(kasus){
    case "kasus1" :
        console.log("kasus pertama");
        break;
    case 2 :
        console.log("kasus kedua");
        break;
    case true :
        console.log("kasus ketiga");
        break;
    case [] : // karena [] !== []
        console.log("tidak akan pernah terpanggil");
        break;
    case {} : // karena {} !== {}
        console.log("tidak akan pernah terpanggil");
        break;
    case kasus2 :
        console.log("kasus ke sekian");
        break;
    default :
        console.log("sama kyk else");
        break;
}
// truthy
// [], {}, "string", number selain 0, dll selain falsy

// falsy
// false, undefined, null, 0, NaN, ""

// truthy falsy bisa dipakai untuk parameter pada if
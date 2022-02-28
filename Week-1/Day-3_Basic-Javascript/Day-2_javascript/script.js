console.log("Day 3")

const phi = 3.14;
// const untuk deklarasi variable yang nilainya tetap dan tidak akan pernah bisa diubah


var gei = 3;
var gei = 0;
// var bisa di deklarasikan berulang tanpa ada error

let asd = 1;
// let asd = 3;
// let tidak bisa di deklarasikan berulang
// inilah kenapa let lebih direkomendasikan digunakan daripada var


// let dan var sama sama bisa digunakan di scope lain saat deklarasinya di global
// let dan var sama sama tidak bisa digunakan saat declare nya di dalam scope function
function test(){
    let coba = 1;
    var coba2 = 3;

    console.log(gei)
    console.log(asd)
    console.log(phi)
}

test()


// console.log(coba)
// console.log(coba2)



// tipedata

// number 
    // integer
    const umur = 20;
    // float
    const phi2 = 3.14;

// string
    const name = "my name is name";
    const hari = "Jum'at";
    const deskripsi = '"deskripsi sebuah produk"';

// boolean
    const boolean = true;

// object
    // pasangan key : value
    // key sama kyk variabel tapi miliknya object, tanpa perlu var let const
    const obj = {
        nama : "cemil",
        umur : umur, // umur berisi umur (variable const di atas)
        sekolah : {
            smp : "SMP Grabag",
            smk : "SMK 1 MGL",
            S1 : "UPNVY" 
        },
        fungsi : () => {
            console.log("inilah fungsiku");
        }
    }

// array
    const arr = ["game","tidur","kerja", true, 'apa', obj, {satu : 1, dua : 2}, () => {console.log("test")}];

// NaN (Not a Number)
    const hasil = "a" + 20;

// null
    const kosong = null;

// undefined
    const definisi = undefined;

// penjumlahan string
    const first = "cemilick";
    const last = "cemill";
    const full = first - last;
    const jumlah = first + 10;

    console.log(full, jumlah)

// comparison
    const isTrue = "cemil" === 'cemil';
    const isTrue1 = "10" === 10;
    const isTrue2 = 10 === 10;
    const isTrue3 = "10" == 10;

    const isTrue4 = (20 > 9) !== false; 
const multiple = (angka1, angka2) => {
    let result = [];
    for(let i = angka1; i < angka2; i = i+angka1){
        result.push(i);
    }
    return result;
}

console.log(multiple(3,20));

// Array
const siswa = ['cemil','cemilick','rico']
    // Create
        // Push , menambahkan di akhir
        siswa.push("aku")
        // Unshift, menambahkan di awal
        siswa.unshift("tambahin")
    // Read
        console.log(siswa)
    // Update
        siswa[0] = undefined
        console.log(siswa, "hasil update")
    // Delete        
        // Pop, menghapus di akhir
        siswa.pop()
        console.log(siswa, "hasil pop")
        // Shift, menghapus di awal
        siswa.shift()
        console.log(siswa, "hasil shift")
// Object
    const bioData = {
        firstName : "cemilick",
        secondName : null,
        lastName : "cemill",
        age : 20,
        isMarried : false,
        hobbies : ["game", "coding", "rebahan"],
        myFullName : function(){
            return this.firstName + this.lastName
        }
    }
    // CRUD
    // Create
        bioData.bloodType = "O"
        bioData["pet"] = ["Kucing", "Kambing"]
        console.log(bioData)
    // Read
        // dot notation
        console.log(bioData.myFullName())
        // square notation
        console.log(bioData["hobbies"][0])
        console.log(bioData["myFullName"]())
    // Update
        bioData["pet"].push("Ayam")
        bioData.bloodType = "AB"
        console.log(bioData)
    // Delete
        delete bioData.bloodType
        console.log(bioData)

// Destruction pada array dan object
    // Array
    const hewan = ["kucing", "kambing", "buaya", "monyet"]
    let [hewan1, hewan2, hewan3, hewan4] = hewan

    // Object
    let {firstName, secondName, hobbies} = bioData
    console.log

// Spread operator
    // Array
    hewan = ["singa", ...hewan, "dinosaurus"] // bisa didepan belakang tambahnya
    
    // Object
    const dataku = {...bioData, kelas : "RN-1"} // hanya bisa ditambahin dibelakang

// boolean, function, undefined, null gaada built-in function
// makanya disebut tipedata primitve
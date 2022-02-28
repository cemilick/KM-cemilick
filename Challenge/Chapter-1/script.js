// console.log("---- SOAL NOMER 1 ----")
 
// // SOAL NOMOR 1
// const changeWord = (selectedText, changedText, text) => {
//     return text.replace(selectedText, changedText);
// }

// const kalimat1 = "Andini sangat mencintai kamu selamanya";
// const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";
// console.log(changeWord("mencintai", "membenci", kalimat1));
// console.log(changeWord("bromo", "semeru", kalimat2));

// console.log("")
// console.log("---- SOAL NOMER 2 ----")
 
// SOAL NOMOR 2
    const checkTypeNumber = (givenNumber) => {
        if(!givenNumber){
            return "Error : Bro where is the parameter?";
        } else if(typeof givenNumber !== 'number') {
            return "Error : invalid data type";
        } else if(givenNumber % 2 === 0){
            return "GENAP";
        } else {
            return "GANJIL";
        }
    }

    // console.log(checkTypeNumber(10))
	// console.log(checkTypeNumber(3))
	// console.log(checkTypeNumber("3"))
	// console.log(checkTypeNumber({}))
	// console.log(checkTypeNumber([]))
	// console.log(checkTypeNumber())

	console.log("")
	console.log("---- SOAL NOMER 3 ----")
    // SOAL NOMOR 3
    const checkEmail = (email) => {
        
        if(typeof email !== 'string'){
            return "Error : masukkin email dalam bentuk string cuy"
        } else {
            // cemilick.cemill@gmail.com
            reg = new RegExp("[A-Za-z0-9 _ \-\.]+[@][A-Za-z0-9]+[\.][A-Za-z\.]+")
            
            if(reg.test(email)){
                return "VALID"
            } else if(!/[A-Za-z0-9 _ \-\.]+[@]/.test(email)){
                return "Error : gaada tanda @ nya bro"
            } else {
                return "INVALID"
            }
        }
    }
    console.log(checkEmail("cemilick@mail.co.id"))
    console.log(checkEmail("cemilick@mail.com"))
    console.log(checkEmail("cemilick@mail"))
    console.log(checkEmail("cemilick")) 
    console.log(checkTypeNumber(checkEmail(3322)))
    console.log(checkEmail())
    
console.log("")
console.log("---- SOAL NOMER 4 ----")
// SOAL NOMOR 4
    const isValidPassword = (givenPassword) => {
        // Cek apakah input valid atau ga
        if(!givenPassword || typeof givenPassword !== 'string'){
            return "ERROR : Masukkin password dalam bentuk string gaes"
        } else {
            // membuat regex
            const reg = new RegExp("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}")

            if(reg.test(givenPassword)){
                return "true"
            } 
            // jika tidak ada angka
            else if(!/(?=.*[0-9])/.test(givenPassword)){
                return "false (Gaada Angkanya bro)"
            } 
            // jika tidak ada huruf kecil
            else if(!/(?=.*[a-z])/.test(givenPassword)){
                return "false (Gaada huruf kecil nih)"
            }  
            // jika tidak ada huruf besar
            else if(!/(?=.*[A-Z])/.test(givenPassword)){
                return "false (Gaada huruf besarnya bosku)"
            } 
            // jika panjang semuanya kurang dari 8
            else if(!/.{8,}/.test(givenPassword)){
                return "false (Minimal 8 karakter cuy)"
            } else {
                return "false"
            }
        }
    }

    console.log(isValidPassword('Meong2@21'))
    console.log(isValidPassword('meong2@21'))
    console.log(isValidPassword('@eong'))
    console.log(isValidPassword('Meong2'))
    console.log(isValidPassword(0))
    console.log(isValidPassword())

	// console.log("")
	// console.log("---- SOAL NOMER 5 ----")
    // // SOAL NOMOR 5
    // const getSplitName = (personName) => {
    //     if(typeof personName === 'string'){
	// 		// string dipecah berdasarkan spasi nya
    //         const name = personName.split(" ")
	// 		// jika inputan tiga kata
    //         if(name.length === 3){
    //             return {
    //                 firstName : name[0],
    //                 middleName : name[1],
    //                 lastName : name[2]
    //             }
    //         } 
	// 		// jika inputan dua kata
	// 		else if(name.length === 2) {
    //             return {
    //                 firstName : name[0],
    //                 middleName : null,
    //                 lastName : name[1]
    //             }
    //         } 
	// 		// jika inputan satu kata
	// 		else if(name.length === 1){
    //             return {
    //                 firstName : name[0],
    //                 middleName : null,
    //                 lastName : null
    //             }
    //         } 
	// 		// jika kurang dari satu atau lebih dari 3
	// 		else {
    //             return "Error : This function is only for 3 characters name"
    //         }
    //     } else {
    //         return "Error : Masukkan karakter dalam bentuk string"
    //     }
    // }

    // console.log(getSplitName("Aldi Daniela Pranata"))
    // console.log(getSplitName("Dwi Kuncoro"))
    // console.log(getSplitName("Aurora"))
    // console.log(getSplitName("Aurora Aureliya Sukma Darma"))
    // console.log(getSplitName(0))
	
	// console.log("")
	// console.log("---- SOAL NOMER 6 ----")
    // // SOAL NOMOR 6
    // const getAngkaTerbesarKedua = (dataNumbers) => {
    //     if(typeof dataNumbers === 'object' && dataNumbers && dataNumbers.length){
    //         // membuat set untuk menghilangkan yang duplikat
	// 		// kemudian mengurutkan dan membaliknya lalu mengambil urutan kedua
	// 		return [...new Set(dataNumbers)].sort().reverse()[1]    
    //     } else {
    //         return "Error : Masukkan parameter dalam bentuk array"
    //     }
    // }
    
    // const dataAngka = [9,4,7,7,4,3,2,2,9,8]

    // console.log(getAngkaTerbesarKedua(dataAngka))
    // console.log(getAngkaTerbesarKedua({}))
    // console.log(getAngkaTerbesarKedua([]))
    // console.log(getAngkaTerbesarKedua(0))
    // console.log(getAngkaTerbesarKedua())
	
	
	// console.log("")
	// console.log("---- SOAL NOMER 7 ----")
    // // SOAL NOMOR 7
    // const dataPenjualanPakAldi = [
    //     {
    //       namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
    //       hargaSatuan: 760000,
    //       kategori : "Sepatu Sport",
    //       totalTerjual : 90,
    //     },
    //     {
    //       namaProduct : 'Sepatu Warrior Tristan Black Brown High',
    //       hargaSatuan: 960000,
    //       kategori : "Sepatu Sneaker",
    //       totalTerjual : 37,
    //     },
    //     {
    //       namaProduct : 'Sepatu Warrior Tristan Maroon High ',
    //       kategori : "Sepatu Sneaker",
    //       hargaSatuan: 360000,
    //       totalTerjual : 90,
    //     },
    //     {
    //       namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
    //       hargaSatuan: 120000,
    //       kategori : "Sepatu Sneaker",
    //       totalTerjual : 90,
    //     }
    //   ]

    //   const hitungTotalPenjualan = (dataPenjualan) => {
    //     if(typeof dataPenjualan === 'object' && dataPenjualan.length){
	// 		let result = 0  
	// 		for(let i=0; i < dataPenjualan.length; i++){    
	// 			result += (dataPenjualan[i].totalTerjual)
	// 		  }
	// 		return result;
	// 	} else {
	// 		return "Error : Harap masukkan input berupa array"
	// 	}
    //   }

    //   console.log(hitungTotalPenjualan(dataPenjualanPakAldi))
	//   console.log(hitungTotalPenjualan({}))

// 	console.log("")
// 	console.log("---- SOAL NOMER 8 ----")
// //   SOAL NOMOR 8
// const dataPenjualanNovel = [
//     {
//       idProduct: 'BOOK002421',
//       namaProduk: 'Pulang - Pergi',
//       penulis: 'Tere Liye',
//       hargaBeli: 60000,
//       hargaJual: 86000,
//       totalTerjual: 150,
//       sisaStok: 17,
//     },
//     {
//       idProduct: 'BOOK002351',
//       namaProduk: 'Selamat Tinggal',
//       penulis: 'Tere Liye',
//       hargaBeli: 75000,
//       hargaJual: 103000,
//       totalTerjual: 171,
//       sisaStok: 20,
//     },
//     {
//       idProduct: 'BOOK002941',
//       namaProduk: 'Garis Waktu',
//       penulis: 'Fiersa Besari',
//       hargaBeli: 67000,
//       hargaJual: 99000,
//       totalTerjual: 213,
//       sisaStok: 5,
//     },
//     {
//       idProduct: 'BOOK002941',
//       namaProduk: 'Laskar Pelangi',
//       penulis: 'Andrea Hirata',
//       hargaBeli: 55000,
//       hargaJual: 68000,
//       totalTerjual: 20,
//       sisaStok: 56,
//     },
//   ];
//     const formatUang = (amount) => {
//         let result = [], j = 0;
		
//         // dikonversi terlebih dahulu ke string
//         amount = amount.toString()
		
//         // ditulis ulang dari belakang
//         for(let i=amount.length-1; i >= 0; i--){
			
//             // setiap kali kelipatan tiga, maka disisipkan titik
//             if(j!== 0 && j % 3 === 0) result.unshift('.')
				
//             result.unshift(amount[i])
//             j++
//         }
//         return result.join('')
//     }
  
//     const getInfoPenjualan = (dataPenjualan) => {
//     if(typeof dataPenjualan === 'object' && dataPenjualan.length >= 0){
//         let totalJual = 0;
//         let totalBeli = 0;  
//         for(let i = 0; i < dataPenjualan.length; i++){
//             // menghitung total penjualan
//             totalJual += (dataPenjualan[i].hargaJual*dataPenjualan[i].totalTerjual)
//             // menghitung total modal
//             totalBeli += (dataPenjualan[i].hargaBeli*(dataPenjualan[i].totalTerjual+dataPenjualan[i].sisaStok))
//         }
//         // untuk mengambil buku paling laris
// 		// mengurutkan dari yang terbesar berdasarkan total terjual
//         const urutkan = dataPenjualan.sort(
// 			(a, b) => b.totalTerjual - a.totalTerjual
// 		)
		
//         const penulis = urutkan[0].penulis;
//         const judul = urutkan[0].namaProduk;
        
//         return {
//             totalKeuntungan : "Rp. " + formatUang(totalJual - totalBeli),
//             totalModal : "Rp. " + formatUang(totalBeli),
//             persentaseKeuntungan : (parseFloat((totalJual - totalBeli)/totalBeli*100).toFixed(2)) + "%",
//             produkBukuTerlaris : judul,
//             penulisBukuTerlaris : penulis
//         }
//     } else {
//         return "Error : Parameter harus berupa array bro!"
//     }
//   }
//   console.log(getInfoPenjualan(dataPenjualanNovel))
//   console.log(getInfoPenjualan(100914))

// SOAL TAMBAHAN
//   const strToInt = (stringAngka) => {
//     if(typeof stringAngka === 'string'){
//         // dikalikan dengan integer supaya berubah menjadi number
//         const hasil = stringAngka*1
//         // mengecek kesamaan antara panjang input dan hasilnya
//         const panjangInput = stringAngka.length
//         const panjangHasil = (hasil + "").length
//         // jika tidak sama, maka params not valid
//         // contohnya, jika input "123" maka hasil harus 123
//         // contoh tidak valid
//         // input nya "12a3" (4 karakter)
//         // hasilnya 12 (2 karakter) -> terjadi perbedaan digit
//         // berarti params tidak valid 
//         if(panjangInput !== panjangHasil || isNaN(hasil)){
//             return "Error : params is not valid"
//         } else {
//             return hasil
//         }
//     } else {
//         return "Error : params must be a string"
//     }
// }

//   console.log(strToInt("456"), typeof strToInt("456"))
//   console.log(strToInt("52366"), typeof strToInt("52366"))
//   console.log(strToInt("asd"))
//   console.log(strToInt(12131))

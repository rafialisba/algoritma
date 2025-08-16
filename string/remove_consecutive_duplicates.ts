/**
 * 
 * Buat sebuah fungsi dalam TypeScript yang menerima string dan mengubahnya
 * menjadi bentuk yang menghapus huruf berulang berturut-turut, tetapi
 * tetap menyimpan urutan huruf
 * 
 * input:
 * "aaabbcaaa"
 * "aabbccddeeff"
 * "hhhhhhhha"
 * 
 * output:
 * "abca"
 * "abcdef"
 * "ha"
 * 
 */ 

// 1
function menghapusStringBerturutTurutAlgoritmaSatu(data: string): string {
    let result = ""
    let temp = data[0];

    for (let i = 1; i < data.length; i++) {
        if (data[i] === data[i - 1]) {
            temp += data[i];
        } else {
            result += temp[0];

            temp = data[i];
        }
    }

    result += temp[0];

    return result;
}

//2
function menghapusStringBerturutTurutAlgoritmaDua(data: string): string {
  let result = "";

  for (let i = 0; i < data.length; i++) {
    if (i === 0 || data[i] !== data[i - 1]) {
      result += data[i];
    }
  }

  return result;
}

const data1 = "aaabbcaaa"
const data2 = "aabbccddeeff"
const data3 = "hhhhhhhha"

const c11 = menghapusStringBerturutTurutAlgoritmaSatu(data1)
const c12 = menghapusStringBerturutTurutAlgoritmaSatu(data2)
const c13 = menghapusStringBerturutTurutAlgoritmaSatu(data3)

const c21 = menghapusStringBerturutTurutAlgoritmaDua(data1)
const c22 = menghapusStringBerturutTurutAlgoritmaDua(data2)
const c23 = menghapusStringBerturutTurutAlgoritmaDua(data3)

console.log(c11);
console.log(c12);
console.log(c13);

console.log(c21);
console.log(c22);
console.log(c23);
/**
 * 
 * Buat sebuah fungsi dalam typescript yang menerima sebuah kalimat
 * (string dengan spasi), lalu membalik urutan huruf dari setiap kata,
 * tetapi tetap mempertahankan urutan kata.
 * 
 * input:
 * "hello world"
 * "typescript is fun"
 * "programming"
 * 
 * output:
 * "olleh dlrow"
 * "tpircsepyt si nuf"
 * "gnimmargorp"
 * 
 */

/**
 * pseudocode:
 * function reverseString(data):
 *   set result = string kosong
 * 
 *   for i dari index terakhir data sampai index 0 (mundur):
 *     tambahkan data[i] ke result
 *   ulangi sampai i = 0
 * 
 *   return result
 * end function
 * 
 */

function reverseString(data: string): string {
    let result = ""

    for (let i = data.length - 1; i >= 0; i--) {
        result += data[i]        
    }

    return result
}


const sm4d1 = "hello world"
const sm4d2 = "typescript is fun"
const sm4d3 = "programming"

const sm4c1 = reverseString(sm4d1);
const sm4c2 = reverseString(sm4d2);
const sm4c3 = reverseString(sm4d3);

console.log(sm4c1);
console.log(sm4c2);
console.log(sm4c3);
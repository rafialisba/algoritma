/**
 * 
 * Buat sebuah fungsi dalam TypeScript yang menerima string dan menghapus
 * semua huruf vokal dari string tersebut, tetapi tetap
 * mempertahankan urutan huruf konsonan.
 * 
 * input:
 * "programming"
 * "typescript"
 * "hello world"
 * 
 * output:
 * "prgrmmng"
 * "typscrpt"
 * "hll wrld"
 * 
 */

/**
 * pseudocode:
 * function hapusVokalString(data):
 *   set result = string kosong
 * 
 *   for setiap karakter dari data mulai index 0 sampai terakhir:
 *     jika karakter bukan "a", "i" "u", "e", atau "o":
 *       tambahkan karakter ke result
 *     akhir jika
 *   ulangi sampai semua karakter dicek
 * 
 *   return result
 * end function
 * 
 */

function hapusVokalString(data: string): string {
    let result = ""

    for (let i = 0; i < data.length; i++) {
        if (data[i] !== "a" && data[i] !== "i" && data[i] !== "u" && data[i] !== "e" && data[i] !== "o") {
            result += data[i]
        } 
    }

    return result
}

const data1ks3 = "programming"
const data2ks3 = "typescript"
const data3ks3 = "hello world"

const s3d1 = hapusVokalString(data1ks3);
const s3d2 = hapusVokalString(data2ks3);
const s3d3 = hapusVokalString(data3ks3);

console.log(s3d1)
console.log(s3d2)
console.log(s3d3)
/**
 * 
 * Hitung jumlah kata dalam sebuah string
 * 
 * Buat sebuah fungsi yang menerima sebuah string,
 * lalu menghitung berapa banyak kata yang ada di dalam
 * string tersebut.
 * 
 * input:
 * "mengerjakan algoritma itu menyenangkan"
 * "typescript"
 * "  halo    dunia "
 * 
 * output:
 * 4
 * 1
 * 2
 * 
 */

/**
 * 
 * result = 0
 * inWord = false
 * 
 * loop i dari 0 sampai data.length - 1:
 *   jika data[i] bukan spasi DAN inWord == false:
 *     result += 1
 *     inWord = true
 *   jika data[i] adalah spasi:
 *     inWord = false
 * 
 * return result
 * 
 */

function hitungJumlahKataDalamSebuahStringWithFlag(data: string): number {
    let result = 0;
    let inWord = false;

    for (let i = 0; i < data.length; i++) {
        if (data[i] !== " " && inWord === false) {
            result++;
            inWord = true;
        } else if (data[i] === " ") {
            inWord = false;
        }
    }

    return result;
}

function hitungJumlahKataDalamSebuahString(data: string): number {
    let result = 0
    let temp = ""

    for (let i = 0; i < data.length; i++) {
        if (data[i] !== " ") {
            temp += data[i]
        } else {
            if (temp !== "") {
                result++
                temp=""
            }
        }
    }

    if (temp !== "") {
        result++;
    }

    return result;
}

console.log(hitungJumlahKataDalamSebuahStringWithFlag("mengerjakan algoritma itu menyenangkan"));
console.log(hitungJumlahKataDalamSebuahStringWithFlag("typescript"));
console.log(hitungJumlahKataDalamSebuahStringWithFlag("  halo    dunia "));

console.log(hitungJumlahKataDalamSebuahString("mengerjakan algoritma itu menyenangkan"));
console.log(hitungJumlahKataDalamSebuahString("typescript"));
console.log(hitungJumlahKataDalamSebuahString("  halo    dunia "));
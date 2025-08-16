/**
 * 
 * Kompresi String
 * 
 * Diberikan string berikut:
 * "aabccddddee"
 * 
 * Ubah string tersebut menjadi:
 * "a2bc2d4e2"
 * 
 * (kelompokkan huruf berurutan yang sama, dan ganti 
 * dengan huruf + jumlah jika lebih dari 1)
 * 
 * 1. Jelaskan logika atau pseudocode yang kamu gunakan
 * 2. Buat program menggunakan bahasa typescript
 * 
 */

/**
 * 1
 * function kompresiString(data):
 * result = ""
 * count = 1
 * 
 * for i from 0 to length(data) - 1:
 *   if i < length(data) - 1 AND data[i] == data [i + 1]:
 *     count = count + 1
 *   else:
 *     result = result + data[i]
 *     if count > 1:
 *       result = result + count
 *     count = 1
 * 
 * return result
 * 
 */

// 3
function kompresiString(data: string): string {
    let result = "";
    let count = 1;

    for (var i = 0; i < data.length; i++) {
        if (i < data.length - 1 && data[i] === data[i + 1]) {
            count++;
        } else {
            result += data[i];
            if (count > 1) {
                result += count;
            }
            count = 0;
        }
    }

    return result
}

const data = "aabccdddddee";
const output = kompresiString(data);
console.log(output);
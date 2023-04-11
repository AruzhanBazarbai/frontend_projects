/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]

// Создайте функцию "sumPositiveNegative" здесь

function sumPositiveNegative2(arr){
    // let cntPos=0,cntNeg=0
    // arr.forEach(el => {(el>=0)?cntPos+=el:cntNeg+=el});
    // return {
    //     positive: cntPos,
    //     negative: cntNeg
    // }

    return {
        positive: arr.reduce((cnt,el)=>(el>=0)?cnt+=el:cnt,0),
        negative: arr.reduce((cnt,el)=>(el<0)?cnt+=el:cnt,0),

    }
}
function sumPositiveNegative(arr){
    return arr.reduce((sums,el)=>{
        if(el>=0){
            return {
                ...sums,
                positive: sums.positive+el
            }
            
        }
        return {
            ...sums,
            negative: sums.negative+el
        }
        
    }, {positive:0, negative:0})
}
const result = sumPositiveNegative(nums)

console.log(result)
// { positive: 74, negative: -54 }

/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const MIN = 1000
const MAX = 9999

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min
}
function addF(arr){
    k=true
    while(k){
        t=true
        let r=getRandom(MIN,MAX)
        console.log(r)
        arr.forEach(element => {
            if(element==r){
                t=false
            }
        });
        if(t){
            arr.push(r)
            k=false
        }
    }
}
addF(myNumbers)
console.log(myNumbers)
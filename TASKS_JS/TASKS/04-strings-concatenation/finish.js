/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */
const name="Aruzhan",surname="Bazarbai",specialization="IT"
const ptt1=`My name is ${name} ${surname} and my specialization is ${specialization}`
const ptt2="My name is "+ name + " " +surname + " and my specialization is "+specialization
console.log(ptt1)
console.log(ptt2)
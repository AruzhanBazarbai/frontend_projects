/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

function sumObjectValues(obj){
  // let cnt=0
  // Object.keys(obj).forEach((el)=>(typeof obj[el]==='number')?cnt+=obj[el]:cnt)
  // return cnt
  
  return Object.keys(obj).reduce((cnt,el)=>(typeof obj[el]==='number')?cnt+=obj[el]:cnt,0)
}

// function sumObjectValues(obj){
//   let cnt=0
//   for(let el in obj){
//     if(obj.hasOwnProperty(el) && typeof obj[el]==='number') cnt+=obj[el]
//   }
//   return cnt
// }

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

// Создайте функцию здесь

const result = sumObjectValues(objectWithNumbers)
console.log(result)
//42

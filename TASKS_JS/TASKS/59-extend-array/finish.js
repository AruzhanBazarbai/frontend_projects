/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array{

    sum(){
        // return this.reduce((cnt,el)=>(typeof el==='number')?cnt+=el:cnt,0)
        return this.reduce((cnt,el)=>cnt+=el,0)
    }
    onlyNumbers(){
        return this.filter(el=>typeof el==='number')
    }
}

const arr1=new ExtendedArray(1,2,3,4)
console.log(arr1.sum())
console.log(arr1.onlyNumbers())
arr1.forEach(el=>console.log(el))


const arr2=new ExtendedArray(1,2,3,4,'abc','aaaa',5)
console.log(arr2.sum())
console.log(arr2.onlyNumbers())
arr2.forEach(el=>console.log(el))


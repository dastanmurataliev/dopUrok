// //Создать пустой массив и в него добавить
// // числа от 0 до 10 при помощи цикла for (используйте метод push() )
//
// //2. При помощи цикла выводить цифры в убывающем порядке от 20 до 0
//
// //3. Написать светофор используя условную конструкцию (if else).
// // В зависимости от введённого цвета в promt() выводить alert().
// // Если ввели 'красный' то выводить 'стоп' и так далее по цветам светофора.
// // Если ввели что либо другое то выводить alert() с подсказкой что надо вводить цвета
//
// // 1-Task
//
// var pustoyArray =[];
//
// for (var i = 0; i <=10; i++){
//     pustoyArray.push(i);
// }
// console.log(pustoyArray)
//
// //2-Task
//
// for (var num = 20; num >=0; num--){
//     console.log(num)
// }
//
// //3-Task
//
// var choice = prompt("Выберите цвет светофора?\n красный,\n желтый\nзеленый");
// if(choice === "красный" || choice === "Красный") {
//     alert("КУДА, НЕЛЬЗЯ НАХУЙ")
// } else if(choice ==="желтый" || choice ==="Желтый" ||choice ==="желтый"||choice ==="Жёлтый" ) {
//     alert("ТЫ ЕБЛАН, РАНО ЕЩЕ")
// }else if(choice === "зеленый"|| choice === "зелёный" || choice === "Зелёный" || choice === "Зеленый") {
//     alert("ЫДЫ ОТСЮДА НАХУЙ")
// } else {
//     alert("ЕБАТЬ ТЫ ДАУН, ДАЖЕ ЦВЕТА НЕ ЗНАЕШЬ")
// }
// // DZ-Evgenii Task-1
// //написать программу:нужно
// //запрашивать у пользователя его имя и фамилию (отдельным prompt)
// //и выводит приветствие в виде: Здравствуйте, Имя Фамилия!
// var name = prompt("Your NAME??");
// alert("Hello  " + name);
//
// // DZ-Evgenii Task-2
// //Написать программу которая спрашивает у пользователя 2 числа(через prompt)
// //и выводит в консоль какое больше. Если числа равны, то вывести что они равны
//
// let num1 = prompt("Введите первое число");
// let num2 = prompt("Введите второе число");
//
// if ( Number(num1 > num2)) {
//     alert("Первое больше")
// }
//  else if ( Number(num1 < num2)) {
//     alert("Второе больше")
// } else {
//      alert("Они равны")
// }

 // DZ-ATAI
//TASK-2
var  massiv =
    ["Privet",
    "Mir", "!"]
console.log(massiv[0] + ",  " + massiv[1]+ massiv[2]);

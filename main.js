var F = prompt("F");
var m = prompt("m");
var result = 0;

document.write('**************<br \/>');

document.write("Ускорение тела при силе F = " + F + " , и массе m = " + m + " <br \/>");

document.write("--------------------<br \/>");

result = F / m;
document.write("a = " + result + "<br \/>");

document.write("--------------------<br \/>");
document.write("end.<br \/><br \/><br \/><br \/>");



console.log('**************\n');

console.log('Список студентов зарегестрировавшихся на вебинар:\n');

var studentFirst = prompt('Возраст имя фамилия');
var studentSecond = prompt('Возраст имя фамилия');
var studentThird = prompt('Возраст имя фамилия');

console.log("1. " + studentFirst + "\n");
console.log("2. " + studentSecond + "\n");
console.log("3. " + studentThird + "\n");

var middleAges = (parseInt(studentFirst) + parseInt(studentSecond) + parseInt(studentThird)) / 3;

console.log("-------------- Средний возраст студента: " + Math.round(middleAges) + " --------------\n");

console.log("**************");
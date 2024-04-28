var QuestionFour = "<h1>QuestionFour:</h1>";
document.write(QuestionFour);

var tableNumber = prompt("Enter a number to show its multiplication table:");
var tableLenght = prompt("Enter the length  of the multiplication table:");

document.write("<h1>Multiplication Table of" + tableNumber + "</h1>");
for (var d = 1; d <= tableLenght; d++) {
  document.write(tableNumber + " x " + d + " = " + tableNumber * d + "<br>");
}

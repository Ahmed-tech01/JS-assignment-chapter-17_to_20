var QuestionNine = "<h1>QuestionNine:</h1>";
document.write(QuestionNine);

var n = [24, 53, 78, 91, 12];
var smallestNum = n[0];

for (var o = 1; o < n.length; o++) {
  if (n[o] < smallestNum) {
    smallestNum = n[o];
  }
}
document.write("The Smallest number is the Arrary is " + smallestNum);

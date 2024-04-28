var QuestionEight = "<h1>QuestionEight:</h1>";
document.write(QuestionEight);

var l = [24, 53, 78, 91, 12];
var largestNum = l[0];

for (var m = 1; m < l.length; m++) {
  if (l[m] > largestNum) {
    largestNum = l[m];
  }
}
document.write(" The Largest number in the arrary is: " + largestNum);

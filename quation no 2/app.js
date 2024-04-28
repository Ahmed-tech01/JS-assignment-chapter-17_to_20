var QuestionTwo = "<h1>QuestionTwo:</h1>";
document.write(QuestionTwo);

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 2],
];
for (var b = 0; b < 3; b++) {
    for (var c = 0; c < 4; c++) {
        document.write(matrix[b][c] + " ");
    }
    document.write("<br>");
}
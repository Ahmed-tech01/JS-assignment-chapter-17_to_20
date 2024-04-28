var QuestionSeven = "<h1>QuestionSeven:</h1>";
document.write(QuestionSeven);

var bakery = ["cake", "applepie", "cookie", "chips", "patties"];

var userInput = prompt(
  "Welcome to Pak Bakery What do you want to order on the menu we have; cake, applepie, cookie, chips, patties"
);

var found = bakery.includes(userInput);

if (found) {
  document.write(
    "The item you requested " + userInput + " is  available iin our bakery "
  );
} else {
  document.write(
    " We are sorry " + userInput + " is not available in our bakery "
  );
}

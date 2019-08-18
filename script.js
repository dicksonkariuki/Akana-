function validateform() {
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var gender = document.getElementsByName("gender");

  if (day == "" || day == null) {
    alert("Day is required");
  } else {
    if (!isNaN(day)) {
      if (day <= 0 || day > 31) {
        alert("day is invalid");
      } else {
        alert(day);
      }
    } else {
      alert("Number required");
    }
  }
  if (month == "" || month == null) {
    alert("month is required");
  } else {
    if (!isNaN(month)) {
      if (month <= 0 || month > 12) {
        alert("month is invalid");
      } else {
        alert(month);
      }
    } else {
      alert("Number required");
    }
  }

  if (year == "" || year == null) {
    alert("year is required");
  } else {
    if (isNaN(year)) {
      alert("year is invalid");
    } else {
      alert(year);
    }
  }
  if (gender[0].checked === false && gender[1].checked === false) {
    alert("select gender");
  } else {
    for (i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        alert(gender[i].value);
      }
    }
  }
  if (gender[i].value === true) {
    var DD = parseInt(prompt("Enter your date of birth:"));
    var MM = parseInt(prompt("Enter the month:"));
    var CC = parseInt(prompt("Enter the century:"));
    var YY = parseInt(prompt("Enter the year:"));
    function dayOfTheWeek() {
      var d = Math.floor(
        (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7
      );
      var pickedDay;
      switch (d) {
        case 0:
          pickedDay = "Sunday";
          alert("Your name is Kwasi and you were born on sunday");
          break;
        case 1:
          pickedDay = "Monday";
          alert("Your name is Kwadwo and you were born on monday");
          break;
        case 2:
          pickedDay = "Tuesday";
          alert("Your name is Kwabena and you were born on tuesday");
          break;
        case 3:
          pickedDay = "Wednesday";
          alert(" Your name is Kwaku and you were born on wednesday");
          break;
        case 4:
          pickedDay = "Thursday";
          alert(" Your name is Yaw and you were born on thursday");
          break;
        case 5:
          pickedDay = "Friday";
          alert(" Your name is Kofi and you were born on friday");
          break;
        case 6:
          pickedDay = "Saturday";
          alert("Your name is kwame and you were born on saturday");
          break;
        default:
          pickedDay = "You entered a non-existent day!";
      }
    }
  }
  alert(dayOfTheWeek());

  if (gender[i].value === false) {
    var DD = parseInt(prompt("Enter your date of birth:"));
    var MM = parseInt(prompt("Enter the month:"));
    var CC = parseInt(prompt("Enter the century:"));
    var YY = parseInt(prompt("Enter the year:"));
    function dayOfTheWeek() {
      var d = Math.floor(
        (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7
      );
      var pickedDay;
      switch (d) {
        case 0:
          pickedDay = "Sunday";
          alert("Your name is Akosua and you were born on sunday");
          break;
        case 1:
          pickedDay = "Monday";
          alert("Your name is Adwoa and you were born on monday");
          break;
        case 2:
          pickedDay = "Tuesday";
          alert("Your name is Abenaa and you were born on tuesday");
          break;
        case 3:
          pickedDay = "Wednesday";
          alert(" Your name is Akua and you were born on wednesday");
          break;
        case 4:
          pickedDay = "Thursday";
          alert(" Your name is Yaa and you were born on thursday");
          break;
        case 5:
          pickedDay = "Friday";
          alert(" Your name is Afua and you were born on friday");
          break;
        case 6:
          pickedDay = "Saturday";
          alert("Your name is Ama and you were born on saturday");
          break;
        default:
          pickedDay = "You entered a non-existent day!";
      }
    }
  }

  alert(dayOfTheWeek());
}

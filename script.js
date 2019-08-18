var male = {
  Sunday: Kwasi,
  Monday: Kwadwo,
  Tuesday: Kwabena,
  Wednesday: Kwaku,
  Thursday: Yaw,
  Friday: Kofi,
  Saturday: Kwame
};
function validateform() {
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var century = document.getElementById("century").value;
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

  if (century == "" || century == null) {
    alert("century is required");
  } else {
    if (isNaN(century)) {
      alert("century is invalid");
    } else {
      alert(century);
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
  if (gender === male) {
    var dD = Number(prompt("Enter date:"));
    var mM = Number(prompt("Enter month:"));
    var cC = Number(prompt("Enter century:"));
    var yY = Number(prompt("Enter year:"));
    function dayOfTheWeek() {
      var d = Math.round(
        (cC / 4 - 2 * cC - 1 + (5 * yY) / 4 + (26 * (mM + 1)) / 10 + dD) % 7
      );
      var pickedDay;
      switch (d) {
        case 0:
          pickedDay = "Sunday";
          alert(" Your name is Kwasi and you were born on sunday");
          break;
        case 1:
          pickedDay = "Monday";
          alert(" Your name is Kwadwo and you were born on monday");
          break;
        case 2:
          pickedDay = "Tuesday";
          alert(" Your name is Kwabena and you were born on tuesday");
          break;
        case 3:
          pickedDay = "Wednesday";
          alert("Your name is Kwaku and you were born on Wednesday");
          break;
        case 4:
          pickedDay = "Thurday";
          alert(" Your name is Yaw and you were born on thursday");
          break;
        case 5:
          pickedDay = "Friday";
          alert("Your name is Kofi and you were born on friday");
          break;
        case 6:
          pickedDay = "Saturday";
          alert("Your name is Kwame and you were born on saturday");
          break;
        default:
          pickedDay = "You are lost!";
      }
    }
    alert(dayOfTheWeek());
  }
}

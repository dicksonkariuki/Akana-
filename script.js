function validateform() {
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);
  var century = parseInt(document.getElementById("century").value);
  var gender = document.getElementsByName("gender");

  var male = {
    Sunday: "Kwasi",
    Monday: "Kwadwo",
    Tuesday: "Kwabena",
    Wednesday: "Kwaku",
    Thursday: "Yaw",
    Friday: "Kofi",
    Saturday: "Kwame"
  };
  var female = {
    Sunday: "Akosua",
    Monday: "Adwoa",
    Tuesday: "Abenaa",
    Wednesday: "Akua",
    Thursday: "Yaa",
    Friday: "Afua",
    Saturday: "Ama"
  };

  if (day == "" || day == null) {
    alert("Day is required");
  } else {
    if (!isNaN(day)) {
      if (day <= 0 || day > 31) {
        alert("day is invalid");
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
    } 
  }
  if (year == "" || year == null) {
    alert("year is required");
  } else {
    if (isNaN(year)) {
      alert("year is invalid");
    } 
  }

  function getGender() {
    for (var singleGender of gender) {
      if (singleGender.checked) {
        return singleGender.value;
      }
    }
  }

  var myGenderValue = getGender();


  var d = Math.round(
    (century / 4 -
      2 * century -
      1 +
      (5 * year) / 4 +
      (26 * (month + 1)) / 10 +
      day) %
      7
  );
  //alert(d);

  var pickedDay;
  if (myGenderValue == "male") {
    switch (d) {
      case 0:
        pickedDay = male.Sunday;
        alert(" Your name is Kwasi and you were born on sunday");
        break;
      case 1:
        pickedDay = male.Monday;
        alert(" Your name is Kwadwo and you were born on monday");
        break;
      case 2:
        pickedDay = male.Tuesday;
        alert(" Your name is Kwabena and you were born on tuesday");
        break;
      case 3:
        pickedDay = male.Wednesday;
        alert("Your name is Kwaku and you were born on Wednesday");
        break;
      case 4:
        pickedDay = male.Thurday;
        alert(" Your name is Yaw and you were born on thursday");
        break;
      case 5:
        pickedDay = male.Friday;
        alert("Your name is Kofi and you were born on friday");
        break;
      case 6:
        pickedDay = male.Saturday;
        alert("Your name is Kwame and you were born on saturday");
        break;
      default:
        pickedDay = "You are lost!";
    }
  } else if (myGenderValue == "female") {
    switch (d) {
      case 0:
        pickedDay = female.Sunday;
        alert(" Your name is Akosua and you were born on sunday");
        break;
      case 1:
        pickedDay = female.Monday;
        alert(" Your name is Adwoa and you were born on monday");
        break;
      case 2:
        pickedDay = female.Tuesday;
        alert(" Your name is Abena and you were born on tuesday");
        break;
      case 3:
        pickedDay = female.Wednesday;
        alert("Your name is Akua and you were born on Wednesday");
        break;
      case 4:
        pickedDay = female.Thurday;
        alert(" Your name is Yaa and you were born on thursday");
        break;
      case 5:
        pickedDay = female.Friday;
        alert("Your name is Afua and you were born on friday");
        break;
      case 6:
        pickedDay = female.Saturday;
        alert("Your name is Ama and you were born on saturday");
        break;
      default:
        pickedDay = "You picked a wrong day!";
    }
  }
  //alert(dayOfTheWeek());
}

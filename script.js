const numberOfDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function FebruaryDaysCheck(year) {
  if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
    numberOfDaysInMonth[1] = 29;
  } else {
    numberOfDaysInMonth[1] = 28;
  }
}

function CalculateAge() {
  let today = new Date();
  let selectedDate = new Date(document.getElementById('selected-date').value);

  let selectedMonth, selectedDay, selectedYear;
  let selectedDetails = {
    date: selectedDate.getDate(),
    month: selectedDate.getMonth() + 1,
    year: selectedDate.getFullYear(),
  };
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDate = today.getDate();

  FebruaryDaysCheck(currentYear);

  if (
    selectedDetails.year > currentYear ||
    (selectedDetails.month > currentMonth &&
      selectedDetails.year == currentYear) ||
    (selectedDetails.date > currentDate &&
      selectedDetails.month == currentMonth &&
      selectedDetails.year == currentYear)
  ) {
    alert('Not yet born?');
    displayResult('-', '-', '-');
    return;
  }

  selectedYear = currentYear - selectedDetails.year;

  if (currentMonth >= selectedDetails.month) {
    selectedMonth = currentMonth - selectedDetails.month;
  } else {
    selectedYear--;
    selectedMonth = 12 + currentMonth - selectedDetails.month;
  }

  if (currentDate >= selectedDetails.date) {
    selectedDay = currentDate - selectedDetails.date;
  } else {
    selectedMonth--;
    let days = numberOfDaysInMonth[currentMonth - 2];
    selectedDay = days + currentDate - selectedDetails.date;
    if (selectedMonth < 0) {
      selectedMonth = 11;
      selectedYear--;
    }
  }
  displayResult(selectedDay, selectedMonth, selectedYear);
}
function displayResult(bDate, bMonth, bYear) {
  document.getElementById('years').textContent = bYear;
  document.getElementById('numberOfDaysInMonth').textContent = bMonth;
  document.getElementById('days').textContent = bDate;
}

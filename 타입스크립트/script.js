document.addEventListener("DOMContentLoaded", function () {
  const calendar = document.getElementById("calendar");
  const monthYear = document.getElementById("monthYear");
  const days = document.getElementById("days");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  let currentDate = new Date();

  function renderCalendar() {
    days.innerHTML = "";
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    monthYear.textContent = `${currentDate.toLocaleString("default", {
      month: "long",
    })} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      const emptyCell = document.createElement("div");
      days.appendChild(emptyCell);
    }

    for (let i = 1; i <= lastDate; i++) {
      const dayCell = document.createElement("div");
      dayCell.textContent = i;
      if (
        i === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear()
      ) {
        dayCell.classList.add("today");
      }
      days.appendChild(dayCell);
    }
  }

  prevButton.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  nextButton.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  renderCalendar();
});

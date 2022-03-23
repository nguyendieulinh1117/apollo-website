const generateRandomNumber = (min, max) =>  {
  return Math.floor(Math.random() * (max - min) + min);
};

const events = document.querySelectorAll("#event-of-calendar .event");
const eventDays = [];

events.forEach((event) => {
  let eventDay = event.getAttribute("data-event");
  if(eventDay) eventDays.push(eventDay)
});

const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector("#calendar-event .days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector("#calendar-event .date").innerHTML = months[date.getMonth()] + " " + date.getFullYear();
  const icons = ["balloon", "jar", "rocket", "light"]

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    let dx = prevLastDay - x + 1;
    let mx = (date.getMonth() == 0) ? 12 : date.getMonth();
    let yx = (date.getMonth() == 0 ) ? date.getFullYear() - 1 : date.getFullYear();
    let haveEvent = eventDays.indexOf(dx + "-" + mx + "-" + yx) >= 0 ? 'have-event' : '';

    console.log(haveEvent);

    days += `<div class="prev-date ${haveEvent}" data-date="${dx}-${mx}-${yx}">
              <span>${dx}</span>
              <div class="event-icon"><img src="../images/pages/events/${icons[generateRandomNumber(0, icons.length)]}.svg"/></div>
            </div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    let di = i;
    let mi= date.getMonth() + 1;
    let yi = date.getFullYear();
    let haveEvent = eventDays.indexOf(di + "-" + mi + "-" + yi) >= 0 ? 'have-event' : '';

    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today ${haveEvent}" data-date="${di}-${mi}-${yi}">
                <span>${di}</span>
                <div class="event-icon"><img src="../images/pages/events/${icons[generateRandomNumber(0, icons.length)]}.svg"/></div>
              </div>`;
    } else {
      days += `<div class="${haveEvent}" data-date="${di}-${mi}-${yi}">
                <span>${di}</span>
                <div class="event-icon"><img src="../images/pages/events/${icons[generateRandomNumber(0, icons.length)]}.svg"/></div>
              </div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    let dj = j;
    let mj = (date.getMonth() == 11) ? 1 : date.getMonth() + 2;
    let yj= (date.getMonth() == 11 ) ? date.getFullYear() + 1 : date.getFullYear();
    let haveEvent = eventDays.indexOf(dj + "-" + mj + "-" + yj) >= 0 ? 'have-event' : '';

    days += `<div class="next-date ${haveEvent}" data-date="${dj}-${mj}-${yj}">
              <span>${dj}</span>
              <div class="event-icon"><img src="../images/pages/events/${icons[generateRandomNumber(0, icons.length)]}.svg"/></div>
            </div>`;
    monthDays.innerHTML = days;
  }
};

const addEventClickDate = () => {
  const days = document.querySelectorAll("#calendar-event .days div");
  days.forEach((day) => {
    day.addEventListener("click", (e) => {
        days.forEach((d) => {
          d.classList.remove("active");
        });
  
        day.classList.add("active");
        let dateClick = day.getAttribute("data-date");

        let eventList = document.querySelectorAll("#event-of-calendar .event");

        eventList.forEach((d) => {
          d.classList.remove("show");
          d.classList.add("hide");
        })

        let i = 0;
        let k = 0;
        eventList.forEach((ev) => {
          i++;
          if(dateClick == ev.getAttribute("data-event")){
            k++;
            ev.classList.add("show");
            ev.classList.remove("hide");
          };

          if(i == eventList.length && k == 0){
            let noEventEleChild = `<p class="no">Ngày ${dateClick} không có sự kiện nào.</p>`;
            document.querySelector("#event-of-calendar .event.no-event:not(.current-date)").classList.remove("hide");
            document.querySelector("#event-of-calendar .event.no-event:not(.current-date)").classList.add("show");
            document.querySelector("#event-of-calendar .event.no-event:not(.current-date)").innerHTML = noEventEleChild
          }
        });
      });
  });
}

document.querySelector("#calendar-event .prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
  addEventClickDate();
});

document.querySelector("#calendar-event .next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
  addEventClickDate();
});

renderCalendar();
addEventClickDate();


// special insert html
let noEventEleParent = document.querySelector(".event.current-date.no-event");
let eventList = document.querySelectorAll("#event-of-calendar .event");

eventList.forEach((ev) => {
  let d = ev.getAttribute("data-event");

  if(noEventEleParent.getAttribute("data-date") == d){
    noEventEleParent.classList.add("hide");
    ev.classList.remove("hide");
    ev.classList.add("show");

    return false;
  }else{
    let noEventEleChild = `<p class="no">Ngày ${noEventEleParent.getAttribute("data-date")} không có sự kiện nào.</p>`;
    noEventEleParent.innerHTML = noEventEleChild
  }
});








const dateSpan = document.querySelectorAll(".currentDate");
const currDay = document.querySelectorAll(".currDay");
const currMonth = document.querySelectorAll(".currMonth");
const currYear = document.querySelectorAll(".currYear");
const publicDate = document.querySelectorAll('.publicDate')

const yesterdayDate = getYesterdayDate().toLocaleDateString('en', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

function getYesterdayDate() {
  let yesterday = new Date()
  yesterday.setMonth(yesterday.getMonth())
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday
}

document.querySelector('.yesterdayDate').innerHTML = yesterdayDate;

publicDate.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString('ch-ch', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  })
})

dateSpan.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString(
    "en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }
  );
});

currDay.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString(
    "es", {
    day: "numeric",
  }
  );
});

currMonth.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString(
    "es", {
    month: "long",
  }
  );
});

currYear.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString(
    "es", {
    year: "numeric",
  }
  );
});



let rand = Math.floor(Math.random() * (15 - 5) + 5);
$('.data-end-place').text(rand)


const updDate = getYesterdayDate().toLocaleDateString('es', {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  hour12: false,
  hour: "numeric",
  minute: "numeric",
})

function getYesterdayDate() {
  let yesterday = new Date()
  yesterday.setMonth(yesterday.getMonth())
  yesterday.setDate(yesterday.getDate())
  yesterday.setHours(yesterday.getHours())
  yesterday.setMinutes(yesterday.getMinutes() - 1527)
  return yesterday
}
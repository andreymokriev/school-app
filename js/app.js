let date;

//Вывод времени
function showTime(){
  date = new Date();
  let h = date.getHours(); 
  let m = date.getMinutes(); 
  let s = date.getSeconds();

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  let time = h + ":" + m + ":" + s;
  document.getElementById("MyClockDisplay").textContent = time;
  setTimeout(showTime, 1000);
}
//Получаем день недели на русском
function ShowDayOfWeek() {
  let daysOfWeek = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
  document.getElementById("DayOfWeekDisplay").textContent = daysOfWeek[date.getDay()];
}
//Получаем номер урока
function getLessons() {
  date = date.getDay();

  const lessons = [
    {
      0: 'Нет уроков', 1: 'Нет уроков', 2: 'Нет уроков', 3: 'Нет уроков', 4: 'Нет уроков', 5: 'Нет уроков', 6: 'Нет уроков' 
    },
    {
      0: 'Математика', 1: 'История', 2: 'Информатика', 3: 'Информатика', 4: 'Математика', 5: 'ОБЖ', 6: 'Астрономия' 
    },
    {
      0: 'Английский язык', 1: 'Английский язык', 2: 'Физика', 3: 'Физика', 4: 'География', 5: 'Информатика', 6: 'Информатика' 
    },
    {
      0: 'Математика', 1: 'Математика', 2: 'Литература', 3: 'Физика', 4: 'Физкультура', 5: 'Английский язык', 6: '' 
    },
    {
      0: 'Биология', 1: 'Химия', 2: 'Физкультура', 3: 'История', 4: 'Русский язык', 5: 'Литература', 6: 'Физика' 
    },
    {
      0: 'История', 1: 'Математика', 2: 'Физкультура', 3: 'Математика', 4: 'Физика', 5: 'Русский язык', 6: 'Литература' 
    },
    {
      0: 'Нет уроков', 1: 'Нет уроков', 2: 'Нет уроков', 3: 'Нет уроков', 4: 'Нет уроков', 5: 'Нет уроков', 6: 'Нет уроков' 
    }
  ]

  lessonsQuery = document.querySelectorAll('.lesson');
  for (let i = 0; i < lessonsQuery.length; i++) {
    lessonsQuery[i].textContent = lessons[date][i];
    lessonsQuery[i].textContent = i+1 + '. ' + lessonsQuery[i].textContent;
  }
}

// Tasks
options = document.querySelector('select');
textarea = document.querySelector('txtarea');

// Сохранение данных
function taskSave() {
  let subject;

  for (let i = 0; i < options.length; i++) {
   if (options[i].selected) {
    subject = options[i].value;
   }
  }
  localStorage.setItem(subject,txtarea.value);
}

//Загрузка данных
function taskLoad() {
  let subject;

  for (let i = 0; i < options.length; i++) {
   if (options[i].selected) {
    subject = options[i].value;
   }
  }
  txtarea.value = localStorage.getItem(subject);
}


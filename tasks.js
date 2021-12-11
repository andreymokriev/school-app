options = document.querySelector('select');
textarea = document.querySelector('txtarea');

function taskSave() {
  let subject;

  for (let i = 0; i < options.length; i++) {
   if (options[i].selected) {
    subject = options[i].value;
   }
  }

  task = txtarea.value;

  localStorage.setItem(subject,task);
}

function taskLoad() {
  let subject;

  for (let i = 0; i < options.length; i++) {
   if (options[i].selected) {
    subject = options[i].value;
   }
  }

  txtarea.value = localStorage.getItem(subject);
}
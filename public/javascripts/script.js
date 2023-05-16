const hamburger = document.getElementById('hamburger')
const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('overlay')

let menuOpen = false

function openMenu() {
  menuOpen = true
  overlay.style.display = 'block'
  sidebar.style.width = '250px'
}

function closeMenu() {
  menuOpen = false
  overlay.style.display = 'none'
  sidebar.style.width = '0px'
}

hamburger.addEventListener('click', function () {
  if (!menuOpen) {
    openMenu()
  }
})

overlay.addEventListener('click', function () {
  if (menuOpen) {
    closeMenu()
  }
})


/*
var quizFr1 = document.getElementById("quiz-fr1");
var quizFr23 = document.getElementById("quiz-fr2-fr3");
var quizFr45 = document.getElementById("quiz-fr4-fr5");
var quizFr67 = document.getElementById("quiz-fr6-fr7");
var choixGroupe = document.getElementById("groupe");

const commencer = document.getElementById("commencer");
commencer.addEventListener("click", showGroupe());
*/

function showGroupe() {
  var choixGroupe = document.getElementById("groupe");
  choixGroupe.style.visibility = "visible";
}

function showQuizByLevel() {
  var choixGroupe = document.getElementById("groupe");
  var quizFr1 = document.getElementById("quiz-fr1");
  var quizFr23 = document.getElementById("quiz-fr2-fr3");
  var quizFr45 = document.getElementById("quiz-fr4-fr5");
  var quizFr67 = document.getElementById("quiz-fr6-fr7");
  var groupes = document.getElementsByName("groupe");
  for (var i = 0; i < groupes.length; i++) {
    groupes[i].onclick = function () {
      var value = groupes[i].value;
      return recupererNiveau(value);
      /*if (value == "fr1") {
        quizFr1.style.visibility = "visible";
      } else if (value == "fr23") {
        quizFr23.style.visibility = "visible";
      } else if (value == "fr45") {
        quizFr45.style.visibility = "visible";
      } else if (value == "fr67") {
        quizFr67.style.visibility = "visible";
      }*/
    };
    choixGroupe.style.display = none;
  }
}

function submitSavedRal12() {
  const serializedData = localStorage.getItem('ral-fr12');
  if (serializedData && navigator.onLine) {
    const data = JSON.parse(serializedData);
    const formData = data.formData;
    var logPath = path.join(__dirname, './../docs/reponses/logRal12.json');
    fs.writeFileSync(logPath, formData, "utf-8");
    localStorage.removeItem('ral-fr12');
  }
}

/*
window.addEventListener('load', () => {
  const savedForms = JSON.parse(localStorage.getItem('ral-fr12'));
  if (savedForms) {
    submitSavedRal12();
  }
})
*/

var tempe = 60;
var boucle = setInterval(elp, 1000);

function elp() {
  tempe = tempe - 1;
  var redir = document.querySelector(".redir");
  redir.textContent = "[FERMETURE DANS " + tempe + "S]";

  if (tempe == 0) {

   clearInterval(boucle);
    window.close("classification.html");
  }
}



/* const text = document.querySelector('.demoDate')

const now2 = new Date().getTime();
const countdownDate2 = new Date('January 4, 2022 21:30:00').getTime();
 console.log(now2, countdownDate2);



function getChrono(){

const now = new Date().getTime();
const countdownDate = new Date('January 4, 2022 21:30:00').getTime();

const distanceBase = countdownDate - now;

const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
const hours = Math.floor((distanceBase % (1000 * 60 * 60 *24)) / (1000 * 60 *60));
const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000*60));
const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000);


text.innerText = ` ${days}j ${hours}h ${minutes}m ${seconds}s  `;


if (distanceBase< 0){
        clearInterval(countDownInterval);
}

 if (days < 1)   {
   if (hours < 10) {
      if (minutes < 60) {


         let body = document.querySelector("body");
         body.classList.add('active');
         let date = document.querySelector(".demoDate");
         date.classList.add('active');
         let tg1 = document.querySelector(".tg1");
         tg1.classList.add('active');
         let tg2 = document.querySelector(".tg2");
         tg2.classList.add('active');
         
      }
   }
 }



}

getChrono()

const countDownInterval = setInterval(() => {

   getChrono()
}, 1000);


*/





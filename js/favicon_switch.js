let timer;
let title = 'The Mirror';
let titleSwitch = [
  'SCROLL TO GET RICH!',
  'RICH LIFE HERE >>>',
  '5 MINS TO WEALTH!'
];
let faviconID = "#favicon";
let faviconNormal = "images/favicon.ico";
let faviconSwitch = "images/faviconSwitch.ico";
let TabIsActive = false;


function changeFav(fav, text) {
  document.title = text;
  $(faviconID).attr('href', fav)
}

window.onblur = () => {
  TabIsActive = false;
  setTimeout(() => {
    blink();
  }, 1000);
}

window.onfocus = () => {
  TabIsActive = true;
  blink();
}

let BlinkIsActive = false;


function blink() {
  if (TabIsActive == false) {
    timer = setInterval(function () {
      if (BlinkIsActive == false) {
        var attentionMessage = titleSwitch[Math.floor(Math.random() * titleSwitch.length)];
        changeFav(faviconSwitch, attentionMessage);
        BlinkIsActive = true;
      }
      else {
        changeFav(faviconNormal, title);
        BlinkIsActive = false;
      }
    }, 500);
  }
  else {
    changeFav(faviconNormal, title);
    clearInterval(timer);
  }
}

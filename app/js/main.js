//ticker


let ticker = ['#999', '#000', '==++', '1234', '@__-', '%3$@', '#&3^','@#*)','</p>','@16#','#@$#', '&#p^', '*633','####'];

function randTicker(ticker) {
  let random = Math.floor(Math.random() * ticker.length);
  return ticker[random];
}

let headerTicker = document.getElementById('header__ticker');

setInterval(function tickerTimer() {
  return headerTicker.innerHTML = randTicker(ticker);
}, 500)


//date

let todayDate = new Date();

let headerDate = document.getElementById('header__date');
headerDate.innerHTML = todayDate.toLocaleDateString();
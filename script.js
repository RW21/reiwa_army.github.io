
console.log('https://github.com/RW21')

console.log(`%c ______________________________________________
< This website was made by Rinze Watanabe. <3  >
< About Rinze Watanabe: http://rinzewatanabe.me>
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`, "font-family:monospace")

let reiwa_date = new Date(2019,5,1)
let current_date = new Date()

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDiffInDays(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}


difference = dateDiffInDays(current_date, reiwa_date);

var elem = document.getElementById("changeText");
elem.innerHTML = String(difference);

var elem = document.getElementById("changeText_");
elem.innerHTML = String(difference);


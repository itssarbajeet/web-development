// Select digital clock elements
let digitalHours = document.querySelector('.hour:nth-child(1)');
let digitalMinutes = document.querySelector('.seconds');
let digitalSeconds = document.querySelector('.minutes');
let ampm = document.querySelector('.ampm');

// Select analog clock elements
let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // Digital clock
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
    let ampmText = h >= 12 ? "PM" : "AM";

    if (h >= 12) {
        if (h > 12) {
            h = h - 12;
        }
    } else if (h === 0) {
        h = 12;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    // Update the digital clock elements including AM/PM
    digitalHours.textContent = h;
    digitalMinutes.textContent = s;
    digitalSeconds.textContent = m;
    ampm.textContent = ampmText;
}); // Update every 1 second (1000 milliseconds)

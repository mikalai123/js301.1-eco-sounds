console.log("Привет!");

const list1 = document.querySelector(".list1");
const list2 = document.querySelector(".list2");
const list3 = document.querySelector(".list3");
const list4 = document.querySelector(".list4");
const list5 = document.querySelector(".list5");
const btnPlay = document.querySelector(".btn");
const photo = document.querySelector(".body");
let isPlay = false;
const audio0 = new Audio();
audio0.src = "assets/audio/forest.mp3";
let current = audio0;
const audoi1 = new Audio();
const audoi2 = new Audio();
const audoi3 = new Audio();
const audoi4 = new Audio();
const audoi5 = new Audio();

function audioPlay1() {
    let audio = current;
    audio.pause();
    btnPlay.classList.add("active");
    audoi1.src = "assets/audio/solovey.mp3";
    audoi1.play();
    isPlay = true;
    photo.style.background = "url('assets/img/solovey.jpg')";
}
function audioPlay2() {
    let audio = current;
    audio.pause();
    btnPlay.classList.add("active");
    audoi2.src = "assets/audio/drozd.mp3";
    audoi2.play();
    isPlay = true;
    photo.style.background = "url('assets/img/drozd.jpg')";
}
function audioPlay3() {
    let audio = current;
    audio.pause();
    btnPlay.classList.add("active");
    audoi3.src = "assets/audio/zarynka.mp3";
    audoi3.play();
    isPlay = true;
    photo.style.background = "url('assets/img/zarynka.jpg')";
}
function audioPlay4() {
    let audio = current;
    audio.pause();
    btnPlay.classList.add("active");
    audoi4.src = "assets/audio/javoronok.mp3";
    audoi4.play();
    isPlay = true;
    photo.style.background = "url('assets/img/javoronok.jpg')";
}
function audioPlay5() {
    let audio = current;
    audio.pause();
    btnPlay.classList.add("active");
    audoi5.src = "assets/audio/slavka.mp3";
    audoi5.play();
    isPlay = true;
    photo.style.background = "url('assets/img/slavka.jpg')";
}
function audioPause() {

    if (!isPlay) {
        let audio = current;
        audio.play();
        console.log(current);
        isPlay = true;
        btnPlay.classList.add("active");

    } else {
        audio0.pause();
        audoi1.pause();
        audoi2.pause();
        audoi3.pause();
        audoi4.pause();
        audoi5.pause();
        btnPlay.classList.toggle("active");
        isPlay = false;

    }
}

btnPlay.addEventListener("click", audioPause);

const lists = document.querySelectorAll(".list");
for (let index = 0; index < lists.length; index++) {
    const element = lists[index];
    // element.classList.remove("open");
    element.addEventListener("click", function (event) {
        let btn = event.target.closest(".list");
        console.log(btn);
        if (btn == list1) {
            if (!isPlay) {
                btnPlay.style.transform = "rotate(" + 72 + "deg)";
                audioPlay1();
                current = audoi1;
                console.log(current);
            } else {
                audioPause()
            }
        } else if (btn == list2) {
            if (!isPlay) {
                btnPlay.style.transform = "rotate(" + 144 + "deg)";
                audioPlay2();
                current = audoi2;
                console.log(current);
            } else {
                audioPause()
            }
        } else if (btn == list3) {
            if (!isPlay) {
                btnPlay.style.transform = "rotate(" + 216 + "deg)";
                audioPlay3();
                current = audoi3;
            } else {
                audioPause()
            }
        } else if (btn == list4) {
            if (!isPlay) {
                btnPlay.style.transform = "rotate(" + 288 + "deg)";
                audioPlay4();
                current = audoi4;
            } else {
                audioPause()
            }
        } else if (btn == list5) {
            if (!isPlay) {
                btnPlay.style.transform = "rotate(" + 360 + "deg)";
                audioPlay5();
                current = audoi5;
            } else {
                audioPause()
            }
        }
    });
    element.addEventListener("mouseover", function () {
        isPlay = false;
        // console.log(isPlay);
    })
}

let logo = document.querySelector(".logo-img");
logo.addEventListener("click", function () {
    logo.classList.add("open");
    list1.classList.remove("open");
    list2.classList.remove("open");
    list3.classList.remove("open");
    list4.classList.remove("open");
    list5.classList.remove("open");
    let audio = current;
    audio.pause();
    // console.log("Logo");
    logo = audio0;
    logo.play();
    console.log(logo);
    btnPlay.classList.add("active");
    isPlay = true;
    photo.style.background = "url('assets/img/forest.jpg')";
    current = logo;
})

for (let index = 0; index < lists.length; index++) {
    const element = lists[index];
    let logo = document.querySelector(".logo-img");

    lists[0].addEventListener("click", function () {
        logo.classList.remove("open");
        element.classList.remove("open");
        lists[0].classList.add("open");
    })
    lists[1].addEventListener("click", function () {
        element.classList.remove("open");
        lists[1].classList.add("open");
    })
    lists[2].addEventListener("click", function () {
        element.classList.remove("open");
        lists[2].classList.add("open");
    })
    lists[3].addEventListener("click", function () {
        element.classList.remove("open");
        lists[3].classList.add("open");
    })
    lists[4].addEventListener("click", function () {
        element.classList.remove("open");
        lists[4].classList.add("open");
    })
}
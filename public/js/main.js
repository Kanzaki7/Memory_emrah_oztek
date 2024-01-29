//vidéo utilisée comme référence pour le système de shuffle et de match :
// https://www.youtube.com/watch?v=M0egyNvsN-Y

// déclaration des variables
let bruja = document.querySelector("#bruja");
bruja.play();
let mystical = document.querySelector(".mystical");
// let error = document.querySelector(".error");
// let interface = document.querySelector(".interface");

let section1 = document.querySelector(".section1");
let section2 = document.querySelector(".section2");
let modalWin = document.querySelector(".modalWin");
let modalPseudo = document.querySelector(".modalPseudo");
let modalMode = document.querySelector(".modalMode");
let btnModalWin = document.querySelector(".btnModalWin");
let btnModalPseudo = document.querySelector(".btnModalPseudo");
let btnModalMode = document.querySelector(".btnModalMode");

let paires = document.querySelectorAll(".paires");
let pairesArray = Array.from(paires);

let menuWindow3 = document.querySelector(".menuWindow3");
let menuWindow4 = document.querySelector(".menuWindow4");
let menuWindow5 = document.querySelector(".menuWindow5");
let menuWindow6 = document.querySelector(".menuWindow6");

let pseudo = document.querySelector(".pseudo");
let btnJouer = document.querySelector(".jouer");

let cards = document.querySelectorAll(".card");
let cardsArray = Array.from(cards);

let pairesText = document.querySelector(".pairesText");
let score = 0;
let nbrPaires = 0;

let timer = document.querySelector(".timer");

let tableListe = document.querySelector(".table-liste");

let bgCards3 = [
    "./public/img/Cards/Art Mexicain.jpg",
    "./public/img/Cards/Art Mexicain.jpg",
    "./public/img/Cards/flower-skull.png",
    "./public/img/Cards/flower-skull.png",
    "./public/img/Cards/roses-skull.jpg",
    "./public/img/Cards/roses-skull.jpg",
]
let bgCards4 = [
    "./public/img/Cards/Art Mexicain.jpg",
    "./public/img/Cards/Art Mexicain.jpg",
    "./public/img/Cards/flower-skull.png",
    "./public/img/Cards/flower-skull.png",
    "./public/img/Cards/roses-skull.jpg",
    "./public/img/Cards/roses-skull.jpg",
    "./public/img/Cards/multiple-skulls.jpg",
    "./public/img/Cards/multiple-skulls.jpg",
]
let bgCards5 = [
    "./public/img/Cards/Art Mexicain.jpg",
    "./public/img/Cards/Art Mexicain.jpg",
    "./public/img/Cards/flower-skull.png",
    "./public/img/Cards/flower-skull.png",
    "./public/img/Cards/roses-skull.jpg",
    "./public/img/Cards/roses-skull.jpg",
    "./public/img/Cards/multiple-skulls.jpg",
    "./public/img/Cards/multiple-skulls.jpg",
    "./public/img/Cards/violon-skull.jpg",
    "./public/img/Cards/violon-skull.jpg",
]
let bgCards6 = [
    "./public/img/Cards/Art Mexicain.jpg",
    "./public/img/Cards/Art Mexicain.jpg",
    "./public/img/Cards/flower-skull.png",
    "./public/img/Cards/flower-skull.png",
    "./public/img/Cards/roses-skull.jpg",
    "./public/img/Cards/roses-skull.jpg",
    "./public/img/Cards/multiple-skulls.jpg",
    "./public/img/Cards/multiple-skulls.jpg",
    "./public/img/Cards/violon-skull.jpg",
    "./public/img/Cards/violon-skull.jpg",
    "./public/img/Cards/white-skull.jpg",
    "./public/img/Cards/white-skull.jpg"
]


let exit = document.querySelector(".exit");

// déclarations des fonctions

let addActive = (e) => {
    e.classList.add("active");
}

let removeActive = (e) => {
    e.classList.remove("active");
}

let choixPaires = (e) => {
    console.log(e.target.innerText);
    switch (e.target.innerText) {
        case "3":
            nbrPaires = 3;
            menuWindow3.style = "display: flex";
            menuWindow4.style = "display: none";
            menuWindow5.style = "display: none";
            menuWindow6.style = "display: none";
            pairesText.innerText = score + " / " + nbrPaires;
            console.log(e.target.innerText);
            break;
        case "4":
            nbrPaires = 4;
            menuWindow4.style = "display: flex";
            menuWindow3.style = "display: none";
            menuWindow5.style = "display: none";
            menuWindow6.style = "display: none";
            pairesText.innerText = score + " / " + nbrPaires;
            console.log(e.target.innerText);
            break;
        case "5":
            nbrPaires = 5;
            menuWindow5.style = "display: flex";
            menuWindow3.style = "display: none";
            menuWindow4.style = "display: none";
            menuWindow6.style = "display: none";
            pairesText.innerText = score + " / " + nbrPaires;
            console.log(e.target.innerText);
            break;
        case "6":
            nbrPaires = 6;
            menuWindow6.style = "display: flex";
            menuWindow3.style = "display: none";
            menuWindow4.style = "display: none";
            menuWindow5.style = "display: none";
            pairesText.innerText = score + " / " + nbrPaires;
            console.log(e.target.innerText);
            break;
    }
}

let imgMenu3 = document.querySelectorAll(".img-menu3");
let imgMenu4 = document.querySelectorAll(".img-menu4");
let imgMenu5 = document.querySelectorAll(".img-menu5");
let imgMenu6 = document.querySelectorAll(".img-menu6");
let imgArray3 = Array.from(imgMenu3);
let imgArray4 = Array.from(imgMenu4);
let imgArray5 = Array.from(imgMenu5);
let imgArray6 = Array.from(imgMenu6);

let shuffleCards = () => {
    switch (nbrPaires) {
        case 3:
            let shuf_img3 = bgCards3.sort(() => (Math.random() > .5) ? 2 : -1);
            for (let i = 0; i < bgCards3.length; i++) {
                for (let j = 0; j < imgArray3.length; j++) {
                    if (i == j) {
                        imgArray3[j].src = shuf_img3[i];
                    }
                }
            }
            break;
        case 4:
            let shuf_img4 = bgCards4.sort(() => (Math.random() > .5) ? 2 : -1);
            for (let i = 0; i < bgCards4.length; i++) {
                for (let j = 0; j < imgArray4.length; j++) {
                    if (i == j) {
                        imgArray4[j].src = shuf_img4[i];
                    }
                }
            }
            break;
        case 5:
            let shuf_img5 = bgCards5.sort(() => (Math.random() > .5) ? 2 : -1);
            for (let i = 0; i < bgCards5.length; i++) {
                for (let j = 0; j < imgArray5.length; j++) {
                    if (i == j) {
                        imgArray5[j].src = shuf_img5[i];
                    }
                }
            }
            break;
        case 6:
            let shuf_img6 = bgCards6.sort(() => (Math.random() > .5) ? 2 : -1);
            for (let i = 0; i < bgCards6.length; i++) {
                for (let j = 0; j < imgArray6.length; j++) {
                    if (i == j) {
                        imgArray6[j].src = shuf_img6[i];
                    }
                }
            }
            break;
    }
}

let secondes = 0;

timerChrono=setInterval(()=>{
    secondes++;
    let timerEcran = secondes+"s";
    timer.innerText = timerEcran;


    btnJouer.addEventListener("click",() =>{
        secondes = 0;
        timerEcran = secondes+"s";
        timer.innerText = timerEcran;
    }) 
}, 1000)    

// addEventListeners

pairesArray.forEach(element => {
    element.addEventListener("click", choixPaires);
    element.addEventListener("mouseover", () => {
        element.classList.toggle("active");
    })
    element.addEventListener("mouseout", () => {
        element.classList.toggle("active");
    })
    element.addEventListener("click", () => {
        pairesArray.forEach(element => {
            element.classList.remove("active2");
        });
        element.classList.add("active2");
        interface.play();
    });
});


let nameInput = document.querySelector(".name-input");

nameInput.addEventListener("focus", () => {
    interface.play();
})

btnJouer.addEventListener("click", ()=> {
    if (nameInput.value == "") {
        modalPseudo.style = "display: block";
        interface.play();
    } else if (nbrPaires == 0) {
        modalMode.style = "display: block";
        interface.play();
    } else {
        section1.style = "display: none";
        section2.style = "display: flex";
        pseudo.innerText = nameInput.value;
        score = 0;
        pairesText.innerText = score + " / " + nbrPaires;
        timerChrono;
        shuffleCards();
        interface.play();
    }
});
btnJouer.addEventListener("mouseover", () => {
    btnJouer.classList.toggle("active");
})
btnJouer.addEventListener("mouseout", () => {
    btnJouer.classList.toggle("active");
})

let timerPlayer = "";

cardsArray.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.classList.toggle("active");
    })
    element.addEventListener("mouseout", () => {
        element.classList.toggle("active");
    })
    element.addEventListener("click", () => {
        element.classList.add("is-flipped");
        let pageFlip = document.querySelector(".pageFlip");
        pageFlip.play()
        setTimeout(() => {
            let flippedCards = document.querySelectorAll(".is-flipped");
            console.log(flippedCards);
            let flippedArray = Array.from(flippedCards);
            if (flippedArray.length > 1) {
                if (flippedArray[0].children[1].children[0].src == flippedArray[1].children[1].children[0].src) {
                    score++;
                    pairesText.innerText = score + " / " + nbrPaires;
                    flippedArray[0].classList.add("matched");
                    flippedArray[1].classList.add("matched");
                    let success = document.querySelector(".success");
                    success.play();
                    flippedArray[0].classList.remove("is-flipped");
                    flippedArray[1].classList.remove("is-flipped");
                    let cardMatched = document.querySelectorAll(".matched");
                    setTimeout(() => {
                        switch (nbrPaires) {
                            case 3:
                                if (cardMatched.length == 6) {
                                    timerPlayer = timer.innerText;
                                    timer.innerText = 0+"s";
                                    modalWin.style = "display: block";
                                    mystical.play();
                                }
                                break;
                            case 4:
                                if (cardMatched.length == 8) {
                                    timerPlayer = timer.innerText;
                                    timer.innerText = 0+"s";
                                    modalWin.style = "display: block";
                                    mystical.play();
                                }
                                break;
                            case 5:
                                if (cardMatched.length == 10) {
                                    timerPlayer = timer.innerText;
                                    timer.innerText = 0+"s";
                                    modalWin.style = "display: block";
                                    mystical.play();
                                }
                                break;
                            case 6:
                                if (cardMatched.length == 12) {
                                    timerPlayer = timer.innerText;
                                    timer.innerText = 0+"s";
                                    modalWin.style = "display: block";
                                    mystical.play();
                                }
                                break;
                        }
                    }, 500);
                } else {
                    flippedArray[0].classList.remove("is-flipped");
                    flippedArray[1].classList.remove("is-flipped");
                    error.play();
                }
            }
        }, 1800);
    })
});

exit.addEventListener("click", () => {
    cardsArray.forEach(element => {
        element.classList.remove("is-flipped");
        element.classList.remove("matched");
    });
    section1.style = "display: flex";
    section2.style = "display: none";
    nameInput.value = "";
})
exit.addEventListener("mouseover", () => {
    exit.classList.toggle("active");
})
exit.addEventListener("mouseout", () => {
    exit.classList.toggle("active");
})

btnModalWin.addEventListener("click", () => {
    cardsArray.forEach(element => {
        element.classList.remove("is-flipped");
        element.classList.remove("matched");
    });
    modalWin.style = "display: none";
    section1.style = "display: flex";
    section2.style = "display: none";
    nameInput.value = "";
    let divRank = document.createElement("div");
    let divPseudo = document.createElement("div");
    let divMode = document.createElement("div");
    let divTimer = document.createElement("div");
    let rank = document.querySelector(".rank");
    let pseudoDiv = document.querySelector(".pseudoDiv");
    let mode = document.querySelector(".mode");
    let temps = document.querySelector(".temps");
    divPseudo.innerText = pseudo.innerText;
    divMode.innerText = nbrPaires + " paires";
    divTimer.innerText = timerPlayer;
    if (parseInt(divTimer.innerText[0]) < parseInt(temps.children[0].innerText)) {
        rank.insertBefore(divRank, rank.children[0]);
        pseudoDiv.insertBefore(divPseudo, pseudoDiv.children[0]);
        mode.insertBefore(divMode, mode.children[0]);
        temps.insertBefore(divTimer, temps.children[0]);
    } else {
        rank.insertBefore(divRank, rank.children[0].nextElementSibling);
        pseudoDiv.insertBefore(divPseudo, pseudoDiv.children[0].nextElementSibling);
        mode.insertBefore(divMode, mode.children[0].nextElementSibling);
        temps.insertBefore(divTimer, temps.children[0].nextElementSibling);
    }
})
btnModalWin.addEventListener("mouseover", () => {
    btnModalWin.classList.toggle("active");
})
btnModalWin.addEventListener("mouseout", () => {
    btnModalWin.classList.toggle("active");
})

btnModalPseudo.addEventListener("click", () => {
    modalPseudo.style = "display: none";
})
btnModalPseudo.addEventListener("mouseover", () => {
    btnModalPseudo.classList.toggle("active");
})
btnModalPseudo.addEventListener("mouseout", () => {
    btnModalPseudo.classList.toggle("active");
})

btnModalMode.addEventListener("click", () => {
    modalMode.style = "display: none";
})
btnModalMode.addEventListener("mouseover", () => {
    btnModalMode.classList.toggle("active");
})
btnModalMode.addEventListener("mouseout", () => {
    btnModalMode.classList.toggle("active");
})

let sound = document.querySelector(".sound");
let sound2 = document.querySelector(".sound2");


let volume = document.querySelector(".volume-control");
volume.addEventListener("input", function(e) {
    bruja.volume = e.currentTarget.value / 100;
})
sound.addEventListener("click", ()=>{
    volume.classList.toggle("volume-active");
})
sound.addEventListener("mouseover", () => {
    sound.classList.toggle("active");
})
sound.addEventListener("mouseout", () => {
    sound.classList.toggle("active");
})

sound2.addEventListener("click", ()=>{
    volume.classList.toggle("volume-active");
})
sound2.addEventListener("mouseover", () => {
    sound2.classList.toggle("active");
})
sound2.addEventListener("mouseout", () => {
    sound2.classList.toggle("active");
})


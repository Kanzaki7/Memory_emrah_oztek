// déclaration des variables

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

let nbrPaires = 0;

let bgCards3 = [
    "./public/img/Cards/Art Mexicain.jpg",
    "./public/img/Cards/Art Mexicain.jpg",
    "./public/img/Cards/flower-skull.png",
    "./public/img/Cards/flower-skull.png",
    "./public/img/Cards/hearth-skull.jpg",
    "./public/img/Cards/hearth-skull.jpg",
]
let bgCards4 = [
    "./public/img/Cards/Art Mexicain.jpg",
    "./public/img/Cards/Art Mexicain.jpg",
    "./public/img/Cards/flower-skull.png",
    "./public/img/Cards/flower-skull.png",
    "./public/img/Cards/hearth-skull.jpg",
    "./public/img/Cards/hearth-skull.jpg",
    "./public/img/Cards/multiple-skulls.jpg",
    "./public/img/Cards/multiple-skulls.jpg",
]
let bgCards5 = [
    "./public/img/Cards/Art Mexicain.jpg",
    "./public/img/Cards/Art Mexicain.jpg",
    "./public/img/Cards/flower-skull.png",
    "./public/img/Cards/flower-skull.png",
    "./public/img/Cards/hearth-skull.jpg",
    "./public/img/Cards/hearth-skull.jpg",
    "./public/img/Cards/multiple-skulls.jpg",
    "./public/img/Cards/multiple-skulls.jpg",
    "./public/img/Cards/red-skull.jpg",
    "./public/img/Cards/red-skull.jpg",
]
let bgCards6 = [
    "./public/img/Cards/Art Mexicain.jpg",
    "./public/img/Cards/Art Mexicain.jpg",
    "./public/img/Cards/flower-skull.png",
    "./public/img/Cards/flower-skull.png",
    "./public/img/Cards/roses-skull.jpg",
    "./public/img/Cards/roses-skull.jpg",
    "./public/img/Cards/roses-skull2.jpg",
    "./public/img/Cards/roses-skull2.jpg",
    "./public/img/Cards/violon-skull.jpg",
    "./public/img/Cards/violon-skull.jpg",
    "./public/img/Cards/white-skull.jpg",
    "./public/img/Cards/white-skull.jpg"
]


let exit = document.querySelector(".exit");

// déclarations des fonctions

let choixPaires = (e) => {
    console.log(e.target.innerText);
    switch (e.target.innerText) {
        case "3":
            menuWindow3.style = "display: flex";
            menuWindow4.style = "display: none";
            menuWindow5.style = "display: none";
            menuWindow6.style = "display: none";
            console.log(e.target.innerText);
            nbrPaires = 3;
            break;
        case "4":
            menuWindow4.style = "display: flex";
            menuWindow3.style = "display: none";
            menuWindow5.style = "display: none";
            menuWindow6.style = "display: none";
            console.log(e.target.innerText);
            nbrPaires = 4;
            break;
        case "5":
            menuWindow5.style = "display: flex";
            menuWindow3.style = "display: none";
            menuWindow4.style = "display: none";
            menuWindow6.style = "display: none";
            console.log(e.target.innerText);
            nbrPaires = 5;
            break;
        case "6":
            menuWindow6.style = "display: flex";
            menuWindow3.style = "display: none";
            menuWindow4.style = "display: none";
            menuWindow5.style = "display: none";
            console.log(e.target.innerText);
            nbrPaires = 6;
            break;
    }
}

let nomJoueur = () => {
    let nameInput = document.querySelector(".name-input");
    pseudo.innerText = nameInput.value;
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


// addEventListeners

pairesArray.forEach(element => {
    element.addEventListener("click", choixPaires)
});

btnJouer.addEventListener("click", nomJoueur);
btnJouer.addEventListener("click", shuffleCards);


cardsArray.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.add("is-flipped");
        setTimeout(() => {
            let flippedCards = document.querySelectorAll(".is-flipped");
            console.log(flippedCards);
            let flippedArray = Array.from(flippedCards);
            if (flippedArray.length > 1) {
                if (flippedArray[0].children[1].children[0].src == flippedArray[1].children[1].children[0].src) {
                    flippedArray[0].classList.add("matched");
                    flippedArray[1].classList.add("matched");
                    flippedArray[0].classList.remove("is-flipped");
                    flippedArray[1].classList.remove("is-flipped");
                    let cardMatched = document.querySelectorAll(".matched");
                    switch (nbrPaires) {
                        case 3:
                            if (cardMatched.length == 6) {
                                alert("win");
                            }
                            break;
                        case 4:
                            if (cardMatched.length == 8) {
                                alert("win");
                            }
                            break;
                        case 5:
                            if (cardMatched.length == 10) {
                                alert("win");
                            }
                            break;
                        case 6:
                            if (cardMatched.length == 12) {
                                alert("win");
                            }
                            break;
                    }
                } else {
                    flippedArray[0].classList.remove("is-flipped");
                    flippedArray[1].classList.remove("is-flipped");
                }
            }
        }, 1000);
    })
});

exit.addEventListener("click", () => {
    cardsArray.forEach(element => {
        element.classList.remove("is-flipped");
        element.classList.remove("matched");
    });
})


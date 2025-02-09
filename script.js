let n1;
let n2;
let opSelector;
let ansOpt;
let answer;
let qNo = document.getElementById("Qno");
let score = document.getElementById("score");
let question = document.getElementById("question");
let buttons = document.getElementsByTagName("button");
let start = document.getElementById("start-btn");
let fScore = document.getElementById("final-score");
let startBox = document.getElementById("start-game");
let gameBox = document.getElementById("in-game");
let endBox = document.getElementById("end-game");
let progress = document.getElementById("progress");
let message = document.getElementById("message");
let timer = document.getElementById("timer");
let operator = ['+', '-', '*', '/']; // kokie veiksmai daromi
let maxQuestions = 10; // maksimalus klausimų skaičius
let t;

function restart() {
    score.innerHTML = "0"; // nustato pradinį rezultatą (0)
    qNo.innerHTML = "0"; // nustato klausimą (0)
    nextQuestion(); // paleidžia naują klausimą

    gameBox.style.display = "block" // perjungia ekrano režimus
    startBox.style.display = "none";
    endBox.style.display = "none";
    timer.style.display = "block";
}

function whenFinished() {
    console.log("Finished.")
    gameBox.style.display = "none" // paslepia žaidimo ekraną, rodo pabaigos ekraną
    startBox.style.display = "none";
    endBox.style.display = "flex";
    lastmessage(); // iškviečia paskutinę žinutę, kuri rodo rezultatą pagal surinktus taškus
}

function suggestNumber() {
    let min = 10; // mažiausias skaičius
    let max = 30; // didžiausias skaičius
    return Math.floor(Math.random() * (max - min)) + min; // sugalvoja random skaičių 0 iki 1, palieka sviekają dalį, sugalvotą skaičių * max - min + min
}

function nextQuestion() {

    progress.style.width = "100%";
    timed();
    // timed();
    fScore.innerHTML = score.innerHTML;
    if (qNo.innerText === ""+maxQuestions) { // tikrina ar pasiektas maksimalus klausimų skaičius
        whenFinished(); // jiegu pasiektas tada iškviečia pabaigos ekraną
    }
    n1 = suggestNumber(); // sukuria skaičių
    n2 = suggestNumber(); // sukuria skaičių
    opSelector = operator[Math.floor(Math.random() * operator.length)]; // parenka atsitiktinį veiksmą (+, -, /, :)

    if (opSelector === "/") {
        for (let i = 0; i < 200; i++) { // kartoja 200 kartų
            if (n1 % n2 == 0 && n1 != 0 && n2 != 0 && n2 != 1 && n1 != n2) {
                break;
            }
            n1 = suggestNumber(); // jeigu per 200 kartų neatitinka if sąlygos tai kartoja
            n2 = suggestNumber(); // jeigu per 200 kartų neatitinka if sąlygos tai kartoja
        }
    }

    if (opSelector === "*") {
        for (let i = 0; i < 100; i++) { // kartoja 100 kartų
            if (n1 * n2 <= 1000) { // tikrina ar sandauga nėra lygi 1000
                break;
            }
            n1 = suggestNumber(); // jeigu per 100 kartų neatitinka if sąlygos tai kartoja
            n2 = suggestNumber(); // jeigu per 100 kartų neatitinka if sąlygos tai kartoja
        }
    }
    question.innerHTML = n1 + opSelector + n2;
    answer = eval(question.innerHTML);
    question.innerHTML = question.innerHTML + " = ?";

    // console.log("answer: " + answer);
    getOptions();
    getQNo();

}

function getOptions() {

    for (let i = 0; i < 5; i++ && i != ansOpt) { // teisingas atsakymas įdedamas į vieną iš mygtukų
        if (answer > 100) { // jeigu atsakymas daugiau nei 100
            buttons[i].innerHTML = answer + Math.floor(Math.random() * answer * 0.4); // atsakymą + (0-1(palieka sveikają dalį) * 0.4
        } else if (answer > 30 && answer < 100) {
            buttons[i].innerHTML = answer + Math.floor(Math.random() * answer * 0.6); // atsakymą + (0-1(palieka sveikają dalį) * 0.6
        } else {
            buttons[i].innerHTML = suggestNumber();
        }

        if (answer < 0) {
            buttons[i].innerHTML = "-" + buttons[i].innerHTML;
        }
    }
    ansOpt = Math.floor(Math.random() * 5);
    buttons[ansOpt].innerHTML = answer;
}

function getQNo() {
    qNo.innerHTML = parseInt(qNo.innerHTML) + 1; // padidina klausimo numerį
    // console.log("Q no: " + qNo.innerHTML);
}

function getScore() { // atnaujina rezultatą
    score.innerHTML = parseInt(score.innerHTML) + parseInt(progress.style.width); // Prideda likusį laiką prie taškų
    // console.log(score.innerHTML);
}

function doWhenCorrect(i) { // Keičia teisingo mygtuko spalvą į žalią ir prideda taškų
    buttons[i].style.color = "#fff";
    buttons[i].style.backgroundColor = "green";
    getScore();
}

function doWhenIncorrect(i) { // Keičia neteisingo mygtuko spalvą į raudoną
    buttons[i].style.color = "#fff";
    buttons[i].style.backgroundColor = "#fb3640";
    // console.log("wrong");
}

function outro(i) { // Po trumpo vėlavimo pradeda naują klausimą ir atkuria mygtukų spalvas
    setTimeout(() => {
        nextQuestion();
        buttons[i].style.color = "#000";
        buttons[i].style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }, 500);
}

function lastmessage() {
    clearInterval(t);
    if (fScore.innerText >= 800) {
        let emoji = "&#128525";
        message.innerHTML = "WOW !! NEĮTIKĖTINA !!" + emoji; // Jei taškai > 800 – „WOW !! Neįtikėtina!!“ + emoji
    } else if (fScore.innerText >= 500) {
        let emoji = "&#128531";
        message.innerHTML = "LABAI ARTI !!" + emoji; // Jei taškai > 500 – „Labai arti!“ + emoji
    } else if (fScore.innerText >= 100) {
        let emoji = "&#128549";
        message.innerHTML = "Sėkmės kitą kartą " + emoji; // Jei taškai > 100 – „Sėkmės kitą kartą“ + emoji
    } else {
        let emoji = "&#128577";
        message.innerHTML = "Bloga sėkmė " + emoji; // Jei mažiau – „Bloga sėkmė“ + emoji
    }
}

function timed() { // valdo laikmatį
    t = setInterval(() => {
        progress.style.width = (parseInt(progress.style.width) - 1) + "%";
        // console.log("called");
        if (parseInt(progress.style.width) == 0) { // jei progreso juosta pasiekia 0%, automatiškai pereina prie kito klausimo
            clearInterval(t);
            nextQuestion();
        }
    }, 100) // laikmačio greitis m/s
}

buttons[0].addEventListener('click', () => {
    if (buttons[0].innerText == answer) { // patikrina ar teisingai ar ne
        doWhenCorrect(0);
    } else {
        doWhenIncorrect(0);
    }
    clearInterval(t); // sustabdo laikmatį
    outro(0); // pakeičia klausimą po 500 m/s
});
buttons[1].addEventListener('click', () => {
    if (buttons[1].innerText == answer) { // patikrina ar teisingai ar ne
        doWhenCorrect(1);
    } else {
        doWhenIncorrect(1);
    }
    clearInterval(t); // sustabdo laikmatį
    outro(1); // pakeičia klausimą po 500 m/s
});
buttons[2].addEventListener('click', () => {
    if (buttons[2].innerText == answer) { // patikrina ar teisingai ar ne
        doWhenCorrect(2);
    } else {
        doWhenIncorrect(2);
    }
    clearInterval(t); // sustabdo laikmatį
    outro(2); // pakeičia klausimą po 500 m/s
});
buttons[3].addEventListener('click', () => {
    if (buttons[3].innerText == answer) { // patikrina ar teisingai ar ne
        doWhenCorrect(3);
    } else {
        doWhenIncorrect(3);
    }
    clearInterval(t); // sustabdo laikmatį
    outro(3); // pakeičia klausimą po 500 m/s
});
buttons[4].addEventListener('click', () => {
    if (buttons[4].innerText == answer) { // patikrina ar teisingai ar ne
        doWhenCorrect(4);
    } else {
        doWhenIncorrect(4);
    }
    clearInterval(t); // sustabdo laikmatį
    outro(4); // pakeičia klausimą po 500 m/s
});
# [Mano svetainė](https://dairidas.github.io/math-quiz/)
# **APŽVALGA**
> Paprastas matematikos klausimynas, sukurtas tik naudojant HTML, CSS ir JavaScript. Klausimai ir atsakymo parinktys generuojami atsitiktinai, be jokios API pagalbos.
---

# **LAIKMAČIO FUNKCIJA**
> Dabar pridėta laikmačio funkcija. Kiekvienas klausimas turi laiko limitą (10 sek.).
> Jei vartotojas nesugeba pasirinkti atsakymo per šį laiką, pasirodys kitas klausimas, o už šį klausimą bus suteikiama nulis taškų.
---
# **BALAVIMO SISTEMA**
> Pridėta laiko pagrindu veikianti funkcija. Taškai dabar bus skaičiuojami pagal tai, kiek laiko liko užduodant klausimą.
> Naudojama paprasta linijinė funkcija (pavyzdžiui: jei vartotojas atsako į klausimą per 9 sek., balas už šį klausimą bus 90%).
---

- [x] Įsikelti į savo failus iš:

### [kecav/math-quiz](https://github.com/kecav/math-quiz)
---
- [x] Išsiverčiau svetainę į lietuvių kalbą
---
- [x] 5 galimi atsakymo variantai, su kodu apačioje:
```html
<div class="answer-card">
    <button>Atsakymas A</button> <!-- 1 atsakymo laukelis -->
    <button>Atsakymas B</button> <!-- 2 atsakymo laukelis -->
    <button>Atsakymas C</button> <!-- 3 atsakymo laukelis -->
    <button>Atsakymas D</button> <!-- 4 atsakymo laukelis -->
    <button>Atsakymas E</button> <!-- 5 atsakymo laukelis -->
</div>
```
```js
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
```
---
- [x] Galima pakeisti klausimų skaitmenų skaičių, su kodu apačioje:
```js
function suggestNumber() {
    let min = 10; // mažiausias skaičius
    let max = 30; // didžiausias skaičius
    return Math.floor(Math.random() * (max - min)) + min; // sugalvoja random skaičių 0 iki 1, palieka sviekają dalį, sugalvotą skaičių * (max - min) + min
}
```
---
- [x] Galima pasirinkti kokius veiksmus užduoti, su kodu apačioje:
```js
let operator = ['+', '-', '*', '/']; // kokie veiksmai daromi
```
---
- [x] Galima pakeisti klausimų skaičių, su kodu apačioje:
```html
<p>Klausimas :
    <span id="Qno">0</span>/10 <!-- Klausimų skaičius (10)-->
</p>
```
```js
let maxQuestions = 10; // maksimalus klausimų skaičius
```
---
- [x] Pakeisti/sutvarkyti nuotraukas
---
- [x] Galima pakeisti laikmačio greitį, su kodu apačioje:
```js
function timed() {
    t = setInterval(() => {
        progress.style.width = (parseInt(progress.style.width) - 1) + "%";
        // console.log("called");
        if (parseInt(progress.style.width) == 0) {
            clearInterval(t);
            nextQuestion();
        }
    }, 100) // laikmačio greitis m/s
}
```
---
- [x] Pridėti komentarai prie html ir js kodų
---
- [ ] Pridėti High Score/Rekordas
---

![image](https://raw.githubusercontent.com/dairidas/math-quiz/master/media/img4.png)
---
![image](https://raw.githubusercontent.com/dairidas/math-quiz/master/media/img5.png)
---
![image](https://raw.githubusercontent.com/dairidas/math-quiz/master/media/img6.png)


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
    <button>Atsakymas A</button>
    <button>Atsakymas B</button>
    <button>Atsakymas C</button>
    <button>Atsakymas D</button>
    <button>Atsakymas E</button>
</div>
```
```js
buttons[0].addEventListener('click', () => {
    if (buttons[0].innerText == answer) {
        doWhenCorrect(0);
    } else {
        doWhenIncorrect(0);
    }
    clearInterval(t);
    outro(0);
});
buttons[1].addEventListener('click', () => {
    if (buttons[1].innerText == answer) {
        doWhenCorrect(1);
    } else {
        doWhenIncorrect(1);
    }
    clearInterval(t);
    outro(1);
});
buttons[2].addEventListener('click', () => {
    if (buttons[2].innerText == answer) {
        doWhenCorrect(2);
    } else {
        doWhenIncorrect(2);;
    }
    clearInterval(t);
    outro(2);
});
buttons[3].addEventListener('click', () => {
    if (buttons[3].innerText == answer) {
        doWhenCorrect(3);
    } else {
        doWhenIncorrect(3);
    }
    clearInterval(t);
    outro(3);
});
buttons[4].addEventListener('click', () => {
    if (buttons[4].innerText == answer) {
        doWhenCorrect(4);
    } else {
        doWhenIncorrect(4);
    }
    clearInterval(t);
    outro(4);
});
```
---
- [x] Galima pakeisti klausimų skaitmenų skaičių, su kodu apačioje:
```js
function suggestNumber() {
    let min = 10
    let max = 20;
    return Math.floor(Math.random() * (max - min)) + min;
}
```
---
- [x] Galima pasirinkti kokius veiksmus užduoti, su kodu apačioje:
```js
let operator = ['+', '-', '*', '/'];
```
---
- [x] Galima pakeisti klausimų skaičių, su kodu apačioje:
```html
<p>Klausimas :
    <span id="Qno">0</span>/10
</p>
```
```js
let maxQuestions = 10;
```
---
- [ ] Pakeisti/sutvarkyti nuotraukas
---

![image](https://raw.githubusercontent.com/dairidas/math-quiz/master/media/img4.png)
---
![image](https://raw.githubusercontent.com/dairidas/math-quiz/master/media/img5.png)
---
![image](https://raw.githubusercontent.com/dairidas/math-quiz/master/media/img6.png)


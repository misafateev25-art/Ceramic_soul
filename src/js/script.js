
import "/src/sass/style.scss";

let text = "fuck"
const pnum = 3.14
const isOpen = true

let a
let b = 'niger'

console.log(a, b)
console.log(text)
console.log(pnum)

const person = {
    name: "Mc Lovin",
    age: 19
}

const titles = ["Make your dream come true or decorate your home", "create or buy", "our store"]

function calc(a, b) {
    console.log(a + b);
}

calc(34, 33)

if (isOpen) {
    console.log('The shop is open, u can buy marijuana')
} else {
    console.log('Go to home Mc Lovin');
}

const vase = document.querySelector('.touch__label')
console.log(vase);

vase.addEventListener('click', () => {
    console.log(vase);
})

// Чтобы работали стили на Github нужно ставить точку перед /src/sass...
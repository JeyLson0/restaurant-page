import {midContainer, Content} from "./mid-content"
import chocoBartImg from "./assets/food-menu/choco-bart.svg"
import classicHomerImg from "./assets/food-menu/classic-homer.svg"
import lisaVanillaImg from "./assets/food-menu/lisa-vanilla.svg"
import blueberryMargeImg from "./assets/food-menu/blueberry-marge.svg"
import maggiesFavoriteImg from "./assets/food-menu/maggies-favorite.svg"

const menu = new Content('div', 'div', 'div', 'div', 'div')

class Donut {
    constructor(donutTitle, imgUrl) {
        this.donutTitle = donutTitle;
        this.imgURl = imgUrl;
        this.description 
    }
}

const classicHomer = new Donut("Classic Homer", classicHomerImg)
const chocoBart = new Donut("Choco Bart",  chocoBartImg)
const lisaVanilla = new Donut("Lisa Vanilla", lisaVanillaImg)
const blueberryMarge = new Donut("Blueberry Marge",  blueberryMargeImg)
const maggiesFavorite = new Donut("Maggies Favorite", maggiesFavoriteImg)

classicHomer.description = "Drenched in a luscious pink strawberry glaze and adorned with rainbow sprinkles, this delightful treat pays homage to Homer Simpson's love for all things sweet"
chocoBart.description = "This delectable donut is generously coated in rich, smooth chocolate icing, perfectly capturing the spirited essence of everyone's favorite troublemaker"
lisaVanilla.description = "For those with a sophisticated palate, this elegant donut is coated in smooth vanilla glaze and salted-caramel drizzle, providing a simple yet refined flavor."
blueberryMarge.description = "A unique donut medley featuring blueberry glaze and vanilla sprinkles"
maggiesFavorite.description = "A classic donut filled with luscious cream, topped with rich white-chocolate icing with a hint of raspberry flavor, and sprinkled with maggies "

const donutArr = [classicHomer, chocoBart, lisaVanilla, blueberryMarge, maggiesFavorite ]

function createMenu() {
    menu.createParents()
    let imgDOM = []
    let divDOM = []
    for(let i = 0; i < menu.parentElem.length; i++) {
        menu.parentElem[i].classList.add("donut-container")
        let parentDiv = menu.parentElem[i];
        let img = document.createElement('img')
        let div = document.createElement('div')
        parentDiv.appendChild(img)
        parentDiv.appendChild(div)
        imgDOM.push(img)
        divDOM.push(div)
    }

    for(let i = 0; i < imgDOM.length; i++) {
        imgDOM[i].setAttribute("src", donutArr[i].imgURl)
        imgDOM[i].setAttribute("class", "donut")
        imgDOM[i].setAttribute("alt", donutArr[i].donutTitle)
    }

    for(let i = 0; i < divDOM.length; i++) {
        let bold = document.createElement('STRONG')
        let p = document.createElement('p')
        bold.textContent = donutArr[i].donutTitle;
        p.textContent = donutArr[i].description;
        divDOM[i].classList.add('donut-description')
        divDOM[i].appendChild(bold)
        divDOM[i].appendChild(p)
    }

    let priceDiv = document.createElement('div')
    priceDiv.classList.add('price-list')
    midContainer.appendChild(priceDiv)
    for(let i = 0; i < 3; i++){
        let p = document.createElement('p')
        if(i == 0) {
            p.textContent = "$1.99 - 1 piece"
            priceDiv.appendChild(p)
        }
        if(i == 1) {
            p.textContent = "$10.99 - half-dozen"
            priceDiv.appendChild(p)
        }
        if(i == 2) {
            p.textContent = "$19.99 - dozen"
            priceDiv.appendChild(p)
        }
    }

}

export {menu, createMenu}
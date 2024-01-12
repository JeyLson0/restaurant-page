import {Content} from "./contentClass"

const aboutUsNav = new Content('p', 'p', 'p')

function createAboutUs() {
    aboutUsNav.createParents()
    let paragraph = aboutUsNav.parentElem
    paragraph[0].textContent = "Welcome to Doh'nuts! Our journey began with a passion for crafting delectable, handcrafted confections that transcend the ordinary. "
    paragraph[1].textContent = "Established with love, our donut shop strives to bring joy to every customer by creating a delightful online space that mirrors the warmth and charm of our physical store."
    paragraph[2].textContent = "We take pride in our unique assortment of donuts, each inspired by the characters from the beloved Simpsons series. From the mischievous Choco Bart to the sophisticated Lisa Vanilla, every creation tells a story and invites you to embark on a flavor adventure."
}

export {createAboutUs, aboutUsNav}
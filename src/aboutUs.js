import {midContainer, Content} from "./mid-content"

const aboutUsNav = new Content('p', 'p', 'p')

function createAboutUs() {
    aboutUsNav.createParents()
    let paragraph = aboutUsNav.parentElem
    paragraph[0].textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ratione vero debitis minima delectus dolores quidem voluptatem ipsam ex distinctio, quaerat voluptates commodi, ipsum praesentium reprehenderit alias beatae, sint aliquid."
    paragraph[1].textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ratione vero debitis minima delectus dolores quidem voluptatem ipsam ex distinctio, quaerat voluptates commodi, ipsum praesentium reprehenderit alias beatae, sint aliquid."
    paragraph[2].textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ratione vero debitis minima delectus dolores quidem voluptatem ipsam ex distinctio, quaerat voluptates commodi, ipsum praesentium reprehenderit alias beatae, sint aliquid."
    console.log(this)
}

export {midContainer, createAboutUs, aboutUsNav}
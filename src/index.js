import '../src/assets/bg-donut.svg'
import '../src/assets/style.css'

const midContainer = document.querySelector('#middle-container')

class Content {
    constructor(...tags) {
        this.tags = tags // this will be an array.
        this.parentElem = []
        this.createParents =  function() {
            for (let i = 0; i < this.tags.length; i++) {
                let string = this.tags[i]
                let element = document.createElement(string)
                this.parentElem.push(element)
                midContainer.appendChild(element)
            }
        }
        this.removeAll = function() {
            for (let i = 0; !this.parentElem.length == 0; i++) {
                this.parentElem.splice(0, 1)
                midContainer.removeChild(midContainer.children[0])
            }
        }
    }
};

const aboutUsNav = new Content('p', 'p', 'p')
let test = 'test'

function createAboutUs() {
    aboutUsNav.createParents()
    aboutUsNav.parentElem[0].textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ratione vero debitis minima delectus dolores quidem voluptatem ipsam ex distinctio, quaerat voluptates commodi, ipsum praesentium reprehenderit alias beatae, sint aliquid."
    aboutUsNav.parentElem[1].textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ratione vero debitis minima delectus dolores quidem voluptatem ipsam ex distinctio, quaerat voluptates commodi, ipsum praesentium reprehenderit alias beatae, sint aliquid."
    aboutUsNav.parentElem[2].textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ratione vero debitis minima delectus dolores quidem voluptatem ipsam ex distinctio, quaerat voluptates commodi, ipsum praesentium reprehenderit alias beatae, sint aliquid."
}

createAboutUs()

export {Content, aboutUsNav, test}

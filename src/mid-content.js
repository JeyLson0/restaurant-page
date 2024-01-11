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


export {midContainer, Content}
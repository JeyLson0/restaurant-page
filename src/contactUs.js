import {Content, midContainer} from "./mid-content"

const contactUsNav = new Content('div', 'div')

function createContactUs() {
    contactUsNav.createParents()
    let headerArr = []
    let paraArr = []
    for (let i = 0; i < contactUsNav.parentElem.length; i++){
        let parentDiv = contactUsNav.parentElem[i];
        parentDiv.classList.add('div-contact')
        let header = document.createElement('h3')
        header.classList.add('contact-header')
        let p = document.createElement('p')
        p.classList.add('contact-paragraph')
        contactUsNav.parentElem[i].append(header)    
        contactUsNav.parentElem[i].append(p) 
        headerArr.push(header);
        paraArr.push(p);
    }

    headerArr[0].textContent = "Email:"
    headerArr[1].textContent = "Contact:"
    paraArr[0].textContent = "dohnuts@testmail.com"
    paraArr[1].textContent = "+1 012 345 6789"
}

export {createContactUs}
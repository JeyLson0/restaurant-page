import '../src/assets/bg-donut.svg'
import '../src/assets/style.css'
import * as aboutUs from "./aboutUs.js"
import * as menu from "./menu.js"
import * as contactUs from "./contactUs.js"

let navBar = function() {
    let aboutUsElem = document.querySelector('#about-us-link')
    let menuElem = document.querySelector('#menu-link')
    let contactUsElem = document.querySelector('#contact-us-link')
    aboutUsElem.addEventListener('click', (e) => {
        aboutUs.aboutUsNav.removeAll()
        menu.menuNav.removeAll()
        contactUs.contactUsNav.removeAll()
        aboutUs.createAboutUs();
    })
    menuElem.addEventListener('click', (e) => {
        aboutUs.aboutUsNav.removeAll()
        menu.menuNav.removeAll()
        contactUs.contactUsNav.removeAll()
        menu.createMenu();
    })
    contactUsElem.addEventListener('click', (e) => {
        aboutUs.aboutUsNav.removeAll()
        menu.menuNav.removeAll()
        contactUs.contactUsNav.removeAll()
        contactUs.createContactUs();
    })
    return {aboutUs, menu, contactUs}
}();

aboutUs.createAboutUs()

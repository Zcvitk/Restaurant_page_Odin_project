import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";


const createTabs = () => {
    const content = document.querySelector('#content');



// 3 divs
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');

// divs id
div1.setAttribute('id', 'home-btn');
div2.setAttribute('id', 'menu-btn');
div3.setAttribute('id', 'contact-btn');

// divs classes and content
div1.classList.add('tab');
div2.classList.add('tab');
div3.classList.add('tab');

// divs content
div1.textContent = 'Home';
div2.textContent = 'Menu';
div3.textContent = 'Contact';

// append divs to content
content.appendChild(div1);
content.appendChild(div2);
content.appendChild(div3);

div1.addEventListener('click', () => {
    clearContent();
    createRestaurantHomePage();
   
    
})

div2.addEventListener('click', () => {
    clearContent();
    createMenuPage();
})

div3.addEventListener('click', () => {
    clearContent();
    createContactPage();
})

}

function clearContent() {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");
    if (pageContent) {
        content.removeChild(pageContent);
    }
}

export default createTabs;
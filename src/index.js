import { pageLoad } from "./pageload";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

pageLoad();

const switchTab = (function() {
    const homeTab = document.querySelector('.home');
    homeTab.addEventListener("click", pageLoad);

    const menuTab = document.querySelector('.menu');
    menuTab.addEventListener("click", loadMenu);

    const contactTab = document.querySelector('.contact');
    contactTab.addEventListener("click", loadContact);
})(); 
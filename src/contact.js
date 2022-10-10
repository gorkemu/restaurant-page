export function loadContact() {
    const content = document.getElementById('content');
    content.replaceChildren();

    const heading = document.createElement('h1');
    heading.textContent = "Contact Us";
    content.appendChild(heading);

    const para1 = document.createElement('p');
    para1.textContent = "Address: Teşvikiye Mah, Anonim Sk. No: 1/A, Şişli"
    content.appendChild(para1);

    const para2 = document.createElement('p');
    para2.textContent = "Phone: +90 666 730 15 00"
    content.appendChild(para2);
};
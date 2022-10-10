export function pageLoad() {
    const content = document.getElementById('content');
    content.replaceChildren();

    const heading = document.createElement('h1');
    heading.textContent = "Welcome to The Cafe!";
    content.appendChild(heading);

    const para = document.createElement('p');
    para.textContent = "Get your favorite tea or coffee. Yes, you can work here too!"
    content.appendChild(para);

    const image = document.createElement('img');
    image.src = "../src/assets/micheile-dot-com-EOJqV9lZNDk-unsplash.jpg";
    content.appendChild(image);
    image.style.height = '600px';
    // content.style.backgroundImage = "url(../src/assets/micheile-dot-com-EOJqV9lZNDk-unsplash.jpg)";

    const copyright = document.createElement('p');
    copyright.innerHTML = 'Photo by <a href="https://unsplash.com/@micheile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">micheile dot com</a> on <a href="https://unsplash.com/s/photos/tea-cafe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    content.appendChild(copyright);
}
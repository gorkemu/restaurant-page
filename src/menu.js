export function loadMenu() {
    const content = document.getElementById('content');
    content.replaceChildren();

    const heading = document.createElement('h1');
    heading.textContent = "Menu";
    content.appendChild(heading);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container'); 

    const div1 = document.createElement('div');
    const para1 = document.createElement('p');
    para1.textContent = "Black Tea";
    div1.appendChild(para1);
    
    const image1 = document.createElement('img');
    image1.src = "../dist/assets/yana-bhKdRjYJ1CA-unsplash.jpg"
    div1.appendChild(image1);
    
    const copyright1 = document.createElement('p');
    copyright1.innerHTML = 'Photo by <a href="https://unsplash.com/@yana_bjorn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Yana</a> on <a href="https://unsplash.com/s/photos/black-tea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    div1.appendChild(copyright1);

    menuContainer.appendChild(div1);
    
    const div2 = document.createElement('div');
    const para2 = document.createElement('p');
    para2.textContent = "Turkish Coffee"
    div2.appendChild(para2);    

    const image2 = document.createElement('img');
    image2.src = "../dist/assets/hoang-tran-n6wM3bld7YU-unsplash.jpg"
    div2.appendChild(image2);

    const copyright2 = document.createElement('p');
    copyright2.innerHTML = 'Photo by <a href="https://unsplash.com/@a_hiding_creature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hoang Tran</a> on <a href="https://unsplash.com/s/photos/turkish-coffee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    div2.appendChild(copyright2);

    menuContainer.appendChild(div2);
    content.appendChild(menuContainer);

}
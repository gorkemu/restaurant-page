(()=>{"use strict";function e(){const e=document.getElementById("content");e.replaceChildren();const t=document.createElement("h1");t.textContent="Welcome to The Cafe!",e.appendChild(t);const n=document.createElement("p");n.textContent="Get your favorite tea or coffee. Yes, you can work here too!",e.appendChild(n);const c=document.createElement("img");c.src="../src/assets/micheile-dot-com-EOJqV9lZNDk-unsplash.jpg",e.appendChild(c),c.style.height="600px";const o=document.createElement("p");o.innerHTML='Photo by <a href="https://unsplash.com/@micheile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">micheile dot com</a> on <a href="https://unsplash.com/s/photos/tea-cafe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',e.appendChild(o)}function t(){const e=document.getElementById("content");e.replaceChildren();const t=document.createElement("h1");t.textContent="Menu",e.appendChild(t);const n=document.createElement("div");n.classList.add("menu-container");const c=document.createElement("div"),o=document.createElement("p");o.textContent="Black Tea",c.appendChild(o);const a=document.createElement("img");a.src="../src/assets/yana-bhKdRjYJ1CA-unsplash.jpg",c.appendChild(a);const s=document.createElement("p");s.innerHTML='Photo by <a href="https://unsplash.com/@yana_bjorn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Yana</a> on <a href="https://unsplash.com/s/photos/black-tea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',c.appendChild(s),n.appendChild(c);const d=document.createElement("div"),m=document.createElement("p");m.textContent="Turkish Coffee",d.appendChild(m);const r=document.createElement("img");r.src="../src/assets/hoang-tran-n6wM3bld7YU-unsplash.jpg",d.appendChild(r);const l=document.createElement("p");l.innerHTML='Photo by <a href="https://unsplash.com/@a_hiding_creature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hoang Tran</a> on <a href="https://unsplash.com/s/photos/turkish-coffee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',d.appendChild(l),n.appendChild(d),e.appendChild(n)}function n(){const e=document.getElementById("content");e.replaceChildren();const t=document.createElement("h1");t.textContent="Contact Us",e.appendChild(t);const n=document.createElement("p");n.textContent="Address: Teşvikiye Mah, Anonim Sk. No: 1/A, Şişli",e.appendChild(n);const c=document.createElement("p");c.textContent="Phone: +90 666 730 15 00",e.appendChild(c)}e(),document.querySelector(".home").addEventListener("click",e),document.querySelector(".menu").addEventListener("click",t),document.querySelector(".contact").addEventListener("click",n)})();
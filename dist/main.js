(()=>{"use strict";const e=function(){let e=document.querySelector("#main-content");e.innerHTML="";let t=document.createElement("div");t.id="home",e.appendChild(t);let n=document.createElement("div");n.classList.add("homeText"),n.textContent="Experience France's Greatest Coffee";let c=document.createElement("div");c.classList.add("homeText"),c.textContent="Serving Delicious Coffee Since 1995";let a=document.createElement("img");a.src="Assets/coffee-profile2.jpg";let d=document.createElement("div");d.classList.add("homeText"),d.textContent="Order Online Or Visit Us Today",t.append(n,c,a,d)};function t(e){document.querySelectorAll(".nav-list").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}(function(){let n=document.querySelector("#content"),c=document.createElement("header"),a=document.createElement("div");a.id="title";let d=document.createElement("div");d.id="nav";let m=document.createElement("button");m.textContent="Home",m.classList.add("nav-list"),t(m),m.addEventListener("click",(n=>{n.target.classList.contains("active")||(t(m),e())}));let l=document.createElement("button");l.textContent="Menu",l.classList.add("nav-list"),l.addEventListener("click",(e=>{e.target.classList.contains("active")||(t(l),function(){let e=document.querySelector("#main-content");e.innerHTML="";let t=document.createElement("div");t.id="menu",e.appendChild(t);let n=document.createElement("div");n.classList.add("menu-title"),n.textContent="Drink Menu";let c=document.createElement("div");c.id="coffee-menu";let a=document.createElement("div"),d=document.createElement("img");d.src="Assets/menu-2.jpg";let m=document.createElement("div");a.append(d,m);let l=document.createElement("div"),i=document.createElement("img");i.src="Assets/menu-3.jpg";let r=document.createElement("div");l.append(i,r);let s=document.createElement("div"),o=document.createElement("img");o.src="Assets/menu-4.jpg";let u=document.createElement("div");s.append(o,u);let p=document.createElement("div"),E=document.createElement("img");E.src="Assets/menu-5.jpg";let v=document.createElement("div");p.append(E,v);let g=document.createElement("div"),f=document.createElement("img");f.src="Assets/menu-6.jpg";let C=document.createElement("div");g.append(f,C);let L=document.createElement("div"),h=document.createElement("img");h.src="Assets/menu-7.jpg";let x=document.createElement("div");L.append(h,x),c.append(a,l,s,p,g,L);let y=document.createElement("div");y.classList.add("menu-text"),y.textContent="Items are fully customizable and made to order. We carry a large variety of locally crafted syrups and sweeteners! Come give them a try today!",t.append(n,c,y)}())}));let i=document.createElement("button");i.textContent="Contact",i.classList.add("nav-list"),i.addEventListener("click",(e=>{e.target.classList.contains("active")||(t(i),function(){let e=document.querySelector("#main-content");e.innerHTML="";let t=document.createElement("div");t.id="contact-body",e.append(t);let n=document.createElement("div");n.id="contact-info";let c=document.createElement("div");c.classList.add("contact-area");let a=document.createElement("img");a.src="/Assets/phone.png";let d=document.createElement("div");d.innerText="+33 1 47 34 16 98",c.append(a,d);let m=document.createElement("div");m.classList.add("contact-area");let l=document.createElement("img");l.src="/Assets/address.png";let i=document.createElement("div");i.innerText="Champ de Mars, 5 Av. Anatole, Paris, France",m.append(l,i);let r=document.createElement("div");r.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.292292616468133!3d48.85837007928744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc314ca897ac2a350!2zNDjCsDUxJzI4LjkiTiAywrAxNyc0MC44IkU!5e0!3m2!1sen!2sus!4v1674803489068!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',n.append(c,m),t.append(n,r)}())})),d.append(m,l,i),a.textContent="Café l’Espérance",n.appendChild(c),c.append(a,d);let r=document.createElement("div");r.id="main-content",c.insertAdjacentElement("afterend",r);let s=document.createElement("footer"),o=document.createElement("p"),u=document.createElement("a"),p=document.createElement("img");o.textContent="Created by:",p.src="Assets/GitHub-Mark-Light-32px.png",u.href="https://github.com/dtariq1995",u.textContent="Daanyaal Tariq",n.appendChild(s),s.append(o,p,u)})(),e()})();
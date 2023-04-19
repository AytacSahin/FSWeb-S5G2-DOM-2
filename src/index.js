import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click",function(e){
    e.target.style.color = "red";
    alert("Bana tıkladın!")
});

// Kodlar buraya gelecek!

// event-1 (mouseover):
document.querySelector("nav").addEventListener("mouseover",function(e){
e.target.style.color = "cyan";
e.target.style.fontWeight = "800";
setTimeout(() => {
    e.target.style.color = ""
    e.target.style.fontWeight = "";
}, 500);
});

// event-2 (keydown):
document.querySelector("body").addEventListener("keydown",function(e){
    e.target.style.backgroundColor = "rgba(0,0,0,0.4)";
    setTimeout(() => {
        e.target.style.backgroundColor = "";
    }, 1000);
});

// event-3 (wheel):
document.querySelector("img").addEventListener("wheel",function(e){
    e.preventDefault();
    e.target.src = "https://picsum.photos/1000/300";
    setTimeout(() => {
        e.target.src = "http://localhost:9000/img/fun-bus.jpg";
    }, 1000);
});

// event-4 (load):
window.addEventListener("load", () => {
    alert("Dikkat! Bu Site 18 Yaşından Küçükler İçindir!");
});

// event-5 (Focus):
const newInput = document.createElement("input");
newInput.className = "input-buton"
newInput.textContent = "Yazı yaz!"
newInput.style.fontSize = "20px"
newInput.style.width = "20vw"
newInput.setAttribute("value", "Hangi Otobüse Binmek İstersin?");
document.querySelector(".intro").append(newInput); 

document.querySelector(".input-buton").addEventListener("focus", function(e){
    e.target.style.backgroundColor = 'yellow';
});

// event-6 (resize):
window.addEventListener("resize", (e) => {
   e.target.style.backgroundColor = "black";
});

// event-7 (scroll):
window.addEventListener("scroll", (e) => {
alert("Nereye gidiyosun?");
});

// event-8 (select):
const welcome = document.querySelector(".intro h2");
welcome.addEventListener("select", (e) => {
    e.target.style.backgroundColor = "red";
});

// event-9 (dbclick):
header.addEventListener("dbclick", (e) => {
    e.target.style.backgroundColor = "white";
});
 


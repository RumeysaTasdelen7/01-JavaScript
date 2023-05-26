const renk1 = document.querySelector(".red");
const renk2 = document.querySelector(".white");
const renk3 = document.querySelector(".blue");
const renk4 = document.querySelector(".black");
const renk5 = document.querySelector(".green");

const yanlisDurum=document.querySelector("#yanlis");

renk1.innerText="Kırmızı"
renk2.innerText="Beyaz"
renk3.innerText="Mavi"
renk4.innerText="Siyah"
renk5.innerText="Yeşil"

let yanlisHal=`
<div class="row">
            <div class="red">Siyah</div>
            <div class="white">Kırmızı</div>
            <div class="blue">Yeşil</div>
            <div class="black">Mavi</div>
            <div class="green">Beyaz</div>
        </div>

`;

yanlisDurum.innerHTML = `<h1 style=color:red; text-align:center >YANLIS RENKLER</h1>
${yanlisHal}`;


